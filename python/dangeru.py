'''
dangeru.py - danger/u/ python API wrapper
@author prefetcher
'''

import requests
import json

'''
index a board
@param {string} board - the board
@param {string} page - which page to show, starts at 0
@returns JSON formatted into a dictionary
'''
def index(board, page = 0):
    return json.loads(requests.get("https://boards.dangeru.us/api/v2/board/" + board + "?page=" + str(page)).text)

'''
display a thread and all of its replies
@param {string} board - unused, kept for legacy purposes
@param {string} limit - unused, kept for legacy purposes
@param {string} threadid - the thread id
@returns JSON formatted list of replies
'''
def thread(board, limit, threadid):
    return thread_replies(threadid)
'''
display a thread and all of its replies
@param {string} threadid - the thread id
@returns JSON formatted list of replies
'''
def thread_replies(threadid):
    return json.loads(requests.get("https://boards.dangeru.us/api/v2/thread/" + str(threadid) + "/replies").text)
'''
display a thread and information about it, number of replies, board, etc..
this is the same as running `thread_replies(threadid)[0]` but is easier on the server
@param {string} threadid - the thread id
@returns JSON object for the thread
'''
def thread_metadata(threadid):
    return json.loads(requests.get("https://boards.dangeru.us/api/v2/thread/" + str(threadid) + "/metadata").text)

