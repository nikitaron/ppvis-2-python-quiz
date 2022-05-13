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
```python
tuple1 = (1, 2, 3)
tuple2 = tuple(1, 2, 3)

print(tuple1 == tuple2)
```
Output: `TypeError: tuple expected at most 1 argument, got 3`

Tag: #tuple/literal, #build-in/tuple

---
```python
a = (1, 2, 3, 2, 1)
b = range(1, 6)

for x in b:
    if a.__contains__(x):
        a += (a.count(x),)
print(a)
```
Output: `(1, 2, 3, 2, 1, 2, 3, 2)`

Tag: #tuple/operation/contains, #tuple/operation/count, #build-in/range

---

```python
def foo(value):
  t = value,
  return t

print(foo(1))
```
Output: `(1,)`

Tag: #tuple/literal

---

```python
t1 = (11, 14, 54, 0, 58, 41)

res = len(set(t1)) == len(t1)

print(res)
```
Output: `True`

Tag: #tuple/literal, #set/parameter

---

```python
value = (4, 5, 6)

print(type(value) is tuple)
```
Output: `True`

Tag: #tuple/literal, #type

---

```python
value = (1, 3, 7, 8, 7, 5, 4, 6, 8, 5)

x = value.count(5)

print(x)
```
Output: `2`

Tag: #tuple/operation/count

---

```python
value = (1, 3, 7, 8, 7, 5, 4, 6, 8, 5)

x = value.index(8)

print(x)
```
Output: `3`

Tag: #tuple/operation/index

---

```python
value = (1, 3, 7, 8, 7, 5, 4, 6, 8, 5)

x = value.index(0)

print(x)

```
Output: `ValueError: tuple.index(x): x not in tuple`

Tag: #tuple/operation/index

---