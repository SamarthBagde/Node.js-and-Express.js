A Web Worker is:

- A separate background thread

- Runs JavaScript in parallel to the main thread

- Does not block UI

- Communicates with the main thread via message passing

Web Workers are a simple means for web content to run scripts in background threads. The worker thread can perform tasks without interfering with the user interface. In addition, they can make network requests using the fetch() or XMLHttpRequest APIs.

A worker is an object created using a constructor (e.g., Worker()) that runs a named JavaScript file — this file contains the code that will run in the worker thread

### Dedicated Worker

A Dedicated Worker is a background JavaScript thread created by one web page and it is Private to that page and used for CPU-intensive tasks without blocking UI.

“Dedicated” means Only the page that created it can communicate with it.

### Shared Worker

A Shared Worker is:

- A background JavaScript thread

- Shared across multiple pages / tabs / iframes

- Must be from the same origin

- Used when multiple browser contexts need the same worker

Key difference:

Dedicated Worker → one page
Shared Worker → many pages

