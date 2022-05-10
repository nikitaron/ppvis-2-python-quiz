```python
def func(*args):
    args.append(3)
    print(*args)

func(1,2)
```
Output: `AttributeError: 'tuple' object has no attribute 'append'`

Tag: #function/parameter, #tuple/operation

---

```python
mult_value = 2
lst = [2, 5, 11, 9]

iterator = map(lambda x: x * mult_value, lst)

mult_value = 1
lst = [1, 4, 10, 8]

print(*list(iterator))
```
Output: `2 5 11 9`

Tag: #function/lambda/closures

---

```python
print((lambda x : x ** 3)((lambda x : x + 2)(1)))
```
Output: `27`

Tag: #function/lambda

---

```python
def calc_sum(*args, **kwargs):
    return sum(args, kwargs)

print(calc_sum(1, 2, a = 3, b = 4))
```
Output: `TypeError: unsupported operand type(s) for +: 'dict' and 'int'`

Tag: #function/parameter/unpacking

---

```python
def a(a):
    def b():
        print(a)

a(4)()
```
Output: `TypeError: 'NoneType' object is not callable`

Tag: #function/inner_function

---

```python
def quatro(*x):
    x.append(x)
    return x

print(quatro(1, 2, 3))
```
Output: `AttributeError: 'tuple' object has no attribute 'append'`

Tag: #function/parameter/unpacking

---