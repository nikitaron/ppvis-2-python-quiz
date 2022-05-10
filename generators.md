```python
num_list: list = [1, 3, 6, 10]
multiplied_list = (num**2 for num in num_list)

print(type(multiplied_list))
```
Output: `<class 'generator'>`
Tag: #generator, #build-in/num_list, #build-in/type
---

```python
numbers = [1, 2, 3, 4, 5]

squares: list = [number**2 for number in numbers if number % 2 == 0]

print(squares)
```
Output: `[4, 16]`
Tag: #generator, #build-in/list
---

```python
def increment(n):
    yield n + 1
    
print(type(increment(5)))
```
Output: `<class 'generator'>`
Tag: #generator, #build-in/yield, #build-in/type

---

```python
def func():
    yield 'Hello'
    yield 'World'
    yield '!!!'
    
for letter in func():
    print(letter, end=' ')
```
Output: `Hello World !!!`
Tag: #generator, #build-in/yield

---

```python
expression = (letter for letter in 'abc')

len(expression)
```
Output: `TypeError: object of type 'generator' has no len()`
Tag: #generator, #build-in/len

---

```python
abc_gen_expr = (letter for letter in 'abc')

print(next(abc_gen_expr))
```
Output: `a`
Tag: #generator, #build-in/next