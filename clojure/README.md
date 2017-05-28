# dangeru-clj

A clojure wrapper for the danger/u/ API

# Requirements:

A working internet connection, and lein should install the rest. If it doesn't (or you just don't want to use lein for whatever reason):  
-clj-http 2.0.0  
-clojure 1.8.0  
-cheshire 5.6.1  
  
To use this with an older version of any of the above, modify project.clj and know that you're on your own

# Functions:

```clojure
(dangeru/index boardname length)
```

```clojure
(dangeru/thread boardname length threadid)
```

# Usage

**Including it in a program**

```clojure
(ns my-dangeru-program.core
  (:require [dangeru-clj.dangeru :as dangeru]))
```

**Getting the last 5 threads on /u/**
```clojure
(dangeru/index "u" 5)
```

**Getting the first five posts from a thread**
```clojure
(dangeru/thread "u" 5 1000)
```

# Additional resources

[![Clojars Project](https://img.shields.io/clojars/v/dangeru-clj.svg)](https://clojars.org/dangeru-clj)  
[Official API Guide](https://github.com/naomiEve/dangeruAPI)  
[C# Wrapper](https://github.com/Mark9870/dangeru-net)  
[Other Wrappers (soon to include this one)](https://github.com/dangeru/api-wrappers)  
[Danger/u/](https://dangeru.us/)  
