```python
num = 2

def increment():
    nonlocal num
    num = num + 1
    print(num)

increment()
```
Output: `SyntaxError: no binding for nonlocal 'num' found`

Tag: #scope/nonlocal

---

```python
def func(): 
   print(name, end = ' ')
   name = "Anton"
   print(name)

name = "Petr"
func()
```
Output: `UnboundLocalError: local variable 'name' referenced before assignment`
Tag: #scope

---

```python
name = 'Anton'

def greeting():
    name = 'Rob'
    print(f'Hello {name}', end = ' ')

def farewell():
    print(f'Bye {name}')

greeting()
farewell()
```
Output: `Hello Rob Bye Anton`
Tag: #scope

---

```python
name = 'Tom'

def greeting():
    global name
    name = 'Bob'
    print(f'Hello {name}', end = ' ')

def farewell():
    print(f'Bye {name}')

greeting()
farewell()
```
Output: `Hello Bob Bye Bob`
Tag: #scope/global

---

```python
def outer():
    num = 5

    def inner():
        nonlocal num
        num = 25
        print(num, end = ' ')

    inner()
    print(num)

outer()
```
Output: `25 25`
Tag: #scope/nonlocal, #function/inner

---

```python
def outer():
    def inner():
        nonlocal num
        num = 25
        print(num, end = ' ')

    inner()
    print(num)

outer()
```
Output: `SyntaxError: no binding for nonlocal 'num' found`
Tag: #scope/nonlocal, #function/inner

---

```python
def outer():
    num = 5

    def inner():
        global num
        num = 25
        print(num, end = ' ')

    inner()
    print(num)

outer()
```
Output: `25 5`
Tag: #scope/global, #function/inner

---

```python
num = 2

def increment():
    num = num + 1
    print(num)

increment()
```
Output: `UnboundLocalError: local variable 'num' referenced before assignment`

Tag: #scope

---

```python
num = 2

def increment():
    global num
    num = num + 1
    print(num)

increment()
```
Output: `3`
Tag: #scope/global

---

```python
def outer():
    num = 5

    def inner():
        num = 25
        print(num, end = ' ')

    inner()
    print(num)

outer()
```
Output: `25 5`
Tag: #scope, #function/inner
