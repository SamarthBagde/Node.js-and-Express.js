# Web Worker

A Web Worker is a browser feature that allows JavaScript to run in a background thread, separate from the main UI thread.

## Why Web Workers are needed

- Browser JavaScript runs on single main thread
- Heavy computation blocks :
    - UI rendering
    - User interactions
- So Web Workers allows to run code in parallel

A Web Worker is:

- A separate background thread
- Runs JavaScript in parallel to the main thread
- Does not block UI
- Communicates with the main thread via message passing


## Dedicated Worker

A Dedicated Worker is a background JavaScript thread created by one web page and it is Private to that page and used for CPU-intensive tasks without blocking UI.

“Dedicated” means Only the page that created it can communicate with it.

## Shared Worker

A Shared Worker is:

- A background JavaScript thread

- Shared across multiple pages / tabs / iframes

- Must be from the same origin

- Used when multiple browser contexts need the same worker

Key difference:

Dedicated Worker → one page
Shared Worker → many pages

