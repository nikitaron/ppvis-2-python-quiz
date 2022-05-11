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
tuple1 = (1, 2, 3)
tuple2 = tuple(1, 2, 3)

print(tuple1 == tuple2)
```
Output: `TypeError: tuple expected at most 1 argument, got 3`

Tag: #tuple/literal, #build-in/tuple

---