```python
print(print('hi!'))
```
Output: 
```
hi!
None
```
Tag: #expression/priority

---
```python
def get_username(user):
    return user or 'anonymous'

print(get_username(None))
```
Output: `anonymous`

Tag: #expression/operation/or

---
```python
print(1.5 % 1)
```
Output: `0.5`

Tag: #expression/operation/modulo

---

```python
a = None
b = False

print((a or b) or a)
```
Output: `None`

Tag: #expression/operation/or

---

```python
print(bool(print(print(5))))
```
Output: `5 None False`

Tag: #expression/priority

---

```python
print(type( 3.4 // 2 ))
```
Output: `<class 'float'>`

Tag: #expression/integer_division

---

```python
sum = lambda x, y: x + y
print(sum(2,4))
```
Output: `6`

Tag: #expression/lambda

---

```python
print(False == (not True))
```
Output: `True`

Tag: #expression/operation/not

---

```python
a = 0
b = 1

print(a and (b / a) >= 0)
```
Output: `0`

Tag: #expression/operation/and, #expression/evaluation_order

---

```python
a = 0.1 + 0.2
print(a == float(0.3))

```
Output: `False`

Tag: #expression/operation/equality

---

```python
m = 300
count = 0
while m <= 305:
  m = m + 1
  if m % 2 != 0:
    continue
  count += 1
print(count)
```
Output: `3`

Tag: #expression/operation/modulo

---

```python
number = 0
list = [2, 3, 4, 5]
num = 5 % 2

if num not in list:
    number = 1
print(number)
```
Output: `1`

Tag: #expression/operation/not_in, #list

---

```python
number = 0
str = 'I love Python'
letter = 'l'

if letter in str:
    number = 1
print(number)
```
Output: `1`

Tag: #expression/operation/in, #string

---

```python
data = {"age": 30, "name": "Bob"}

print("age" in data)
```
Output: `True`

Tag: #expression/operation/in, #dict

---

```python
a = "2"
b = 2
c = type(b)

if c(a) is b:
    print("True")
else:
    print("False")
```
Output: `True`

Tag: #expression/operation/is, #type

---

```python
number = 0
list = [2, 3, 4, 5]
num = 5 ** 2

if num not in list:
    number = 1
print(number)

```
Output: `1`

Tag: #expression/operation/power

---