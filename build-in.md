```python
words = ['python', 'programmer', 'quizzes']

for index, value in enumerate(words):
    if index % 2 == 0:
        print(value)
        break
```
Output: `python`

Tag: #built-in/enumerate, #expression/operation/modulo

---
```python
lst = []
lst.append(lst)

print(lst)
```
Output: `[[...]]`

Tag: #build-in/print

---

```python
list_of_tuple = [('bob', 35, 'mgr'), ('sue', 40, 'dev')]

data = list(map((lambda row: row[2]), list_of_tuple))

print(data)
```

Output: `['mgr', 'dev']`

Tag: #build-in/map, #build-in/list, #list/literal, #tuple/literal, #lambda

---

```python
x = None
print(bool(x))
```

Output: `False`

Tag: #build-in/bool, #build-in/print, #boolean

---

```python
lst = [4.6, 2.3, 7.8]
a = list([2, 5.9])

for num in lst:
    a.append(int(num))

print(a)
```

Output: `[2, 5.9, 4, 2, 7]`

Tag: #build-in/int, #build-in/list, #list/operation/append

---

```python
lst = [(2, 3), (2, 9), (5, 0)]

a = dict(lst)

print(a)
```

Output: `{2: 9, 5: 0}`

Tag: #build-in/dict, #build-in/int, #list/literal, #tuple/literal

---

```python
lst = [3, 1, 2, 4, 1]

sum_of_num = sum(lst, start=2)

print(sum_of_num)
```

Output: `13`

Tag: #build-in/sum, #list/literal

---

```python
lst = [-4, 0, 2, '', 7, 'a', ' ', -4]

b = list(filter(None, lst))

print(b)
```

Output: `[-4, 2, 7, 'a', ' ', -4]`

Tag: #build-in/filter, #build-in/list, #list/literal

---

```python
def check(x):
    if x % 2 == 0:
        return 1


lst = [2, 1, 4, 5, 3]

a = list(filter(check, lst))

print(a)
```

Output: `[2, 4]`

Tag: #build-in/filter, #build-in/list, #expression/operation/modulo, #list/literal

---

```python
lst = [3, 4, 'a', -1]

a = sorted(lst, reverse=True)

print(a)
```

Output: `TypeError: '<' not supported between instances of 'str' and 'int'`

Tag: #build-in/sorted, #list/literal

---

```python
st = {1, 5, 6, 5}

a = tuple(st)

print(a)
```

Output: `(1, 5, 6)`

Tag: #build-in/tuple, #set/literal

---

```python
tpl = (4, 1, 0, 'a')

a = any(tpl)

print(a)
```

Output: `True`

Tag: #build-in/any, #tuple/literal, #boolean

---

```python
lst = [2, 5, 5, 1, 3]

itr = iter(lst)

a = next(itr)
b = next(itr)

print(a, b)
```

Output: `2 5`

Tag: #build-in/iter, #build-in/next, #list/literal

---
