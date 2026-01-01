# Closure

A closure is created when a function remembers and can access variables from its outer (parent) function, even after the parent function has finished running.

Suppose we have an outer function and an inner (nested) function. The inner function remembers the outer function’s variables even after the outer function has finished executing.

Example :

```js
function createPassword() {
  let password = "secret";

  return function check(input) {
    return input === password;
  };
}

const checkPassword = createPassword();
console.log(checkPassword("secret")); // true
```

## Why Closures Are Useful

- Data Privacy (Private Variables)
- Remembering State

## Note

a) `let` and `const` create a new closure for each loop iteration, while var does not.

Example :

```js
for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// Output :
// 1
// 2
// 3
```

```js
for (var i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// Output :

// 4
// 4
// 4
```

b) <b>Closures Remember References, Not Copies.</b> If variable value changes, the inner function sees the updated value.

c) <b>Closures Use More Memory.</b> Closures keep variables alive, so unused closures can cause memory leaks if not handled properly.

d) A closure is garbage collected only when no references to the inner function exist.
