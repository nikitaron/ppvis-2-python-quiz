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
Tag: #visibility_of_variables

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
```
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
Tag: #visibility_of_variables/global

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
Tag: #visibility_of_variables #functions/inner_functions

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
Tag: Tag: #visibility_of_variables/nonlocal #functions/inner_functions

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
Tag: #visibility_of_variables/global #functions/inner_functions

---

```python
def outer():
    def inner():
        nonlocal num
        num = 25
        print(num)
    
    inner()
    print(num)
    
outer()
```
Output: SyntaxError: no binding for nonlocal 'num' found

Tag: #visibility_of_variables/nonlocal #functions/inner_functions
---
```python
def increment(n):
    yield n + 1
    
print(type(increment(5)))
```
Output: <class 'generator'>

Tag: #generator #yield

---

```python
def func():
    yield 'Hello'
    yield 'World'
    yield '!!!'
    
for letter in func():
    print(letter)
```
Output: Hello
        World
        !!!
Tag: #generator #yield

---

```python
expression = (letter for letter in 'abc')

len(expression)
```
Output: TypeError: object of type 'generator' has no len()

Tag: #generator

---

```python
abc_gen_expr = (letter for letter in 'abc')

print(next(abc_gen_expr))
```
Output: a

Tag: #generator #next

---

```python
def custom_chain(*iterables):
     for iterable in iterables:
         yield from iterable
 
 
 for x in custom_chain([1, 2, 3], 'abc'):
     print(x, end=' ')
```
Output: 1 2 3 a b c

Tag: #iterator#yield

---

```python
scores = {'John': 99, 'Danny': 95}

iter_scores = iter(scores)

print(type(iter_scores))
```
Output: <class 'dict_keyiterator'>

Tag: #iterator

---

```python
num = 2

def increment():
    num = num + 1
    print(num)

increment()
```
Output: UnboundLocalError: local variable 'num' referenced before assignment

Tag: #visibility_of_variables

---

```python
num = 2

def increment():
    global num
    num = num + 1
    print(num)

increment()
```
Output: 3

Tag: #visibility_of_variables/global

---

```python
num = 2

def increment():
    nonlocal num
    num = num + 1
    print(num)

increment()
```
Output: SyntaxError: no binding for nonlocal 'num' found

Tag: #visibility_of_variables/nonlocal

---

```python 
def func(): 
   print(name)
   name = "Anton"
   print(name)
 
name = "Petr"
func()
```
Output: UnboundLocalError: local variable 'name' referenced before assignment
Tag: #visibility_of_variables





