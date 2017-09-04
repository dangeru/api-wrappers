# Awoo API wrapper for ruby
require 'json'
require 'uri'
require 'net/http'
require 'http-cookie'

class Dangeru
  API = "/api/v2".freeze
  Dummy_uri = "http://dummy/".freeze
  @hostname = ""
  @ssl = false

  def initialize(url="dangeru.us", https=false)
    @hostname = url
    @ssl = https
  end

  ###############
  # Used to get entries from a board
  # Returns a formatted JSON entry for the board
  def get_board(board, cookie = nil)
    JSON.parse(get(API + "/board/" + board, cookie).body)
  end

  ###############
  # Used to get replies from a thread
  # Returns a formatted JSON entry for the replies
  def get_thread_replies(id, cookie = nil)
    JSON.parse(get(API + "/thread/" + id.to_s + "/replies", cookie).body)
  end

  ###############
  # Used to get metadata from a thread
  # Returns a formatted JSON entry for the metadata
  def get_thread_metadata(id, cookie = nil)
    JSON.parse(get(API + "/thread/" + id.to_s + "/metadata", cookie).body)
  end

  ###############
  # Used to find a post by title
  # Returns the post on success, and false on failure
  def find_post(board, title, cookie = nil)
    get_board(board, cookie).each do |post|
      if post["title"] == title
        return post
      end
    end
    return false
  end

  ###############
  # Used to authenticate as janitor
  # Returns an auth cookie
  def auth(name, pass)
    res = post("/mod", nil, {"username": name, "password": pass})
    jar = HTTP::CookieJar.new
    res.get_fields("Set-Cookie").each do |value|
      jar.parse(value, Dummy_uri)
    end
    jar
  end

  ###############
  # Used to post an OP to a board
  # Returns nothing
  def post_op(board, title, comment, cookie=nil, capcode=false)
    unless capcode then
      post("/post", cookie, {"board" => board, "title" => title, "comment" => comment})
    else
      post("/post", cookie, {"board" => board, "title" => title, "comment" => comment, "capcode" => "true"})
    end
  end

  ###############
  # Used to reply to an OP
  # Returns nothing
  def reply(parent_id, board, comment, cookie=nil, capcode=false)
    unless capcode then
      post("/reply", cookie, {"board" => board, "parent" => parent_id.to_s, "content" => comment})
    else
      post("/reply", cookie, {"board" => board, "parent" => parent_id.to_s, "content" => comment, "capcode" => "true"})
    end
  end

  # Moderation tools

  ###############
  # Used to sticky a post
  # Returns nothing
  def sticky(id, cookie, stickyness=1)
    post("/sticky/" + id.to_s, cookie, {"stickyness" => stickyness})
  end

  ###############
  # Used to unsticky a post
  # Returns nothing
  def unsticky(id, cookie)
    get("/unsticky/" + id.to_s, cookie)
  end

  ###############
  # Used to lock a post
  # Returns nothing
  def lock(id, cookie)
    get("/lock/" + id.to_s, cookie)
  end

  ###############
  # Used to unlock a post
  # Returns nothing
  def unlock(id, cookie)
    get("/unlock/" + id.to_s, cookie)
  end

  ###############
  # Used to move a post
  # Returns nothing
  def move(id, to, cookie)
    post("/move/" + id.to_s, cookie, {"board" => to})
  end

  # Helper functions

  def get(route, cookie = nil, params = nil)
    if @ssl then
      uri = URI("https://#{@hostname}/#{route}")
    else
      uri = URI("http://#{@hostname}/#{route}")
    end
    uri.query = URI.www_encode_form(params) if params
    Net::HTTP.start(@hostname, :use_ssl => @ssl) do |http|
      request = Net::HTTP::Get.new uri
      request["Cookie"] = HTTP::Cookie.cookie_value(cookie.cookies) if cookie
      http.request request
    end
  end

  def post(route, cookie = nil, params = nil)
    Net::HTTP.start(@hostname, :use_ssl => @ssl) do |http|
      request = Net::HTTP::Post.new route
      request.set_form_data(params) if params
      request["Cookie"] = HTTP::Cookie.cookie_value(cookie.cookies) if cookie
      http.request request
    end
  end
end
