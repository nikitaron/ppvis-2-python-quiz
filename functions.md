```python
def func(n):
  return lambda a : a * n

doubler = func(2)

print(type(doubler))
```
Output: `<class 'function'>`
Tag: #function/lambda, #build-in/type

---

```python 
print(lambda: True)
```
Output: `True`
Tag: #function/lambda

---

```python
def func():
    pass

print(func())
```
Output: `None`
Tag: #function

---

```python
def func(**kwargs):
     return kwargs

test = func(a=1, b=2, c=3)

print(test)
```
Output: `{'a': 1, 'c': 3, 'b': 2}`
Tag: #function, #build-in/dict

---

```python
def func(**kwargs):
     return kwargs

print(func())
```
Output: `{}`
Tag: #function, #build-in/dict

---

```python
def outer(num):
    def inner(num1):
        return num + num1
    return inner

otr = outer(100)

print(otr(200))
```
Output: `300`
Tag: #function/inner

---

```python
def func(*args):
     return args

test = func(1, 2, 3, 'abc')

print(test)
```
Output: `(1, 2, 3, 'abc')`
Tag: #function, #build-in/tuple

---

```python
def func(*args):
    return args
    
print(func())
```
Output: `()`

Tag: #function, #build-in/tuple