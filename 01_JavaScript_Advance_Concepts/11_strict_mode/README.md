# Strict Mode

It is a specila mode in JavaScript that makes your code safer, cleaner, and les error-prone by changing how JS engine behave

It prevent slient error and force developer to write safe and optimizec code

Example :

```js
"use strict"
x = 10;
```

This gives error : x is not defined

without strict mode it sliently creates global variable.

## What chnages in `strict mode`

- You cannot use undeclared vaiables.
- `this` inside normal function become `undefined`.
- Duplicate function parameters are not allowed.
- Deleting variable, function or argumentis not allowed.
