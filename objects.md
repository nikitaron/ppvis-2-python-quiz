```python

class A:
    def __init__(self, name):
        self.__name = name

    def greeting(self):
        print(self.__name)

class B(A):
    def __init__(self):
        pass
    
b = B("Anton")
b.greeting()
```
Output: NameError: name 'Anton' is not defined
tag: #object/variable

---

```python

class A:
    def __init__(self, name):
        __name = name

    def greeting(self):
        print(__name)

a = A("Anton")
a.greeting()
```
Output: AttributeError: name '_A__name' is not defined
tag: #object/variable

---

```python

class B:
    def __printer(self):
       print("Hello")

b = B()
b.__printer()
```
Output: AttributeError: 'B' object has no attribute '__printer'
tag: #object/access_identifier

---

```python
class Soda:
    def __init__(self, ingredient):
      self.ingredient = ingredient if isinstance(ingredient, str) else None

    def show_my_drink(self):
        if self.ingredient:
            print(f'Soda and {self.ingredient}')
        else:
            print('Regular soda')

drink1 = Soda('raspberry')
drink2 = Soda(5)
print(drink1.show_my_drink(), drink2.show_my_drink())
```

Output:Soda and raspberry
       Regular soda
       None None
tag: #object/variable

---

```python
a = [5, 3, []]
b = [5, 3, []]
print(a[-1] is b[-1])
```
Output: False
Tag: #object/identify

---
```python
x = ["name", "id", "balance", "date"]
x1 = x[:]
x2 = x.copy()
print(x1 == x2, x1 is x2)
```
Output: True False
Tag: #object/compare #object/identify

---
```python
h = "Hola"
el1 = set(h)
el2 = set(h)
print(el1 is el2)
```
Output: False
Tag: #object/identify
---
```python
class Test:
   test = 5

    def init(self, test):
        self.test = test

obj = Test(5)
print(Test.test is obj.test)
```
Output: TypeError: Test() takes no arguments
Tag: #object/identify