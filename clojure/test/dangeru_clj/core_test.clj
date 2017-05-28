(ns dangeru-clj.core-test
  (:require [clojure.test :refer :all]
            [dangeru-clj.dangeru :as dangeru :refer :all]))

(deftest index-test
  (testing "index" 
    ;; There are more than 5 threads on /u/, so these should be different
    (is (not= (dangeru/index "u" 5)(dangeru/index "u" 6)))
    ;; However, the board's name and url shouldn't change
    (is (= (:board (dangeru/index "u" 5)(dangeru/index "u" 6))))
    ;; Make sure that we're getting /u/ when we ask for /u/
    (is (= (:name (first (:board (dangeru/index "u" 5))))) "/u/")
    ;; Make sure we can request other boards
    (is (not= (dangeru/index "u" 5)(dangeru/index "new" 5)))
    ;; Make sure we're actually getting other boards when we request them
    (is (not= (dangeru/index "new" 5) nil))))

(deftest thread-test
  (testing "thread"
    ;; Thread 1000 has more than 5 posts, so these should differ
    (is (not= (dangeru/thread "u" 5 1000) (dangeru/thread "u" 6 1000)))
    ;; Make sure we get the thread we ask for
    (is (= (:id (first (:meta (dangeru/thread "u" 5 1000))) 1000)))
    ;; Make sure the above doesn't just apply to /u/
    (is (= (:id (first (:meta (dangeru/thread "new" 5 100)))) 100))
    ;; The first post in a thread should be the same no matter how many posts you request
    (is (= (:post (first (:replies (dangeru/thread "tech" 1 100))))
           (:post (first (:replies (dangeru/thread "tech" 5 100))))))))
