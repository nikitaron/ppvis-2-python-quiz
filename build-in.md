```python
words = ['python', 'programmer', 'quizzes']

for index, value in enumerate(words):
    if index % 2 == 0:
        print(value)
        break
```
Output: `python`

Tag: #built-in/enumerate, #expression/operation/modulo

---
```python
lst = []
lst.append(lst)

print(lst)
```
Output: `[[...]]`

Tag: #build-in/print

---
```python
r = [i for i in range("10")]
r.append()

print(r)
```
Output: `TypeError: 'str' object cannot be interpreted as an integer`

Tag: #build-in/range #list/comprehension

---
```python
l = [[1, 2], [3, 4, 5]]
print(sum(l, []))
```
Output: `[1, 2, 3, 4, 5]`

Tag: #build-in/sum
