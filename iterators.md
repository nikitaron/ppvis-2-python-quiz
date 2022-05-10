```python
numbers = [100, 200, 300]
iterator = iter(numbers)

print(len(iterator))
```
Output: `TypeError: object of type 'list_iterator' has no len()`
Tag: #iterator #build-in/len

---

```python
numbers = [100, 200, 300]
iterator1 = iter(numbers)
iterator2 = iter(iterator1)

print(iterator1 is iterator2)
```
Output: `True`
Tag: #iterator

---

```python
def custom_chain(*iterables):
     for iterable in iterables:
         yield from iterable
 
 
 for x in custom_chain([1, 2, 3], 'abc'):
     print(x, end=' ')
```
Output: `1 2 3 a b c`

Tag: #iterator, #build-in/yield

---

```python
scores: dict = {'John': 99, 'Danny': 95}

iter_scores = iter(scores)

print(type(iter_scores))
```
Output: `<class 'dict_keyiterator'>`

Tag: #iterator #build-in/dict

---

```python
def custom_chain(*iterables):
     for iterable in iterables:
         yield from iterable
 
 
 for x in custom_chain([1, 2, 3], 'abc'):
     print(x, end=' ')
```
Output: `1 2 3 a b c`

Tag: #iterator, #build-in/yield

---

```python
scores: dict = {'John': 99, 'Danny': 95}

iter_scores = iter(scores)

print(type(iter_scores))
```
Output: `<class 'dict_keyiterator'>`

Tag: #iterator, #build-in/type, #build-in/dict