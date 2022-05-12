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

Tag: #statement/try

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

Tag: #statement/try

---