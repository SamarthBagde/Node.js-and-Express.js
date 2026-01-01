# Temporal Dead Zone (TDZ)

It is the time between the hoisting of variable and it's declaration where variable exists but cannot be accessed.

It is applied to variable declared using `let` or `const`.

Example : 

```js
console.log(x); // ❌ ReferenceError (TDZ)
let x = 5;
```

Here `x` is in TDZ until `let x = 5` is executed.