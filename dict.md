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
d = {
    "fruits": 3,
    "vegetables": 5,
    "cherries": 2
}
p = d.keys()[:]
print(p)
```
Output: `TypeError: 'dict_keys' object is not subscriptable`

Tag: #dict/operation/keys

---
```python
element_dict = {1: 4, "value": 20, "key": 1, 18: .9}
if any(element_dict):
    print(element_dict.keys())
```
Output: `dict_keys([1, 'value', 'key', 18])`

Tag: #dict/operation/keys, #build-in/any

---
```python
d = {
    [1,2]: [3,4],
    (1): [1, 2]
}
print(d.items())
```
Output: `TypeError: unhashable type: 'list'`

Tag: #dict/operation/items

---
```python
elements = {1: 2, 2: 3, 3: 4}
elements[2] += 6
print(elements.items())
```
Output: `dict_items([(1, 2), (2, 9), (3, 4)])`

Tag: #dict/operation/item, #dict/indexing

---
```python
x = {1: 'a', 2: 'b'}
y = {2: 'c', 3: 'd'}
print({**x, **y}[2])
```
Output: `"c"`

Tag: #dict/indexing, #dict/var-keyword

---
```python
elements = [1, 2, 3]
res_elements = dict.fromkeys(elements, elements ** 2)
print(res_elements)
```
Output: `TypeError: unsupported operand type(s) for ** or pow(): 'list' and 'int'`

Tag: #dict/operation/fromkeys 

---