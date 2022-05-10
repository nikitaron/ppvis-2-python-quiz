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

print(*a)
```
Output: `0 1 2 3 4 5 6 7 8`

Tag: #set, #list/comprehension, #build-in/set

---
```python
s1 = {1, 2, 3, 4, 5}
s2 = {3, 4, 5}
print(len(s2 - s1))
```
Output: `0`

Tag: set/operation/difference

---
```python
a = {1, 2, 3, 4, 5}
b = {1, 2, 3, 4, 5}
print(b.issuperset(a))
```
Output: `True`

Tag: set/operation/issuperset

---
```python
a = {1, 2, 3}
b = {1, 2, 3, 4, 5}
print(a & b | a)
```
Output: `{1, 2, 3}`

Tag: #set/operation/definition, #set/operation/addition

---
```python
a = {1, 2, 3, 4, 5}
b = {1, 2, 3}
print(a | b & a)
```
Output: `{1, 2, 3, 4, 5}`

Tag: #set/operation/definition, #set/operation/addition

---
```python
a = {5, 4, 3, 2, 1}
b = {1, 2, 3, 6}
c = {7, 4, 2, 1}
c = c.union(a & b)
print(c)
```
Output: `{1, 2, 3, 4, 7}`

Tag: #set/operation/union, #set/operation/definition

---
```python
a = {5, 4, 3, 2, 1}
b = {1, 2, 3, 6}
c = {7, 4, 2, 1}
c = c.symmetric_difference(a | b)
print(c)
```
Output: `{3, 5, 6, 7}`

Tag: #set/operation/symmetric_difference, #set/operation/addition

---
```python
shop_list1 = {"apple", "cheese", "milk", "yogurt", "juice"}
shop_list2 = {"banana", "coffee", "cacao", "milk", "tomato", "cheese"}

print(*shop_list1.intersection(shop_list2))
```
Output: `"milk" "cheese"`

Tag: #set/operation/intersection

---
```python
shop_list1 = {"apple", "cheese", "milk", "yogurt", "juice"}
shop_list2 = {"banana", "coffee", "cacao", "milk", "tomato", "cheese"}

shop_list1.intersection_update(shop_list2)
print(shop_list1)
```
Output: `{'milk', 'cheese'}`

Tag: #set/operation/intersection_update

---
```python
lang1 = {"C++", "C", "C#", "Java", "Perl"}

lang2 = lang1.copy()
lang2.update(
    ["C", "Python", "C++",  "JavaScript", "PHP"]
)

print(*lang2.difference(lang1))
```
Output: `"JavaScript" "PHP" "Python"`

Tag: #set/operation/difference, #set/operation/update

---
```python
lang1 = {"C++", "C", "C#", "Java", "Perl"}
lang2 = ["C", "Python", "C++",  "JavaScript", "TypeScript", "PHP"]

print(lang1.isdisjoint(lang2))
```
Output: `False`

Tag: #set/operation/isdisjoint

---
```python
cities1 = {"New York", "Toronto", "Cape Town", "Sao Paulo"}
cities2 = {"Istanbul", "New York", "Caracas", "Cape Town"}
print(cities2.symmetric_difference(cities1))
```
Output: `{'Toronto', 'Caracas', 'Istanbul', 'Sao Paulo'}`

Tag: #set/operation/symmetric_difference

---
```python
a = {3, 2, 1}
b = {1, 2, 3}

print(a.union(b).index(3))
```
Output: `AttributeError: 'set' object has no attribute 'index'`

Tag: #set/operation/union 

---
```python
a = set("Hello")
print(a[-1::-1])
```
Output: `TypeError: 'set' object is not subscriptable`

Tag: #set

---
```python
a = {el for el in "bacb-bd77-1abd-ac8b" if not el.isdigit()}
print(a)
```
Output: `{'-', 'b', 'c', 'd', 'a'}`

Tag: #set/comprehension