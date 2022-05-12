```python
def foo():
    x = 1
    return x

foo.x = 4

print(foo(), foo.x)
```
Output: `1 4`

Tag: #scope, #object/variable, #function/variable, #function/object

---

```python
def foo():
  x = 300
  def foo2():
    print(x)
  foo2()

foo() 
```
Output: `300`

Tag: #scope

---

```python
x = 300

def foo():
  return x

print(foo() == x)
```
Output: `True`

Tag: #scope, #boolean/operation/compare

---

```python
x = 300

def foo():
  x = 200
  return x

print(foo(), x)
```
Output: `200 300`

Tag: #scope

---

```python
def foo():
  global x
  x = 300

foo()

print(x)
```
Output: `300`

Tag: #scope

---

```python
x = 300

def foo():
  global x
  x = 200

foo()

print(x) 
```
Output: `200`

Tag: #scope

---

```python
def foo():
  x = 12
  def foo2(a):
    x += a
    return x
  return foo2

fun = foo()

print(fun(2))
```
Output: `UnboundLocalError: local variable 'x' referenced before assignment`

Tag: #scope

---
