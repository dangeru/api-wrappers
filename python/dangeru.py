'''
dangeru.py - danger/u/ python API wrapper
@author prefetcher
'''

import requests
import json

'''
index a board
@param {string} board - the board
@param {string} limit - how many threads to show
@returns JSON formatted into a dictionary
'''
def index(board, limit):
    fetch = requests.get("https://boards.dangeru.us/api.php?type=index&board=" + board + "&ln=" + limit.__str__())
    fetch = fetch.text.replace('\n', ' ').replace('\r', '')
    json_f = json.loads(fetch)
    return json_f

'''
display a thread
@param {string} board - the board
@param {string} limit - how many threads to show
@param {string} threadid - the thread id
@returns JSON formatted into a dictionary
'''
def thread(board, limit, threadid):
    if threadid.startswith("http"):
        threadid = threadid.partition("=")[2]

    fetch = requests.get("https://boards.dangeru.us/api.php?type=thread&board=" + board + "&ln=" + limit.__str__() + "&thread=" + threadid.__str__())
    fetch = fetch.text.replace('\n', ' ').replace('\r', '')
    json_f = json.loads(fetch)
    return json_f
