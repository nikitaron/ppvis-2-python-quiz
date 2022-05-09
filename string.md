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
a = "P".format("y")

print(a)
```
Output: `P`

Tag: #string/operation/format

---

```python
b = "{2}{0}".format("p", "y", "p")

print(b)
```
Output: `pp`

Tag: #string/operation/format

---

```python
st = 'hello'
indx = st.index('l')
st[indx] = 'p'

print(st)
```
Output: `TypeError: 'str' object does not support item assignment'`

Tag: #string/immutable

---

```python
what = """i"""
up = 'i'
print(what is up)
```
Output: `True`

Tag: #string/operation/is

---

```python
lst = []
lst = 'a'
lst *= 2

print(lst)
```
Output: `aa`

Tag: #string/operation/multiply

---