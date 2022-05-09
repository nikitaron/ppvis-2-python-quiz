```python
class A:
    x = 1

class B:
    pass

class C(A):
    pass

B.x = 2
A.x = 3

print(A.x, B.x, C.x)
```
Output: `3 2 3`

Tag: #class/variable

---

```python
from dataclasses import dataclass

@dataclass
class User:
    name: str
    age: int = 1

user = User()

print(user.age)
```
Output : `TypeError: __init__() missing 1 required positional argument: 'name'`

Tag: #class/dataclass

---

```python
class Vec:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Vec(self.x + other.x, self.y + other.y)

a = Vec(2, 4)
b = Vec(4, 0)

z = a + b
print(z.x * z.y)
```
Output: `24`

Tag: #class/method/__add__

---