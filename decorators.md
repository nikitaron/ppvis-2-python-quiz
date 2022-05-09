```python
def double_print(func):
    def wrapper():
        func()
        func()
    return wrapper

@double_print
def greeting(name):
    print(f'Hello {name}')
    
greeting("Vladimir")
```
Output: TypeError: wrapper() takes 0 positional arguments but 1 was given

Tag: #decorators

```python
def double_print(func):
    def wrapper(*args, **kwargs):
        func(*args, **kwargs)
        func(*args, **kwargs)
    return wrapper

@double_print
def greeting(name):
    print(f'Hello {name}')
    
greeting("Vladimir")
```
Output: Hello Vladimir
        Hello Vladimir

Tag: #decorators