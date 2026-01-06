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