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