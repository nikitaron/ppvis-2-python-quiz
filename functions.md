```python
def func(n):
  return lambda a : a * n

doubler = func(2)

print(type(doubler))
```
Output: <class 'function'>

Tag: #functions/lambda_functions

---

```python 
print(lambda: True)
```
Output: True

Tag: #functions/lambda_functions

---

```python
def func():
    pass

print(func())
```
Output: None

Tag: #functions

---

```python
def func(**kwargs):
     return kwargs

test = func(a=1, b=2, c=3)

print(test)
```
Output: {'a': 1, 'c': 3, 'b': 2}

Tag: #functions/kwargs_pointer

---

```python
def func(**kwargs):
     return kwargs

print(func())
```
Output: {}

Tag: #functions/kwargs_pointer

---

```python
def outer(num):
    def inner(num1):
        return num + num1
    return inner

otr = outer(100)

print(otr(200))
```
Output: 300

Tag: #functions/inner_functions

---

```python
def func(*args):
     return args

test = def(1, 2, 3, 'abc')

print(test)
```
Output: (1, 2, 3, 'abc')

Tag: #functions/args_pointer

---

```python
def func(*args):
    return args
    
print(func())
```
Output: ()

Tag: #functions/args_pointer