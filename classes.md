
```python

class A(ABC):
    @abstractmethod
    def printer(self):
        print("Hello")

class B(A):
    def __init__(self):
        pass

a = A()
a.printer()

b= B()
b.printer()
```
Output: Can't instantiate abstract class A with abstract methods printer
tag: #class/method/abstractmethod

---

```python

class Vehicle:
    def __init__(self, speed):
        if speed > 240:
            print(self.speed)
        self.speed = speed

car = Vehicle(350);
```
Output: AttributeError: 'Vehicle' object has no attribute 'speed' 
tag: #class/variable


---

```python

class Marks:
    def __init__(self, a, b):
        self.a =a
        self.b =b

    @staticmethod
    def Math_num():
        return self.a + self.b

a = Marks(5, 6)
print(a.Math_num())
```
Output: NameError: name 'self' is not defined 
tag: #class/method/staticmethod

---

```python

class A:
    @classmethod
    def classmethod():
        print('Class method called')

a=A()
a.classmethod()
```
Output: TypeError: classmethod() takes 0 positional arguments but 1 was given 
tag: #class/classmethod

---

```python

class A(object):
   def __init__(self):
   	print("1")
class B(A):
   def __init__(self):
   	print("2")
   	super().__init__()

b = B()
```
Output: 2 1
tag: #class/method/super

---

```python

class Point:
   def __init__( self, x=0, y=0):
      self.x = x
      self.y = y
   def __del__(self):
      class_name = self.__class__.__name__
      print (class_name, "destroyed")

class Pixel(Point):
    def __init__( self):
        super().__init__()

b = Pixel()
```
Output Point destroyed 
       Pixel destroyed
tag: #class/method/del

---

```python
class A(object):
    foo = 1

class B(A):
    pass

class C(A):
    foo = 2

class D(C, B):
    pass

d = D()
print(d.foo)
```
Output: `2`
Tag: #class/inherit

---
```python
class SimpleClass:
    val = 1
    def __init__(self, n):
        val = n

s = SimpleClass(5)
print(s.val)
```
Output: 1
Tag: #class/variable

---

```python
class A:
    def __init__(self):
        self.x = 5
    
class B(A):
    pass

print(isinstance(B, A))
```
Output: False
Tag: #class/inherit #build-in/isinstance

---

```python
class BankCard:
    def __init__(self, x):
        self.balance = x

    def __lt__(self, other):
        return self.balance < other.balance

card1 = BankCard(700)
card2 = BankCard(200)
print(card1 > card2)
```
Output: True
Tag: #class/method/lt

---
```python
class PersonHeight:
    def __init__(self, x):
        self.height = x

    def __gt__(self, other):
        return self.height < other.height

height1 = PersonHeight(170)
height2 = PersonHeight(165)
print(height1 >= height2)
```
Output: TypeError: '>=' not supported between instances of 'PersonHeight' and 'PersonHeight
Tag: #class/method/lt

---
```python
class Clock:
    def __init__(self, sec):
        self.seconds = sec

    def __eq__(self, other):
        return self.seconds == other.seconds

t1 = Clock(350)
t2 = Clock(700)
print(t1 != t2)
```
Output: True
Tag: #class/method/eq
