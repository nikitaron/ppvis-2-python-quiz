```python
from typing import Set

a: Set[int] = {1, 4, 5}

print(isinstance(a, Set[int]))
```
Output: `TypeError: Subscripted generics cannot be used with class and instance checks`

Tag: #type/annotation, #built-in/isinstance

---
```python
a = (9)
print(type(a))
```
Output: `<class 'int'>`

Tag: #int, #type, #build-in/type

---
```python
a = "Tree",
print(type(a))
```
Output: `<class 'tuple'>`

Tag: #tuple, #type, #build-in/type

---
```python
a = "Hello"
print(type(type(a)))
```
Output: `<class 'type'>`

Tag: #type, #build-in/type

---
```python
a = (el for el in range(105))
print(type(a))
```
Output: `<class 'generator'>`

Tag: #generator, #type, #build-in/type

---
```python
a = {}
print(type(a))
```
Output: `<class 'dict'>`

Tag: #dict, #type, #build-in/type
