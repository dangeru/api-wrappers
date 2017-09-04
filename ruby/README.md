# dangeru.rb
[![Gem Version](https://badge.fury.io/rb/dangeru.svg)](https://badge.fury.io/rb/dangeru)

A ruby wrapper for the Awoo / danger/u/ API.

# Requirements:

http-cookie, json

# Initialization:

```ruby
require 'dangeru'

api = Dangeru.new(<hostname>, <use ssl?>)
```

# Usage:

**Indexing a board:**

```ruby
require 'dangeru'

api = Dangeru.new(<hostname>, <use ssl?>)
board = api.get_board(<board>, <auth cookie (not required)>)
```

**Reading a thread's metadata:**

```ruby
require 'dangeru'

api = Dangeru.new(<hostname>, <use ssl?>)
meta = api.get_thread_metadata(<id>, <auth cookie (not required)>)
```

**Reading a thread's replies:**

```ruby
require 'dangeru'

api = Dangeru.new(<hostname>, <use ssl?>)
replies = api.get_thread_replies(<id>, <auth cookie (not required)>)
```

**Authenticating as a janitor:**

```ruby
require 'dangeru'

api = Dangeru.new(<hostname>, <use ssl?>)
auth = api.auth(<user>, <password>) # Returns an auth cookie which you have to pass to functions
```

**Posting an OP:**

```ruby
require 'dangeru'

api = Dangeru.new(<hostname>, <use ssl?>)
api.post_op(<board>, <title>, <content>, <auth cookie (not required)>, <post with a capcode? (janitor only)>)
```

**Replying to a thread:**

```ruby
require 'dangeru'

api = Dangeru.new(<hostname>, <use ssl?>)
api.reply(<thread id>, <board>, <content>, <auth cookie (not required)>, <post with a capcode? (janitor only)>)
```

**Stickying a post (janitor only):**

```ruby
require 'dangeru'

api = Dangeru.new(<hostname>, <use ssl?>)
api.sticky(<thread_id>, <auth cookie (required)>, <stickyness level 1-9>)
```

**Unstickying a post (janitor only):**

```ruby
require 'dangeru'

api = Dangeru.new(<hostname>, <use ssl?>)
api.unsticky(<thread_id>, <auth cookie (required)>)
```

**Locking a post (janitor only):**

```ruby
require 'dangeru'

api = Dangeru.new(<hostname>, <use ssl?>)
api.lock(<thread_id>, <auth cookie (required)>)
```

**Unlocking a post (janitor only):**

```ruby
require 'dangeru'

api = Dangeru.new(<hostname>, <use ssl?>)
api.unlock(<thread_id>, <auth cookie (required)>)
```

**Moving a post (janitor only):**

```ruby
require 'dangeru'

api = Dangeru.new(<hostname>, <use ssl?>)
api.move(<thread_id>, <destination board>, <auth cookie (required)>)
```
