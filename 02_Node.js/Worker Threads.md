### Worker Threads

Node js runs on single main thread which is good for I/O bound taks but not for CPU heavy tasks.

Example of CPU-bound work are Image processing, PDF generation, Encryption, Data analytics and Machine learning.

These block the event loop if run on main thread.

Worker Threads allow you to run JavaScript in parallel threads inside the same Node.js process.