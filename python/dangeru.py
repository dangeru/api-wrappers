import requests
import json

def index(board, limit):
    fetch = requests.get("https://boards.dangeru.us/api.php?type=index&board=" + board + "&ln=" + limit.__str__())
    fetch = fetch.text.replace('\n', ' ').replace('\r', '')
    json_f = json.loads(fetch)
    return json_f

def thread(board, limit, threadid):
    if threadid.startswith("http"):
        threadid = threadid.partition("=")[2]

    fetch = requests.get("https://boards.dangeru.us/api.php?type=thread&board=" + board + "&ln=" + limit.__str__() + "&thread=" + threadid.__str__())
    fetch = fetch.text.replace('\n', ' ').replace('\r', '')
    json_f = json.loads(fetch)
    return json_f
