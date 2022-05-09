```python
a = [[] * 2] * 2

a[0].append(1)

print(a)
```
Output: `[[1], [1]]`

Tag: #object/reference, #list/operation/append, #list/operation/multiply, 

---

```python
a = [[0]*2]*2
a[0][0] = 5

print(a)
```
Output: `[[5, 0], [5, 0]]`

Tag: #object/reference, #list/operation/multiply

---

```python
a = [1, 2, 3]
b = a[:]

print(a == b, id(a) == id(b))
```
Output: `True False`

Tag: #object/identify

---

```python
a = [2, 4, 3]
b = sorted(a)
b.insert(0, 1)
print(a[0])
```
Output: `2`

Tag: #object/reference

---

```python
def f(a, x):
    return a.x + x

class Obj:
    def f(self, x):
        self.x = x
        return x + 2

obj = Obj()
print(f(obj, obj.f(2)))
```
Output: `6`

Tag: #object/variable

---

```python
a = 4
b = a

del a
a = 2
print(b == 2)
```
Output : `False`

Tag: #object/reference

---

```python
class ABC:
    def __repr__(self):
        return 'abc'
    
    def __str__(self):
        return 'abc'

a = 'abc'
b = ABC()

print(a == b)
```
Output: `False`

Tag: #object/compare

---