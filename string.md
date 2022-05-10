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

Tag: #string/operation/slice, #build-in/str

---
```python
s = "python"
print(len(s * 2 + ''))
```
Output: `12`

Tag: #string/operation/multiple, #build-in/len

---
```python
a = "Good morning!"
b = a.zfill(20)

if b != a:
    print(a, b)
```
Output: `"Good morning!" "0000000Good morning!"`

Tag: #string/operation/zfill

---
```python
txt = "For only {price:.2f} dollars!"
print(txt.format(price=49)) 
```
Output: `"For only 49.00 dollars!"`

Tag: #string/operation/format

---
```python
s = "Python3 is a lot better than Python2."
print(s.rfind("Python"))
```
Output: `29`

Tag: #string/operation/rfind

---
```python
s = "Python3 is a lot better than Python2."
print(s.rpartition("Python"))
```
Output: `('Python3 is a lot better than ', 'Python', '2.')`

Tag: #string/operation/rpartition

---
```python
s = "Python3 is a lot better than Python2."
print(s.partition("Python"))
```
Output: `('', 'Python', '3 is a lot better than Python2.')`

Tag: #string/operation/partition