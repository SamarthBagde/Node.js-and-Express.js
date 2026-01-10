Clustering is a Node.js technique that allows you to Run multiple Node.js processes (workers) to fully utilize all CPU cores of a machine.

Clustering lets Node.js scale horizontally on a single machine

Clustering Creates multiple Node.js processes

Each process:

- Has its own event loop

- Has its own memory

All processes Listen on the same port and are managed by a master (primary) process.
```

                          ┌────────────┐
                          │  Master    │
                          │  Process   │
                          └─────┬──────┘
                                │
                ┌───────────────┼────────────────┐
                │               │                │
            ┌──────────┐   ┌──────────┐    ┌──────────┐
            │ Worker 1 │   │ Worker 2 │    │ Worker 3 │
            │ (Node)   │   │ (Node)   │    │ (Node)   │
            └──────────┘   └──────────┘    └──────────┘

```

Each worker can handle requests in parallel

