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

---
```python
import math

x = math.pow(2, 3)
y = pow(2, 3)
print(type(x) == type(y))
```
Output: `False`

Tag: #type/compare

---
```python
elements = {
    "key": "value",
    4: 20,
    "11": (1, 7, 2)
}
print(type(elements.keys()))
```
Output: `<class 'dict_keys'>`

Tag: #type #dict/operation/keys

---
```python
elements = {
    "key": "value",
    4: 20,
    "11": (1, 7, 2)
}
print(type(elements.values()))
```
Output: `<class 'dict_values'>`

Tag: #type #dict/operation/values

---