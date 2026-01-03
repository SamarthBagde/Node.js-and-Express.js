# Shadowing

When variable or function in a inner scope has the same name as one in outer scope. The inner one hide (shadows) the outer one inside the block/function.

### 1. Varibale Shadowing

Example :

```js
let x = 10;

{
  let x = 20;   // shadows outer x
  console.log(x); // 20
}

console.log(x); // 10
```

Illegal Shadowing (let → var)

```js
let a = 5;

{
  var a = 10; // ❌ SyntaxError
}
```
Because `var` is function-scoped, not block-scoped, it tries to redeclare a in the same scope where `let a `already exists, which is illegal.

So this code is actually treated like this by JavaScript:
```js
let a = 5;
var a = 10; // ❌ same scope → redeclaration
```


### 2. Function Shadowing

Example :

```js
let name = "Global";

function greet() {
  let name = "Local";
  console.log(name);
}

greet();        // Local
console.log(name); // Global
```

<hr>

### Shadowing + TDZ (Tricky 🔥)

```js
let a = 10;

{
  console.log(a); // ❌ ReferenceError
  let a = 20;
}
```

- Inner a exists in Temporal Dead Zone
- Outer a is NOT accessible