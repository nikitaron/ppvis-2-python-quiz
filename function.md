```python
def func(*args):
    args.append(3)
    print(*args)

func(1,2)
```
Output: `AttributeError: 'tuple' object has no attribute 'append'`

Tag: #function/parameter, #tuple/operation

---