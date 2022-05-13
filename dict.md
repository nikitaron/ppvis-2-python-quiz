```python
i = {}

print(type(i))
```
Output: `<class 'dict'>`

Tag: #dict/literal, #type

---

```python
lst = [[1, 2], [2, 2, 3], [4, 2, 1, 1], [1, 2]]
counts = dict()

for el in lst:
    counts[tuple(el)] = el

print(len(counts))
```
Output: `3`

Tag: #dict/operation/set

---

```python
nums = {
    1: {1},
    2: {2},
    3: {3}
}

print(list(nums.values()))
```
Output: `[{1}, {2}, {3}]`

Tag: #dict/operation/values

---

```python
template = { "i": 0 }
values = []

for i in range(5):
  if i > 2:
    template["i"] = i
    values.append(template)

print(values)
```
Output: `[{'i': 4}, {'i': 4}]`

Tag: #dict/lvalue

---

```python
d = {
  -1: "some"
}

print(d[-1])
```
Output: `some`

Tag: #dict/indexing

---
```python
dict1 = {
    0: "False",
    True: "1"
}

print(dict1[1], dict1[False])
```
Output: `1 False`

Tag: #dict/indexing

---

```python
text = '1,2,3'
d = dict.fromkeys(text)

print(len(d))
```
Output: `4`

Tag: #dict/operation/fromkeys

---

```python
car = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

car.clear()

print(car)
```
Output: `{}`

Tag: #dict/operation/clear

---

```python
car = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

x = car.copy()

print(x) 
```
Output: `{'brand': 'Ford', 'model': 'Mustang', 'year': 1964}`

Tag: #dict/operation/copy

---

```python
x = ('key1', 'key2', 'key3')
y = 0

value = dict.fromkeys(x, y)

print(value) 
```
Output: `{'key1': 0, 'key2': 0, 'key3': 0}`

Tag: #dict/operation/fromkeys

---

```python
class A:
  def __init__(self, i):
    self.i = i

x = [A(1), A(2), A(3)]
y = 0

value = dict.fromkeys(x, y)

print(value)
```
Output: `{<__main__.A object at ref>: 0, <__main__.A object at ref>: 0, <__main__.A object at ref>: 0}`

Tag: #dict/operation/fromkeys

---

```python
x = [1, 2, 3]
y = [2, 3, 5]

value = dict.fromkeys(x, y)

print(value)
```
Output: `{1: [2, 3, 5], 2: [2, 3, 5], 3: [2, 3, 5]}`

Tag: #dict/operation/fromkeys

---

```python
x = [ { "i": 1 }, { "i": 3 }, { "i": 2 } ]
y = 1

value = dict.fromkeys(x, y)

print(value)
```
Output: `TypeError: unhashable type: 'dict'`

Tag: #dict/operation/fromkeys

---

```python
x = { 1, 2, 3 }

value = dict.fromkeys(x)

print(value)
```
Output: `{1: None, 2: None, 3: None}`

Tag: #dict/operation/fromkeys

---

```python
car = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

x = car.get("model")

print(x)
```
Output: `Mustang`

Tag: #dict/operation/get

---

```python
car = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

x = car.get("price", 15000)

print(x)
```
Output: `15000`

Tag: #dict/operation/get

---

```python
car = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

x = car.get("price")

print(x)
```
Output: `None`

Tag: #dict/operation/get

---

```python
car = {
  "brand": "Ford",
  "model": "Mustang",
}

x = car.items()

print(x)
```
Output: `dict_items([('brand', 'Ford'), ('model', 'Mustang')])`

Tag: #dict/operation/items

---

```python
car = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

x = car.items()

car["year"] = 2018

print(x)
```
Output: `dict_items([('brand', 'Ford'), ('model', 'Mustang'), ('year', 2018)])`

Tag: #dict/operation/items

---

```python
car = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

x = car.keys()

print(x)
```
Output: `dict_keys(['brand', 'model', 'year'])`

Tag: #dict/operation/keys

---

```python
car = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

x = car.keys()

car["color"] = "white"

print(x)
```
Output: `dict_keys(['brand', 'model', 'year', 'color'])`

Tag: #dict/operation/keys

---

```python
car = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

car.pop("model")

print(car)

```
Output: `{'brand': 'Ford', 'year': 1964}`

Tag: #dict/operation/pop

---

```python
car = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

x = car.pop("price")

print(x)

```
Output: `KeyError: 'price'`

Tag: #dict/operation/pop

---

```python
car = {
  "brand": "Ford",
  "year": 1964
}

x = car.pop("model", 'Rover')

print(x)
```
Output: `Rover`

Tag: #dict/operation/pop

---

```python
car = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

x = car.popitem()

print(x)
```
Output: `('year', 1964)`

Tag: #dict/operation/popitem

---

```python
car = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

x = car.setdefault("model", "Bronco")

print(x)
```
Output: `Mustang`

Tag: #dict/operation/setdefault

---

```python
car = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

x = car.setdefault("color", "white")

print(x)
```
Output: `white`

Tag: #dict/operation/setdefault

---

```python
car = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

x = car.setdefault("price")

print(x)
```
Output: `None`

Tag: #dict/operation/setdefault

---

```python
car = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

car.update({"color": "White"})

print(car)
```
Output: `{'brand': 'Ford', 'model': 'Mustang', 'year': 1964, 'color': 'White'}`

Tag: #dict/operation/update

---