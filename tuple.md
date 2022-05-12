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

```python
tp = (0, 1)

tp[0] = 1

print(tp)
```
Output: `TypeError: 'tuple' object does not support item assignment`

Tag: #tuple/assignment

---
```python
t = ("Jake", "Mike", "O'Brien", "Tim", "George", "Heisenberg")
t.sort(key=lambda x: len(x), reverse=True)
print(t.index("Heisenberg"))
```
Output: `AttributeError: 'tuple' object has no attribute 'sort'`

Tag: #tuple

---
```python
t = ([17, 9, 59], 12, 9, "rt9y", 11, 3 * 3, 0., 9 / 3 * 3, "3" * 3)
print(t.count(9))
```
Output: `3`

Tag: #tuple/operation/count

---