(ns dangeru-clj.dangeru
  (:require [clj-http.client :as client]
            [cheshire.core :as json]))

;; Get a (JSON) string of all the threads on page number [page] of [board]
(defn fetch-index [board page]
  (:body (client/get (str "https://boards.dangeru.us/api/v2/board/" board)
                     {:query-params {:page page}
                      :insecure? false
                      :as :string})))

;; Get all the threads on page number [page] of [board]
(defn real-index [board page]
  (json/parse-string (fetch-index board page) true))
;; Hack for letting page default to 0
(defn index
  ([board] (real-index board 0))
  ([board page] (real-index board page)))

;; Get a (JSON) string of either the metadata or replies to a thread
(defn fetch-thread [id which]
  (:body (client/get (str "https://boards.dangeru.us/api/v2/thread/" id "/" which)
                     {:query-params {}
                      :insecure? true
                      :as :string})))

;; Ask for the posts in thread [id] and convert the resulting string to a clojure array
(defn thread-replies [id]
  (json/parse-string (fetch-thread id "replies") false))

;; Ask for the metadata of thread [id] and convert the resulting string to a clojure map
(defn thread-metadata [id]
  (json/parse-string (fetch-thread id "metadata") true))

