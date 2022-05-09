```python
a = bytes(range(3)).hex()

print(a)
```

Output: `000102`

Tag: #byte, #byte/operation/hex, #build-in/range

---

```python
a = bytes(1)
b = b'\x00'
c = b'\x01'

print(a == b)
print(a == c)
```
Output: `True False`

Tag: #byte/literal, #byte/operation/compare

---

```python
a = b'\x00'
b = b'\x01'

print(a + b)
```
Output: `b'\x00\x01'`

Tag: #byte/literal, #byte/operation/add

---

```python
print(b'что выведет этот принт?')
```
Output: `SyntaxError: bytes can only contain ASCII literal characters`

Tag: #byte/literal

---

```python
a = str('a').encode()
b = b'a'

print(a is b)
```
Output: `True`

Tag: #byte/literal

---