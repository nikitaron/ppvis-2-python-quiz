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

```python
a = [1, 5, 14]

gen = (i * 2 for i in a)
b = list(gen)

print(*gen)
```
Output: `''`

Tag: #generator/use

---