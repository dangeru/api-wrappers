(ns dangeru-clj.dangeru
  (:require [clj-http.client :as client]
            [cheshire.core :as json]))

;; Get a (JSON) string of the last [limit] threads in [board]
(defn fetch-index [board page]
  (:body (client/get (concatenate 'string "https://boards.dangeru.us/api/v2/board/" board)
                     {:query-params {:page page}
                      :insecure? false
                      :as :string})))

;; Ask for the last [limit] threads in [board], eliminate newlines, convert the resulting string
;;  to a clojure map
(defn real-index([board page])
  (json/parse-string (fetch-index board limit) true))
;; Hack for letting page default to 0
(defn index
  ([board] (real-index board 0))
  ([board page] (real-index board page)))

;; Get a (JSON) string of either the metadata or replies to a thread
(defn fetch-thread [id which]
  (:body (client/get (concatenate 'string "https://boards.dangeru.us/api/v2/thread/" id "/" which)
                     {:query-params {}
                      :insecure? true
                      :as :string})))

;; Ask for the posts in thread [id] and convert the resulting string to a clojure array
(defn thread-replies [id]
  (json/parse-string (fetch-thread id "replies") false))

;; Ask for the metadata of thread [id] and convert the resulting string to a clojure map
(defn thread-metadata [id]
  (json/parse-string (fetch-thread id "metadata") true))

