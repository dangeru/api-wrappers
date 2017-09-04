# dangeru-clj

A clojure wrapper for the danger/u/ 2.0 API

# Requirements:

A working internet connection, and lein should install the rest. If it doesn't (or you just don't want to use lein for whatever reason):  
-clj-http 2.0.0  
-clojure 1.8.0  
-cheshire 5.6.1  
  
To use this with an older version of any of the above, modify project.clj and know that you're on your own

# Functions:

```clojure
(dangeru/index boardname)
(dangeru/index boardname page)
```

```clojure
(dangeru/thread-replies threadid)
```

```clojure
(dangeru/thread-metadata threadid)
```

# Usage

**Including it in a program**

```clojure
(ns my-dangeru-program.core
  (:require [dangeru-clj.dangeru :as dangeru]))
```

**Getting the last 20 threads on /u/**
```clojure
(dangeru/index "u" 0)
```

**Getting the replies to a thread**
```clojure
(dangeru/thread-replies 1000)
```

# Additional resources

[![Clojars Project](https://img.shields.io/clojars/v/dangeru-clj.svg)](https://clojars.org/dangeru-clj)  
[Official API Guide](https://github.com/dangeru/awoo-API)  
[C# Wrapper](https://github.com/Mark9870/dangeru-net)  
[Other Wrappers](https://github.com/dangeru/api-wrappers)  
[Danger/u/](https://dangeru.us/)  
