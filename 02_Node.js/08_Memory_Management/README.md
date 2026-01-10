# Memory Management in Node.js

Memory management is the process of allocating, using, and freeing memory efficiently so applications run fast and don’t leak memory.

### It is dicided into two layers

1. JS level memory
2. Node.js level memory

## 1. JS level memory

This is memory where your variables, objects, arrays, Closures, function are stored.

V8 engine manage this memory using 
- Heap -> used for allocating objects and arrays
- Stack -> used for functions call and premitive values
- Garbagde collector -> Automatically free memory that is no longer reachable.


## 2. Node.js level memory

This memory is managed by Node.js runtime, not by V8 engine.

It stores Buffer, Streams, File system data etc.

This memory is outside the JS heap and not managed by V8.


## Garbage Collection 

Garbage Collection (GC) is the automatic process by which JavaScript frees memory that is no longer needed, preventing memory leaks.

### Core Concept: Reachability

An object is kept in memory if it is reachable.

- Reachable from:
    
    - Global variables
    - Local variables in call stack
    - Closures
    - Active timers / event listeners

Unreachable → Eligible for GC

Example :

```js
let user = { name: 'Samarth' };
user = null; // object becomes unreachable → GC
```

### Garbage Collection Algorithm (V8)

Mark-and-Sweep

1. GC starts from root objects (global, stack)
2. Marks all reachable objects
3. Sweeps (deletes) unmarked objects


### Note

In JavaScript, memory is freed only when an object becomes unreachable (no references point to it).
You don’t delete memory directly — you remove references.

- Set Reference to `null` (Most Common)
    ```js
    let user = { name: 'Samarth' };
    user = null;   // object becomes unreachable → eligible for GC
    ```

- Set Reference to `undefined`
    ```js
    let data = { value: 100 };
    data = undefined;
    ```
- Remove Object Properties
    ```js
    let obj = { a: 1, b: 2 };
    delete obj.a;
    ```
- Remove References from Arrays

    ```js
    let arr = [{}, {}, {}];
    arr.length = 0; // all objects unreachable
    ```


## Common Causes of Memory Leaks

- Global variables
- Closures holding references
- Forgotten timers (setInterval)
- Unremoved event listeners
- Caching large objects