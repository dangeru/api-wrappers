Gem::Specification.new do |s|
  s.name        = 'dangeru'
  s.version     = '1.0.0'
  s.date        = '2017-09-04'
  s.summary     = "dangeru.rb"
  s.description = "Awoo / danger/u/ API wrapper for ruby"
  s.authors     = ["prefetcher"]
  s.email       = '0xlunaric@gmail.com'
  s.files       = ["lib/dangeru.rb"]
  s.homepage    = 'http://rubygems.org/gems/dangeru'
  s.license       = 'MIT'
  s.add_runtime_dependency 'json', '>= 0'
  s.add_runtime_dependency 'http-cookie', '>= 1.0'
end
