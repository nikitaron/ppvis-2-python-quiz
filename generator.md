```python
def func():
    yield 1
    return 2
    yield 3

for i in func():
    print(i)
```
Output: `1`

Tag: #generator/definition, #iterator

---