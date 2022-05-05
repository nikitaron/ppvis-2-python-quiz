```python
from typing import Set

a: Set[int] = {1, 4, 5}

print(isinstance(a, Set[int]))
```
Output: `TypeError: Subscripted generics cannot be used with class and instance checks`

Tag: #type/annotation, #built-in/isinstance

---