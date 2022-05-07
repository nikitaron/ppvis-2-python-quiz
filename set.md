```python
a = {1, True, '1'}

print(len(a))
```
Output: `2`

Tag: #set/literal, #set/operation/length

---
```python
words = {'user', 'billy',
         'password', 'text'}

print(words['password'])
```
Output: `TypeError: 'set' object is not subscriptable`

Tag: #set/operation

---
```python
lst1 = [x for x in range(6)]
lst2 = [y for y in range(9)]
a = lst1 + lst2

for x in set(a):
    print(x, end=" ")
```
Output: `0 1 2 3 4 5 6 7 8`

Tag: #set #list/comprehension #build-in/set