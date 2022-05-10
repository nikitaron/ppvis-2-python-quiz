```python
a = (el for el in range(5))
b = (el for el in range(7, 13, 2))
t = (a, b)
print(t)
```
Output: `(<generator object <genexpr> at 0x7f8f46f245f0>, <generator object <genexpr> at 0x7f8f46d255b0>)`

Tag: #build-in/range, #tuple, #generator

---
```python
a = [6, 5, 8, 2, 1]
t = tuple(el for el in a)
print(t[1::-1])
```
Output: `(5, 6)`

Tag: #tuple/slice

---
```python
a = ()

print(type(a))
```
Output: `<class 'tuple'>`

Tag: #tuple/literal

---