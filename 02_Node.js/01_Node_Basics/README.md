# Node core fundamentals

Node.js is an open-source, cross-platform JavaScript runtime environment that allows you to run JavaScript outside the browser, mainly on the server side.

It is built on V8 JavaScript Engine and C/C++ libraries for system-level operations (file system, networking, etc.)

- V8 Engine -> Compiles JS to machine code.
- libuv -> Provides event loop, thred pool, etc.

## Node.js Architecture

Node.js architecture is fundamenatally based on a Single Threaded Loop Model, which is highly efficent for I/O intensive operations because it uses non-blocking I/O.

### Core Compenents

<b>a) V8 Engine : </b>

- This is the heart of Node.js.
- It executes the JavaScript code out side the browser
- V8 is written in c++

<b>b) libuv : </b>

- `libuv` is a C library that provides the Event Loop and manages the Thread Pool.

<b>c) Event Loop : </b>

- The primay sin


<b>d) Event Queue : </b>

- Event Queue is where completed I/O operations and their associated callback functions are placed, watting for event loop to execute them.
- There are 4 thread in thread pool by default and Max threads can be upto 128

<b>e) Thread pool : </b>


- A fixed pool of worker  \threads used to execute resource intesive or blocking operations. 

## Work Flow of Node.js

### 1. Client Request : 

- Client sends a request to Node.js server.

### 2. Serever And Event Queue :

- Server recives the request and put it in to the Event Queue.

### 3. Event Loop Processing :

- The Event llop checks the event queue. It picks up requests one by one for procssing.
    - Non-blocking requests are processed by event loop directly .
    - Blocking requests (like db queries or file system operations) are send to thread pool and event loop continue to process other request in the queue.


### 4. Thread pool Executoin :

- Thread from thread pool executes the blocking operations.

### 5. Call back and Response : 

- Once the operations in the thread pool is completed, the associated call back is placed in Event queue and the event loop execute it and sends response back to the client.

<!-- put diagrams if possibles -->

## Execution order in Node js:

Call Stack → Microtask Queues → Event Loop Phases (multiple queues)

- All synchronous JavaScript code and Function calls go into the call stack.

Microtask Queues run after the call stack is empty and before the event loop moves to any phase. 

There are two types of microtask queues:
- process.nextTick(): process.nextTick() callbacks go here
- promise microtask queue: Promise.then(), catch, finally and queueMicrotask() go here.



## Server creation in Node.js

```js
import http from 'http';

const server = http.createServer((req, res) => {

 if(req.url === '/'){
    res.send("Hello user");
 }else if(req,url === '/about'){
    res.send("About Page");
 }

});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

## Note :

- We don't use pure Node.js directly for server creation. Because it's too low-level and harder to scale.

- We need to configure lot of thing like
    - manually parse request URLs
    - manually read data from body 
    - build routing logic from scratch

- So insted of Node.js we use Express.js for server creation.
