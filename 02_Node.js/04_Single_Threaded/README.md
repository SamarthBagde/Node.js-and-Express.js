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

Eventloop diagram:
![alt text](image-1.png)

Following are the of phases in Eventloop:

![alt text](image.png)