```python
print(bool('False'), bool('True'))
```
Output: `True True`

Tag: #boolean/literal

---
```python
a = True

a -= True

print(a)
```
Output: `0`

Tag: #boolean

---
```python
if True:
    print(1)
else:
    print(0)
```
Output: `1`

Tag: #boolean

---
```python
a = 0
b = True
c = a + b

print(c is True)
```
Output: `False`

Tag: #boolean/literal, #boolean/operation/add, #expression/operation/is

---
```python
a = "True"
b = True
c = 1

print(a == b)
print(b == c)
```
Output: `False True`

Tag: #boolean/literal, #boolean/operation/compare

---
```python
lst = [True, False]

print(lst[False])
print(lst[lst[False]])

```
Output: `True False`

Tag: #boolean/literal, #list/literal

---
```python
a = False

for x in range(1, 3):
    a = not a

print(a)
```
Output: `False`

Tag: #boolean/literal, #boolean/operation/not, #build-in/range

---
```python
data = [([]), [()]]

for i in data:
    print(bool(i), end=' ')
```
Output: `False True`

Tag: #boolean/literal

---
```python
elements = ((), [], {}, 0, 0., "", False)
print(any(elements))
```
Output: `False`

Tag: #boolean #build-in/any

---
```python
x = bool("")

print(x == True)
```
Output: `False`

Tag: #string/literal, #boolean/operation/compare

---