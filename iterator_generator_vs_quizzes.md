```python
name = 'Anton'

def greeting():
    name = 'Rob'
    print('Hello', name)

def farewell():
    print('Bye', name)

greeting()
farewell()
```
Output: Hello Rob
        Bye Anton
Tag: #visibility_of_variables#hidden_variables

---

```python
numbers = [100, 200, 300]
iterator = iter(numbers)

print(len(iterator))
```
Output: TypeError: object of type 'list_iterator' has no len()
Tag: #iterator

---

```python
numbers = [100, 200, 300]
iterator1 = iter(numbers)
iterator2 = iter(iterator1)

print(iterator1 is iterator2)
```
Output: True
Tag: #iterator

---

```python
list = [1, 3, 6, 10]
multiplied_list = (num**2 for num in list)

print(type(multiplied_list))
```
Output: <class 'generator'>
Tag: #generator/types

---

```python
numbers = [1, 2, 3, 4, 5]

squares = [number**2 for number in numbers if number % 2 == 0]

print(squares)
```
Output: [4, 16]
Tag: #generator

---

```python
name = 'Tom'

def greeting():
    global name
    name = 'Bob'
    print('Hello', name)
    
def farewell():
    print('Bye, name)

greeting()
farewell()
```
Output: Hello Bob
        Bye Bob
Tag: #visibility_of_variables#global_variables

---

```python
def outer():
    num = 5
    
    def inner():
        num = 25
        print(num)
    
    inner()
    print(num)
    
outer()
```
Output: 25
        5
Tag: #visibility_of_variables#functions#inner_functions

---

```python
def outer():
    num = 5
    
    def inner():
        nonlocal num
        num = 25
        print(num)
    
    inner()
    print(num)
    
outer()
```
Output: 25
        25
Tag: Tag: #visibility_of_variables#nonlocal#functions#inner_functions

---

```python
def outer():
    num = 5
    
    def inner():
        global num
        num = 25
        print(num)
    
    inner()
    print(num)
    
outer()
```
Output: 25
        5
Tag: #visibility_of_variables#global#functions#inner_functions

---

```python
def increment(n):
    yield n + 1
    
print(type(increment(5)))
```
Output: <class 'generator'>

Tag: #generator#yield

---

```python
def increment():
    yield 'Hello'
    yield 'World'
    yield '!!!'
    
for letter in increment():
    print(letter)
```
Output: Hello
        World
        !!!
Tag: #generator#yield
