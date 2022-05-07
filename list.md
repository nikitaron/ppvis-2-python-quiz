```python
lst = [2,4]

print(lst * 2 / 2)
```
Output: `TypeError: unsupported operand type(s) for /: 'list' and 'int'`

Tag: #list/operation

---
```python
num = 32 // 3

phrase = 'Hello' if num == 10 else 'World'

print('-'.join(phrase[::-1]))
```
Output: `o-l-l-e-H`

Tag: #list/operation/slice, #string/operation/join

---
```python
lst_1 = [1, 2, 3, 4, 5]
lst_2 = lst_1[:2]
lst_1[2:] = lst_2[:]

print(lst_1, end=" ")
print(lst_2)
```
Output: `[1, 2, 1, 2] [1, 2]`

Tag: #list/operation/slice

---
```python
x1 = [i for i in range(10) if i % 2 and i % 3]
x2 = x1
x2.append(e for e in range(8) if e not in x1)
print(x1)
print(x2)
```
Output: `[1, 5, 7, <generator object <genexpr> at 0x7f18ad923f40>] [1, 5, 7, <generator object <genexpr> at 0x7f18ad923f40>]`

Tag: #list/comprehension #build-in/append #build-in/range #generator

---