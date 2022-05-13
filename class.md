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

```python
class A():
  def __len__(self):
    return 0

obj = A()
print(bool(obj))
```
Output: `False`

Tag: #class/method/__len__

---

```python
class Person:
  def __init__(hey, name, age):
    hey.name = name
    hey.age = age

  def myfunc(abc):
    print("Hello my name is " + abc.name)

p1 = Person("John", 36)
p1.myfunc()
```
Output: `Hello my name is John`

Tag: #class/self

---

```python
class Person:
  def __init__(hey, name, age):
    hey.name = name
    hey.age = age

  def my_age(abs):
    print("Hello my name is " + abs.age)

p1 = Person("John", 36)

del p1.age

p1.my_age()
```
Output: `AttributeError: 'Person' object has no attribute 'age'`

Tag: #statement/del, #class/property

---

```python
class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

  def printname(self):
    print(self.firstname, self.lastname)

class Student(Person):
  def __init__(self, fname, lname):
    super().__init__(fname, lname)

x = Student("Mike", "Olsen")

x.printname()
```
Output: `Mike Olsen`

Tag: #class/super, #class/inheritance

---

```python
class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

  def printname(self):
    print(self.firstname, self.lastname)

class Student(Person):
  def __init__(self, fname, lname):
    self.fname = fname
    self.lname = lname
    
x = Student("Mike", "Olsen")

x.printname()
```
Output: `AttributeError: 'Student' object has no attribute 'firstname'`

Tag: #class/super, #class/inheritance

---