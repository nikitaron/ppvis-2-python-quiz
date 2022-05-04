```python
a = 'Python best'
a[a.index('t')] = 'd'

print(a)
```
Output: `TypeError: 'str' object does not support item assignment`

Tag: #string/immutable

---
```python
print(sum('Lorem ipsum', ''))
```
Output: `TypeError: sum() can't sum strings [use ''.join(seq) instead]`

Tag: #string/concatenation, #built-in/sum

---
