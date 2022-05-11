```python
import threading

def run(message):
  print(message)

msg = "Hello, World"
th = threading.Thread(target=run, args=(msg))

th.start()
th.join()
```
Output: `TypeError: run() takes 1 positional argument but 12 were given`

Tag: #thread/parameter/args

---

```python
import threading

class A:
  def __init__(self, msg):
    self.msg = msg

  def say_hello(self):
    print(self.msg)

a = A('Hello, World')

th = threading.Thread(target=a.say_hello)

th.start()
th.join()
```
Output: `Hello, World`

Tag: #thread/parameter/target

---

```python
import multiprocessing

def fact(value, answer):
  if value == 0:
    answer["value"] = 1
  answer["value"] = 1
  for i in range(1, value + 1):
    answer["value"] *= i

answer = {
  "value": 0
}

th = multiprocessing.Process(target=fact, args=(5, answer))

th.start()
th.join()

print(answer["value"])
```
Output: `0`

Tag: #thread/parameter

---

```python
import threading

def fact(value, answer):
  if value == 0:
    answer["value"] = 1
  answer["value"] = 1
  for i in range(1, value + 1):
    answer["value"] *= i

answer = {
  "value": 0
}

th = threading.Thread(target=fact, args=(5, answer))

th.start()
th.join()

print(answer["value"])
```
Output: `120`

Tag: #process/parameter

---

