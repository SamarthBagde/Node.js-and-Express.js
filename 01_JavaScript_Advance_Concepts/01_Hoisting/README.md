# Hoisting

Hoisting (in JavaScript) is the behavior where variable and function declarations are moved to the top of their scope during the compilation phase.

Think of it like JS saying: <b>“Let me first scan your code and note what variables/functions exist.”</b>
<hr>

## Variable Hoisting

a) var : 

Hoisted and initialized as `undefined`.

Example : 

```
console.log(a); // undefined
var a = 10;
```

b) let and const :

Hoisted but not initialized

Accessing them before actual declaration is not possible. It will give `Reference Error`.

Example : 

```
console.log(b); // ❌ ReferenceError
let b = 20;
```
<hr>

## Function Hoisting

a) Function Declarations : 

Hoisted and initialized with the acutal function defination.

Example :

```
hello(); // ✅ works 

function hello() {
  console.log("Hello");
}
```

b) Function Expressions : 

Only varible hoisted and not initialized with function body.

Example : 

```
sayHi(); // ❌ TypeError

var sayHi = function () {
  console.log("Hi");
};
```

- sayHi is hoisted as undefined
- Function body is assigned later

c) Arrow Functions : 

Only varible hoisted and not initialized with function body.

Example : 

```
greet(); // ❌ ReferenceError

const greet = () => {
  console.log("Hey");
};
```