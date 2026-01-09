### Node core fundamentals

Node.js is an open-source, cross-platform JavaScript runtime environment that allows you to run JavaScript outside the browser, mainly on the server side.

It is built on V8 JavaScript Engine and C/C++ libraries for system-level operations (file system, networking, etc.)

### Execution order in Node js:

Call Stack → Microtask Queues → Event Loop Phases (multiple queues)

- All synchronous JavaScript code and Function calls go into the call stack.

Microtask Queues run after the call stack is empty and before the event loop moves to any phase. 

There are two types of microtask queues:
- process.nextTick(): process.nextTick() callbacks go here
- promise microtask queue: Promise.then(), catch, finally and queueMicrotask() go here.

### Memory Leak in Node js

When memory is allocated but never released, it is a memory leak.

Examples are:

```
leakedData = [];


```






