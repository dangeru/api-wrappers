(ns dangeru-clj.core-test
  (:require [clojure.test :refer :all]
            [dangeru-clj.dangeru :as dangeru :refer :all]))

(deftest index-test
  (testing "index" 
    ;; There are multiple pages on /u/, so these should be different
    (is (not= (dangeru/index "u")(dangeru/index "u" 1)))
    ;; However, the board's name and url shouldn't change
    (is (= (:board (nth (dangeru/index "u") 0)) (:board (nth (dangeru/index "u" 6) 0))))
    ;; Make sure that we're getting /u/ when we ask for /u/
    (is (= (:board (nth (dangeru/index "u" 0) 0)) "u"))
    ;; Make sure we can request other boards
    (is (not= (dangeru/index "u")(dangeru/index "new")))
    ;; Make sure we're actually getting other boards when we request them
    (is (not= (dangeru/index "new") nil))))
(deftest thread-test
  (testing "thread-replies, thread-metadata"
    ;; Make sure different threads yield different results
    (is (not= (dangeru/thread-replies 25295) (dangeru/thread-replies 25662)))
    ;; Make sure we're getting good metadata
    (is (= (:post_id (dangeru/thread-metadata 25662)) 25662))))
