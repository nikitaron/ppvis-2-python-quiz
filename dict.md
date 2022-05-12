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
