```python
a, b = 3, 4
print(a.bit_length(), b.bit_length())
```
Output: `2 3`

Tag: #int/operation/bit_length, #int/literal

---
```python
a, b = 3, 4
print(a.bit_count(), b.bit_count())
```
Output: `2 1`

Tag: #int/operation/bit_count, #int/literal

---
```python
a, b = 424411453, 3122871
lst = divmod(a, b)
res = lst[0] * b + lst[1]

print(res == a)
```
Output: `2 1`

Tag: #int/operation/divmod, #int/literal

---
```python
a = 0
for x in range(5):
    a -= -abs(-x)
    
print(a)
```
Output: `10`

Tag: #int/operation/abs, #int/operation/negation

---
```python
print(pow(2, 3, 3))
```
Output: `2`

Tag: #int/operation/modular_exponentiation

---
```python
a = str(bin(4))
b = str(bytes(4))

print(a == b)
```
Output: `False`

Tag: #int/operation/bin, #build-in/bytes, #build-in/str

---
```python
a = 101 ** 100
b = 95. ** 100
print(type(a) == type(b))
```
Output: `False`

Tag: #int/operation/pow, #float/operation/pow, #build-in/type

---
