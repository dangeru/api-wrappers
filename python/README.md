# dangeru.py

A python wrapper for the danger/u/ API.

# Requirements:

requests and json

# Fields:

`dangeru.index(<boardname>,<length>)`

`dangeru.thread(<boardname>,<length>,<id>)` or `dangeru.thread(<boardname>,<length>,<link>)`

# Usage:

**Indexing a board:**

```python
import dangeru

fetch = dangeru.index("u",5)
```

**Reading a thread:**

```python
import dangeru

fetch = dangeru.thread("u",5,"1000")
```
