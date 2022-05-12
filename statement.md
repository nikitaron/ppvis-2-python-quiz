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