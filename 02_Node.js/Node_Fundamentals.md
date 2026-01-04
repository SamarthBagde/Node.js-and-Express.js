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


### Single Threaded architecure in node js

Node.js has a single-threaded model. This means it uses a single thread to handle multiple tasks. To achieve this, Node.js uses an event-driven, non-blocking I/O model.

## The Event-driven and non blocking I/O model:

The core of Node.js's single-threaded architecture is the event loop. The event loop continuously cycles through a series of phases, executing callbacks and handling events. 

- Event Queue: Incoming requests are placed in event queue. There are multiple queues. They are conceptually grouped and known as macro task queues.

- Event loop: Picks up the request from the queue and processes them.

- callbacks: For each request,node js executes the associated the callback function, if the call back function involves a blocking operation like file systems, crypto, dns lookup, it delegates them to the thread pool.

- Thread pool: Node js uses a thread pool which is amnaged by the libuv library to handle the non blocking operations, once completed, the results are placed back into the evemt queue for event loop to process it.

Priority of macro task queue: 

1. Timers Queue - setTimeout
2. Pending Callbacks Queue 
3. Poll Queue - file system callbacks, network I/O callbacks, incoming http requests
4. Check Queue - setImmediate
5. Close Callbacks Queue - socket close

- After every macro phase, Node.js executes process.nextTick queue and Promise microtask queue

### Common Js and ES modules

CommonJS (CJS): Default module system in Node.js (older & still widely used). 
Uses require() and module.exports.
Synchronous loading (designed for server).

ES Modules (ESM): Modern JavaScript standard
Uses import / export
Asynchronous & statically analyzed

- Node uses CommonJS by default.

To enable ES Modules:
```
{
  "type": "module"
}
```

or use .mjs extension.

### require() vs import

require(): 
- Function call
- Can be used anywhere
- Dynamic imports possible

import:
- Keyword
- Must be at top-level
- Static analysis

### package.json

It defines:
1. Project metadata
2. Dependencies
3. Scripts
4. Entry points

package-lock.json is Auto-generated file that Locks exact versions of dependencies and Ensures same install across machines.

### npm vs yarn vs pnpm

npm: Default Node package manager. Ir comes with Node.js

yarn: Created by Facebook, Faster installs and Deterministic dependency resolution.

pnpm: Uses content-addressable storage, Saves disk space and very fast.

### Streams and Buffers in Node js

A stream is a way to process data piece-by-piece (chunks) instead of loading everything into memory at once.

```
Without streams:

const data = fs.readFileSync('bigfile.mp4'); // loads entire file into RAM 


With streams:

const stream = fs.createReadStream('bigfile.mp4'); // small chunks
```

There are 4 types of streams:

1. Readable stream: used to read data
Examples:
fs.createReadStream()
HTTP request body
Process.stdin
2. Writable stream: used to write data. 
Examples:
fs.createWriteStream()
HTTP response
Process.stdout

3. Duplex stream: Can read & write simultaneously. E.g TCP and web sockets.

4. Transform stream: A special duplex stream that modifies data. Examples include compression and encryption.

### Stream Piping and Backpressure: 

Stream Piping: Connecting streams so output of one becomes input of another.

Backpressure: When a readable stream produces data faster than a writable stream can consume it

What Happens Without Backpressure:
- Memory builds up
- App crashes

Node handles it as follows:
1. .write() returns false
2. Readable stream pauses
3. Resumes on drain event

Buffer: Temporary memory storage of Fixed size that Stores entire data chunk

- Stream is basically flow of buffers. Stream internally uses buffers.

### Worker Threads

Node js runs on single main thread which is good for I/O bound taks but not for CPU heavy tasks.

Example of CPU-bound work are Image processing, PDF generation, Encryption, Data analytics and Machine learning.

These block the event loop if run on main thread.

Worker Threads allow you to run JavaScript in parallel threads inside the same Node.js process.

### Memory Leak in Node js

When memory is allocated but never released, it is a memory leak.

Examples are:

```
leakedData = [];


```






