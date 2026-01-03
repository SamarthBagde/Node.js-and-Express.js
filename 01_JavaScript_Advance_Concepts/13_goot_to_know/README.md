# 1. Memory Management

Memory management in JavaScript is the process by which the JavaScript engine allocates memory, uses it during program execution, and then frees it automatically when it is no longer needed.

## Stack Memory vs Heap Memory

### Stack Memory

- Stores primitive values (number, string, boolean, null, undefined, symbol, bigint)
- Stores execution contexts
- Fast access
- Memory is freed automatically when function execution ends


### Heap Memory

- Stores objects, arrays, functions
- Dynamic size
- Slower than stack
- Cleared by garbage collection


## Garbage Collection

Garbage Collection (GC) in JavaScript is an automatic memory management process where the JavaScript engine identifies memory that is no longer needed and frees it, preventing memory leaks and optimizing performance.

If no active reference points to an object from the roots (global scope, call stack, closures), the object becomes eligible for GC.

<b>Note : You cannot force GC, but you can break references so GC can clean memory.</b>

```js
obj = null;
arr.length = 0;
map.clear();
removeEventListener();
clearInterval();
```

Using the above pattern, memory becomes eligible for garbage collection (GC).

<hr>


# 2. Commonjs VS ES6

### CommonJS :

CommonJS is a module system originally designed for server-side JavaScript, mainly used in Node.js (especially older versions).

### ES6 Modules :

ES6 Modules are the official JavaScript standard module system, supported by:

- Modern browsers
- Node.js (with config)
- Bundlers (Webpack, Vite, Rollup)

They are statically analyzed and support tree-shaking.

| Feature         | CommonJS                 | ES6             |
| --------------- | ------------------------ | --------------- |
| Syntax          | require / module.exports | import / export |
| Loading         | Synchronous              | Asynchronous    |
| Analysis        | Runtime                  | Compile-time    |
| Tree shaking    | ❌                        | ✅               |
| Browser support | ❌                        | ✅               |
| Standard        | ❌                        | ✅               |

<hr>


# 3. Immediately Invoked Function Expression (IIFE)

An IIFE is a JavaScript function that is executed immediately after it is defined.

Example : 

```js
(function () {
  console.log("IIFE executed");
})();
```

or

```js
(() => {
  console.log("Arrow IIFE");
})();
```

<hr>

# 4. Slice VS Splice