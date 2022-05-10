```python
print(print('hi!'))
```
Output: 
```
hi!
None
```
Tag: #expression/priority

---
```python
def get_username(user):
    return user or 'anonymous'

print(get_username(None))
```
Output: `anonymous`

Tag: #expression/operation/or

---
```python
print(1.5 % 1)
```
Output: `0.5`

Tag: #expression/operation/modulo

---

```python
a = None
b = False

print((a or b) or a)
```
Output: `None`

Tag: #expression/operation/or

---

```python
print(bool(print(print(5))))
```
Output: `5 None False`

Tag: #expression/priority

---

```python
print(type( 3.4 // 2 ))
```
Output: `<class 'float'>`

Tag: #expression/integer_division

---