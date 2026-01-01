# Scope

Scope defines where a variable, function, or object is accessible (visible) in your code.

`“from where can I use this variable?”`

<hr>

## Types of Scope

a) Global Scope : 

- Accessible everywhere.
- Variables declared outside any function or block.

Example : 

```js
let x = 10;

function test() {
  console.log(x); // accessible
}

test();
console.log(x); // accessible
```

b) Function Scope : 

- Accessible only inside the function.
- Variables declared inside a function.

Example :

```js
function demo() {
  let a = 5;
  console.log(a);
}

demo();
console.log(a); // ❌ Error
```

c) Block Scope : 

-  Only accesible inside the block `{}`.

Example : 

```js
if (true) {
  let b = 20;
  const c = 30;
}

console.log(b); // ❌ Error
console.log(c); // ❌ Error
```

<hr>


### Note : 

- let and const are block scoped
- var is function scoped


<hr>

## Lexical Scope

Lexical scope (or static scope) means a variable's accessibility is determined by its physical location in the source code when it's written, not where it's called.

Inner functions can access variables of outer functions.

Example : 

```js
function outer() {
  let x = 10;

  function inner() {
    console.log(x); // access outer variable
  }

  inner();
}

outer();
```

<hr>

## Scope chain

the scope chain in JS is the mechanism uses to find variable when they needed.

In short, hierarchical lookup system for variables.

When JS tries to access a variable,

 - It first looks in the current functions scope,
 -  if not found it looks in the parent scope,
 -  even if not found there then it looks in parent's parent and so on up to the global scope until it found it.

If still not found then it gives `ReferenError`.


Example : 

```js
let globalVar = "I am global";

function outer() {
  let outerVar = "I am outer";

  function inner() {
    let innerVar = "I am inner";

    console.log(innerVar);   // ✅ Local scope
    console.log(outerVar);   // ✅ Parent scope
    console.log(globalVar);  // ✅ Global scope
    console.log(x);          // ❌ ReferenceError
  }

  inner();
}

outer();
```