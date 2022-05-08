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
l = [[1, 2], [3, 4, 5]]
print(sum(l, []))
```
Output: `[1, 2, 3, 4, 5]`

Tag: #build-in/sum

---
```python
print(callable(print))
```
Output: `True`

Tag #build-in/callable
