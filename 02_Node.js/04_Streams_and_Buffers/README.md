# Streams

A stream is a way to process data piece-by-piece (chunks) instead of loading everything into memory at once.

Process large data chunk - by - chunk

Example :

``` js
// Without streams:

const data = fs.readFileSync('bigfile.mp4'); // loads entire file into RAM 


// With streams:

const stream = fs.createReadStream('bigfile.mp4'); // small chunks
```

## Types :

### There are 4 types of streams

### 1. Readable stream: 

Used to read data

Examples:

    fs.createReadStream()
    HTTP request body
    Process.stdin

### 2. Writable stream: 

Used to write data. 

Examples:

    fs.createWriteStream()
    HTTP response
    Process.stdout

### 3. Duplex stream: 

Can read & write simultaneously. 
 
Example : TCP and web sockets.

### 4. Transform stream: 

A Transform stream is a type of Duplex stream in Node.js that can read data, modify (transform) it, and then write the transformed data.

 Example: compression and encryption.

## Stream Piping and Backpressure: 

### Stream Piping : 

Stream piping is a mechanism that allows the output of one stream to be passed directly as the input to another stream using the `.pipe()` method.

Syntax :

```js
readableStream.pipe(writableStream);
```

Example : 

File Copy using Pipe

```js
import fs from 'fs';

const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);
```

### Backpressure :

Backpressure happens when a readable stream produces data faster than a writable stream can consume it.

What Happens Without Backpressure:

- Memory builds up
- App crashes

Node handles it as follows :

- Node.js pauses the source stream when the destination is slow and resumes it when ready.

# Buffer

Temporary memory storage of Fixed size that Stores entire data chunk

- Stream is basically flow of buffers. Stream internally uses buffers.

## Why Buffer is needed

JavaScript was originally designed for text, not binary data.
Node.js introduced Buffer to work with :

- files
- network streams
- images
- videos
- TCP packets

Example :

```js
const buf = Buffer.from('Hello');

console.log(buf);              // <Buffer 48 65 6c 6c 6f>
console.log(buf.toString());   // Hello
```