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
l = [[1, 2], [3, 4, 5]]
print(sum(l, []))
```
Output: `[1, 2, 3, 4, 5]`

Tag: #build-in/sum

---
```python
print(callable(print))
```
Output: `True`

Tag #build-in/callable

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

```python
print('a' 'b' 'c' 'd')
```
Output: `abcd`

Tag: #build-in/print

---

```python
lst = [1, 2, 3, 4]

r = 1

for i in range(len(lst)):
    r *= i

print(r)
```
Output: `0`

Tag: #build-in/range

---

```python
print(list(range(2, 15, 3)))
```

Output: `[2, 5, 8, 11, 14]`

Tag: #build-in/range, #build-in/list

---

```python
print(all([]))
```
Output: `True`

Tag: #build-in/all

---

```python
func = lambda x : x % 2 == 0
nums = filter(func, range(17))
print(len(nums) + min(nums))
```
Output: `TypeError: object of type 'filter' has no len()`

Tag: #build-in/filter

---

```python
lst = [3, 1, 4, 'a', 2]

a = tuple(reversed(lst))

print(a)
```

Output: `(2, 'a', 4, 1, 3)`

Tag: #build-in/reversed, #build-in/tuple, #list/literal

---

```python
dct = {3: 4, -1: 9, 4: 1, -2: 4}

num = max(dct, key=lambda k: dct[k])

print(num)
```

Output: `-1`

Tag: #build-in/max, #lambda, #dict/literal

---

```python
lst_1 = [2, 5, 9, 0]
lst_2 = [2, 5, 9]

res = min(lst_1, lst_2)

print(res)
```

Output: `[2, 5, 9]`

Tag: #build-in/min, #list/literal

---

```python
a = pow(2, 3, 10)

print(a)
```

Output: `8`

Tag: #build-in/pow

---

```python
str = 'abc'
num = (10, 20, 30, 40)

a = list(zip(str, num))

print(a)
```

Output: `[('a', 10), ('b', 20), ('c', 30)]`

Tag: #build-in/zip, #build-in/list, #tuple/literal

---

```python
first, second = zip(*[(1, 4), (2, 5), (3, 6)])

print(first, second)
```

Output: `(1, 2, 3) (4, 5, 6)`

Tag: #build-in/zip, #list/literal, #tuple/literal

---

```python
dct = {1: 2, 2: 3, 3: 4, 4: [2, 5, 6]}

b = len(dct)

print(b)
```

Output: `4`

Tag: #build-in/len, #dict/literal

---

```python
if all([2, 0, 4]):
    print("Yes")
else:
    print("No")
```

Output: `No`

Tag: #build-in/all, #list/literal, #boolean

---

```python
data = [2, 4, 5, 6, {}]

a = isinstance(data[4], dict)

print(a)
```

Output: `True`

Tag: #build-in/isinstance, #list/literal, #dict, #boolean  

---

```python
lst = [1, 2, 3, 4, 5, 6]

a = lst[slice(0, 5, 2)]

print(a)
```

Output: `[1, 3, 5]`

Tag: #build-in/slice, #list/literal  

---

```python
class A:
    pass

class B(A):
    pass


print(issubclass(A, B))
```

Output: `False`

Tag: #build-in/issubclass, #class/inheritance, #boolean  

---

```python
a = divmod(1, 0)

print(a)
```

Output: `ZeroDivisionError: integer division or modulo by zero`

Tag: #build-in/divmod

---

```python
lst = [2, 3, 4, 5]

print(*lst, sep='!', end='?')
```

Output: `2!3!4!5?`

Tag: #build-in/print, #list/literal

---

```python
num = float()

print(num)
```

Output: `0.0`

Tag: #build-in/float

---

```python
vowels = ('a', 'e', 'i', 'o', 'u')

fSet = frozenset(vowels)

fSet.add('v')
```

Output: `AttributeError: 'frozenset' object has no attribute 'add'`

Tag: #build-in/frozenset, #tuple/literal

---

```python
class Person:
    name = 'Petr'


p = Person()

setattr(p, 'name', 'Roma')

print(p.name)
```

Output: `Roma`

Tag: #build-in/setattr, #class

---

```python
class Student:
  marks = 10
  name = 'Vanya'


person = Student()

name, marks = getattr(person, 'name'), getattr(person, 'marks')

print(name, marks)
```

Output: `Roma`

Tag: #build-in/getattr, #class

---

```python
data = ['bread', 'milk', 'butter']

enumerate_num = enumerate(data, 1)

print(list(enumerate_num))
```

Output: `Roma`

Tag: #build-in/enumerate, #build-in/list, #list/literal

---
