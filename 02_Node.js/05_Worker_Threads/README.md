# Worker Threads

Worker threads allow you to run JavaScript code in parallel on multiple threads, making it suitable for CPU-intensive tasks.

Unlike the thread pool ( used internally by libuv ), worker threads are created by you to run CPU heavy tasks.

## Why Worker Threads are needed

- Node js runs on single main thread by default, which is good for I/O bound taks but not for CPU heavy tasks.

- CPU-heavy tasks block the event loop. Example Image processing, PDF generation, Encryption, Data analytics and Machine learning.

- So worker Threads allow you to run JavaScript in parallel threads inside the same Node.js process. 

- Improve performance for CPU-bound work.

## How Worker Threads Work in Node.js

Worker threads allow Node.js to execute JavaScript in parallel by using multiple OS-level threads, while the main thread keeps handling I/O and requests.

Main thread offloads heavy computation to a worker thread, which runs independently and sends the result back.

### Step-by-Step Working

1. Main Thread Starts
2. Worker Thread is Created
3. Code Runs in Parallel
4. Main Thread Receives Result
5. Worker Terminates


Example :

```js
// main.js

import { Worker } from 'worker_threads';

const worker = new Worker('./worker.js', {
  workerData: 10
});

worker.on('message', (result) => {
  console.log('Result from worker:', result);
});

worker.on('error', console.error);
worker.on('exit', code => console.log('Worker exited', code));
```

```js
// worker.js

import { parentPort, workerData } from 'worker_threads';

function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}

const result = factorial(workerData);

parentPort.postMessage(result);
```