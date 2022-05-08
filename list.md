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
a = 1.2
b = a - 0.2
lst = [1.2, 0.2]

print(a, lst[b])
```
Output: `TypeError: list indices must be integers or slices, not float`

Tag: #list/literal