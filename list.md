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
```python
x1 = [17, 33, 15, 6, 1, 14]
x2 = []
while (el := x1.pop()) >= 15:
    x2.append(el)
print(x2)
```
Output: `[14, 1, 6, 15]`

Tag: #list/operation/pop

---
```python
lst = ["ab", "vm"]
for x in lst:
    lst.append(x.upper())
print(lst)
```
Output: `Infinite loop.`

Tag: #list/operation/append #string/operation/upper

---
```python
a, *b, c = [1, 2]
print(a, b, c)
```
Output: `1 [] 2`

Tag: #list

---
```python
lst1 = [2, 5, 8, 0, 4, 1]
lst2 = lst1
print(lst1 is lst2, lst1 == lst2)
```
Output: `True True`

Tag: #list #expression/operation/is #expression/operation/equality

---
```python
lst1 = [2, 5, 8, 0, 4, 1]
lst2 = lst1[:]
print(lst1 is lst2, lst1 == lst2)
```
Output: `False True`

Tag: #list/operation/slice #expression/operation/is #expression/operation/equality

---
```python
lst1 = [2, 5, 8, 0, 4, 1]
lst2 = lst1.copy()
print(lst1 is lst2, lst1 == lst2)
```
Output: `False True`

Tag: #list/operation/copy #expression/operation/is #expression/operation/equality

---
```python
furniture_1 = ["TV", "Projector", "Playstation"]
furniture_2 = ["Fridge", "Cooker", "Toster"]

furniture_1.extend(furniture_2)
furniture_2.append(furniture_1)

print(furniture_2)
```
Output: `['Fridge', 'Cooker', 'Toster', ['TV', 'Projector', 
'Playstation', 'Fridge', 'Cooker', 'Toster']]`

Tag: #list/operation/extend #list/operation/append

---
```python
furniture = ['TV', 'Projector', 'Playstation', 'Fridge', 'Cooker', 'Toster']
furniture.reverse()
print(*furniture[::-1])
```
Output: `"TV" "Projector" "Playstation" "Fridge" "Cooker" "Toster"`

Tag: #list/operation/reverse #list/operation/slice

---
```python
row_data = ["False", 1076, [], True, 13 - 5, ("Vancouver", "Helsinki", "Montreal"), "trust", {56.22, "12"}]
row_data.sort(reverse=True)
print(row_data)
```
Output: `TypeError: '<' not supported between instances of 'int' and 'str'`

Tag: #list/operation/sort

---
```python
lst = [15 + 6, 24 // 3, True == False, 12 - 3 - 3, 7 + 5 // 4]
lst.sort(key=lambda x: x > 10)
print(lst)
```
Output: `[8, False, 6, 8, 21]`

Tag: #list/operation/sort

---
```python
lst = ["Jake", "Mike", "O'Brien", "Tim", "George", "Heisenberg"]
lst.sort(key=lambda x: len(x), reverse=True)
print(lst)
```
Output: `['Heisenberg', "O'Brien", 'George', 'Jake', 'Mike', 'Tim']`

Tag: #list/operation/sort

---
```python
lst = [(25, 48, 254), {17, 32, 54.54}, [125, 91], [4.03], (77.78,), {.0299}, {41.7, 33, 49, 55}]
lst.sort(key=lambda x: max(x))
print(lst)
```
Output: `[{0.0299}, [4.03], {32, 17, 54.54}, {41.7, 33, 55, 49}, (77.78,), [125, 91], (25, 48, 254)]`

Tag: #list/operation/sort