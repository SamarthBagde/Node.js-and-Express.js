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
Used as:
fs.createReadStream() -> Reads a file chunk by chunk from disk.
HTTP request body -> Reads incoming data sent by the client to the server.
Process.stdin -> Reads user input entered via keyboard/terminal.

Examples: 
```
const fs = require('fs');

const readStream = fs.createReadStream('input.txt', {
  encoding: 'utf8'
});

readStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

readStream.on('end', () => {
  console.log('Finished reading file');
});

```
2. Writable stream: used to write data. 
Used as: 
fs.createWriteStream() -> Writes data incrementally to a file.
HTTP response -> Sends data from server to client as a stream.
Process.stdout -> Writes output to the console.

examples:
```
const fs = require('fs');
const writeStream = fs.createWriteStream('output.txt');
writeStream.write('Hello ');
writeStream.write('Node.js Streams!');
writeStream.end();
```

3. Duplex stream: Can read & write simultaneously. E.g TCP and web sockets.

examples:
```
const { Duplex } = require('stream');
const duplexStream = new Duplex({
  read(size) {
    this.push('Hello from read side');
    this.push(null);
  },
  write(chunk, encoding, callback) {
    console.log('Writing:', chunk.toString());
    callback();
  }
});

duplexStream.write('Hello from write side');
duplexStream.pipe(process.stdout);
```

4. Transform stream: A special duplex stream that modifies data. Examples include compression and encryption.

examples:
```
const { Transform } = require('stream');

const upperCaseStream = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

process.stdin
  .pipe(upperCaseStream)
  .pipe(process.stdout);
```


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