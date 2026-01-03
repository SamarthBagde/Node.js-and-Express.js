# Copy types

There are ways to copy data :
- Shallow copy
- Deep copy

## Shallow Copy 

A shallow copy creates a new object, but it only copies the top-level values. If the original object contains nested objects, the copy will still "point" to the same memory location as the original for those nested parts.

It does not copy recursively nested object or array.

nested Objects or arrays are refered to original one.

Methods :

1. `Object.assign()` : For Object 

    Example : 
    ```js
    const obj = {
    name: "sam",
    address: {
        city: "pune",
        state: "MH",
    },
    };

    let c1 = Object.assign({}, obj); // shallow copy is created

    c1.address.city = "nsnded" // this make chnage in original object (obj) also

    console.log(c1);
    console.log(obj);
    ```

2. Spread operator `(...)` :  For Object and array

    Example : 

    ```js
    const arr = [1, 2, [3, 4]];

    const c1 = [...arr];

    c1[2][0] = 7;

    console.log(c1);
    console.log(arr);
    ```

3. Array.prototype.slice() : For array

    Example : 
    ```js
    const arr = [1, 2, [3, 4]];

    const c1 = arr.slice(0, 3);

    c1[2][0] = 7;

    console.log(c1);
    console.log(arr);
    ```


## Deep Copy

Deep copy creates completely new object or array including nested objects or arrays by recursively copying all elements.

Methods :

1. `structuredClone()` :

    Example : 
    ```js
    const original = { name: "Alice", address: { city: "NY" } };
    const deepCopy = structuredClone(original);

    deepCopy.address.city = "LA"; 

    console.log(original.address.city); // "NY" (Safe!)
    ```

2. `JSON.parse(JSON.stringify())` :

    Example :
    ```js
    const original = { name: "Alice", address: { city: "NY" } };
    const deepCopy = JSON.parse(JSON.stringify(original));

    deepCopy.address.city = "LA"; 

    console.log(original.address.city); // "NY" (Safe!)
    ```

3. Recursive Deep Copy

    Example : 

    ```js
    function deepCopyArray(arr) {
    return arr.map(item =>
        Array.isArray(item) ? deepCopyArray(item) : item
    );
    }

    const deepCopy = deepCopyArray(arr);

    deepCopy[3][1][0] = 999;

    console.log(arr);
    console.log(deepCopy);
    ```