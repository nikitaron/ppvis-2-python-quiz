```python
a, *b, c = [1, 2, 3, 4, 5]

print(a, b, c)
```
Output: `1 [2, 3, 4] 5`

Tag: #statement/assignment

---
```python
a, *b, c = [1, 2]
print(a, b, c)
```
Output: `1 [] 2`

Tag: #statement/assignment
 
---
```python
word1 = 'welcome'
word2 = 'home'
r = list()

for x in word1:
    for x in word2:
        r.append(x)

print(r[2] + r[1] + r[2])
```
Output: `mom`

Tag: #statement/for

---

```python
a = [1, 2, 3]
b = a

del a
print(b)
```
Output: `[1, 2, 3]`

Tag: #statement/del

---

```python
numbers = [2, 3, 1, -2, 0]

for i in enumerate(numbers):
    if i[0] == 0:
        if i[1] == 0:
            print(i)
    else:
        continue
print(i)
```
Output: `(4,0)`

Tag: #statement/for, #build-in/enumerate

---

```python
a = [0, 2, -4, -2, 1]

for i in a:
    if i < 0:
        a.append(abs(i))
    x = i

print(x)
```
Output: `2`

Tag: #statement/for

---

```python
a = 0

for i in range(10):
    if i == 0:
        a = 13
    else:
        a =- 1

print(a)
```
Output: `-1`

Tag: #statement/for

---

```python
try:
    raise IndexError
except IndexError:
    print("Получаем исключение")
else:
    print("Ловим его")
```
Output: `"Получаем исключение"`

Tag: #statement/try

---
```python
def f():
    try: 
        return 1
    finally:
        return 2

print(f())
```
Output: `2`

Tag: #statement/try

---
```python
a = {(13, 3), "qwer", 67, 1, 5, 33, 2, 7, "youths"}
b = ["python"]

for el in a:
    b.append(el)
else:
    a.union(b)
    
print(a)
```
Output: `{1, 2, 67, 33, 5, 'python', 7, (13, 3), 'youths', 'qwer'}`

Tag: #statement/for

---
```python
lst = [15, 30, 11, 12, 9, 0, 6, 4, 12, 13]
free_list = ["free list"]
last_element = 0
n = 0

while not any(free_list):
    free_list.append(lst[n])
    n += 1
else:
    last_element = free_list.pop()
    
print(last_element)
```
Output: `"free list"`

Tag: #statement/while

---
```python
def foo(value):
  num = 12
  try:
    num //= value
  except:
    num = 3
  else:
    num = 4
  finally:
    num = 5
  return num

print(foo(0))
```
Output: `5`

Tag: #statement/try,  #statement/try/else, #statement/try/finally

---

```python
count = 0
for letter in 'foo':
    count+=1
else:
    print(count)
```
Output: `3`

Tag: #statement/for/else

---

```python
def foo(value):
  num = 12
  try:
    num //= value
  except:
    num = 3
  else:
    num = 4
  return num

print(foo(4))
```
Output: `4`

Tag: #statement/try, #statement/try/else

---

```python
numbers = [10, 40, 120, 230]
for i in numbers:
    if i > 100:
        print(i)
        break
```
Output: `120`

Tag: #statement/break

---

```python
assert "hello, world" is True
```
Output: `AssertionError`

Tag: #statement/assert, #expression/operation/is, #boolean/literal

---

```python
x = 10
y = 30

del x, y
print(x, y)
```
Output: `NameError: name 'x' is not defined`

Tag: #statement/del

---

```python
value = True

assert value == True 
```
Output: `''`

Tag: #statement/assert, #boolean/literal,  #boolean/operation/compare

---

```python
def user_check(choice):
    if choice == 1:
        print("Admin")
    elif choice == 2:
        print("Editor")
    elif choice == 3:
        print("Guest")
    else:
        print("Wrong entry")

user_check(4)
```
Output: `Wrong entry`

Tag: #statement/if

---

```python
num = 10
sum = 0
i = 1
while i <= num:
    sum = sum + i
    i = i + 1

print(sum)
```
Output: `55`

Tag: #statement/while

---

```python
try:
    print(1 / 0)
except:
    raise RuntimeError("Something bad happened")
```
Output: `ZeroDivisionError: division by zero`

Tag: #statement/raise, #statement/try

---

```python
import math as m

print(m.sqrt(64))
```
Output: `8.0`

Tag: #statement/as, #statement/import

---

```python
numbers = [2, 3, 11, 7]
for i in numbers:
    if i > 10:
        continue
    square = i * i
print(square)
```
Output: `49`

Tag: #statement/continue

---

```python
odd = [1, 5, 7, 9]
even = [i + 1 for i in odd if i % 2 == 1]
print(even[2])
```
Output: `8`

Tag: #statement/for

---

```python
a, b = 1, 0
count = 0

try:
    print(a/b)
except ZeroDivisionError:
    count += 1
else:
    count += 2
finally:
    count += 3

print(count)
```
Output: `4`

Tag: #statement/try/except

---

```python
def numbers_range(n):
    for i in range(n):
        yield i
a = numbers_range(4)
print(next(a))

```
Output: `0`

Tag: #statement/yield, #generator/definition

---

```python
value = True

if value is not False:
  print("False")
else:
  print("True")
```
Output: `False`

Tag: #statement/not, #statement/is, #boolean/literal

---

```python
def get_even(numbers):
    return [num for num in numbers if not num % 2]

print(len(get_even([1, 2, 3, 4, 5, 6])))
```
Output: `3`

Tag: #statement/return

---

```python
x = "hello"

if not type(x) is int:
  raise TypeError("Only integers are allowed")

```
Output: `TypeError: Only integers are allowed`

Tag: #statement/raise

---

```python
values = []

for i in range(10):
  if i < 4:
    continue
  values.append(i)

print(values)
```
Output: `[4, 5, 6, 7, 8, 9]`

Tag: #statement/for, #statement/continue, #expression/operation/smaller

---

```python
idx = 15
msg = 'message'
if idx % 15 == 0:
    pass
elif idx % 5 == 0:
    msg = 'Buzz'
else:
    pass
print(msg)
```
Output: `message`

Tag: #statement/pass

---

```python
def foo():
    x = 20

    def bar():
        global x
        x = 25
    bar()
foo()
print(x)
```
Output: `25`

Tag: #statement/global

---