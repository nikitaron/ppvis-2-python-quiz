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
```python
a = "Hello, World"

print(a[:6:2])
```
Output: `"Hlo"`

Tag: #string/operation/slice

---
```python
st = "spam"

print(st[:-1:])
```
Output: `"spa"`

Tag: #string/operation/slice

---
```python
st = "spam"

print(st[-1::-1])
```
Output: `"maps"`

Tag: #string/operation/slice

---
```python
print("abbzxyzxzxabb".count("abb", -10, -1))
```
Output: `0`

Tag: #string/operation/count

---
```python
arr = (1, 2, 3)
s = str(arr)
print(s[4:10])
```
Output: `"2, 3)"`

Tag: #string/operation/slice #build-in/str

---
```python
s = "python"
print(len(s * 2 + ''))
```
Output: `12`

Tag: #string/operation/multiple 

---
