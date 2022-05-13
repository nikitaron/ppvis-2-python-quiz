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

```python
values = '' or None

print(values)
```
Output: `None`

Tag: #string/operation/empty_value

---

```python
a = '1'.encode()
b = (1).encode()

print(a == b)
```
Output: `AttributeError: 'int' object has no attribute 'encode'`

Tag: #string/operation/encode

---

```python
txt = "The best things in life are free!"

print("free" in txt)
```
Output: `True`

Tag: #expression/operation/in, #string/literal

---

```python
a = '1'.encode()
b = (1).encode()

print(a == b)
```
Output: `AttributeError: 'int' object has no attribute 'encode'`

Tag: #string/operation/encode

---

```python
txt = "hello, my name is Peter, I am 26 years old"

x = txt.split(", ")

print(x)
```
Output: `['hello', 'my name is Peter', 'I am 26 years old']`

Tag: #string/operation/split

---


```python
txt = "apple#banana#cherry#orange"

x = txt.split("#", 1)

print(x)
```
Output: `['apple', 'banana#cherry#orange']`

Tag: #string/operation/split

---

```python
txt = "Thank you for the music\nWelcome to the jungle\n"

x = txt.splitlines()

print(x)
```
Output: `['Thank you for the music', 'Welcome to the jungle']`

Tag: #string/operation/splitlines

---

```python
txt = "Thank you for the music\nWelcome to the jungle"

x = txt.splitlines(True)

print(x)
```
Output: `['Thank you for the music\n', 'Welcome to the jungle']`

Tag: #string/operation/splitlines

---

```python
mydict = {83:  80}

txt = "Hello Sam!"

print(txt.translate(mydict))
```
Output: `Hello Pam!`

Tag: #string/operation/translate

---

```python
txt = "Hi Sam!"

x = "mSa"
y = "eJo"

mytable = txt.maketrans(x, y)
print(txt.translate(mytable))
```
Output: `Hi Joe!`

Tag: #string/operation/maketrans, #string/operation/translate

---

```python
txt = ",,,,,rrttgg.....banana....rrr"

x = txt.strip(",.grt")
```
Output: `banana`

Tag: #string/operation/strip

---
