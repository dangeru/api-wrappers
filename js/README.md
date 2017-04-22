# dangeru.js

A JavaScript wrapper for the Danger/u/ API

# requirements

it may not work on IE 6 or whatever. it needs JSON.parse()

# methods

`dangeru.thread(board, length, id, callback(status, result, httpcode))`

`dangeru.threadSync(board, length, id)`

`dangeru.list(board, length, callback(status, result, httpcode))`

`dangeru.listSync(board, length)`

# notes

if you use the sync methods on the main thread i will hurt you

# usage

**indexing a board**`

```javascript
dangeru.list("u", 5, function(s, r, h) {
  alert(r["board"][0]["name"]) //if this doesn't make a popup that says "u" or whatever i'm killing prefetcher
});

//or if you're a faggot

alert(dangeru.listSync("u", 5)["board"][0]["name"]) //same as above
```

**reading a thread**

```javascript
dangeru.thread("u", 5, "1000", function(s, r, h) {
  alert(r["meta"][0]["title"]) //should be "Rip me"
});

//or if you're a faggot

alert(dangeru.threadSync("u", 5, "1000")["meta"][0]["title"]) //i blame prefetcher if this is different
```
