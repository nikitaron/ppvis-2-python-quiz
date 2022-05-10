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

```python
class A:
  def __init__(self, i):
    self.i = i

  def __eq__(self, __o: object) -> bool:
      return self.i == __o.i

a1 = A(1)
a2 = A(2)
a3 = A(2)

values = [a1, a2, a3]

print(values.count(a2))
```
Output: `2`

Tag: #class/method/__eq__

---

```python
class MyClass:
  def __init__(self):
    self.message = 'Hello, World'


def say_hello(self):
  print(self.message)

MyClass.say_hello = say_hello

a = MyClass()

a.say_hello()
```
Output: `Hello, World`

Tag: #class/prototype

---
