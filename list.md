```python
lst = [2,4]

print(lst * 2 / 2)
```
Output: `TypeError: unsupported operand type(s) for /: 'list' and 'int'`

Tag: #list/operation

---
```python
num = 32 // 3

phrase = 'Hello' if num == 10 else 'World'

print('-'.join(phrase[::-1]))
```
Output: `o-l-l-e-H`

Tag: #list/operation/slice, #string/operation/join

---
```python
a = 1.2
b = a - 0.2
lst = [1.2, 0.2]

print(a, lst[b])
```
Output: `TypeError: list indices must be integers or slices, not float`

Tag: #list/literal

---

```python
a = [1]
a.insert(4, 3)

print(a)
```
Output: `[1, 3]`

Tag: #list/operation/insert

---

```python
a = list(range(6))

a[2:10] = []
print(a)
```
Output: `[0, 1]`

Tag: #list/operation/slice

---

```python
a = sorted([1, 4, 6, 10])
b = [1, 4, 6, 10].sort()

print(a == b)
```
Output: `False`

Tag: #list/operation/compare

---

```python
a = (0)
b = [0], [[0]], {0}, [(0)]

for i in b:
    print(a in i)
```
Output: `True False True True`

Tag: #list/operation/in

---