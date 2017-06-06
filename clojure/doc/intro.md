# Introduction to dangeru-clj

This is just a clojure wrapper for the [Danger/u/](https://dangeru.us) API. As such, this file only covers how to use the clojure library. If you have any questions about how to use the API after reading this, consult [the official guide.](https://github.com/naomiEve/dangeruAPI)

# Functions and Usage:

**Including this in a program**

```clojure
(ns my-program.core
  (:require [dangeru-clj.dangeru :as dangeru]))
```

**Get the (length) most recently updated threads from a board as a clojure map**

```clojure
(dangeru/index boardname length)
```

**Get the first (length) posts from a given thread on a given board as a clojure map**

```clojure
(dangeru/thread boardname length threadid)
```

#Examples:

```clojure
;; Get the top 5 threads from /u/ as a map (note the lack of slashes around the boardname)
(dangeru/index "u" 5)
```

```clojure
;; Get the first post from thread 100 on /new/ as a map
(dangeru/thread "new" 1 100)
```

```clojure
;; Get just the text from the first post of thread 100 on /new/
(:post (first (:replies (dangeru/thread "new" 1 100))))
```
