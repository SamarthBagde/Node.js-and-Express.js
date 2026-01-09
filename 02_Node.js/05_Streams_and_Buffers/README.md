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