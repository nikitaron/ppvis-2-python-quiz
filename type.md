```python
from typing import Set

a: Set[int] = {1, 4, 5}

print(isinstance(a, Set[int]))
```
Output: `TypeError: Subscripted generics cannot be used with class and instance checks`

Tag: #type/annotation, #built-in/isinstance

---

```python
import math

x = math.pow(2, 3)
y = pow(2, 3)
print(type(x) == type(y))
```
Output: `False`

Tag: #type/compare

---