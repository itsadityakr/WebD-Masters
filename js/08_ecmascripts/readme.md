### **JavaScript and ECMAScript**

### What is ECMAScript (ES)?
- ECMAScript is the **standard** upon which JavaScript is based.
- Created by **Ecma International** to standardize JavaScript.
- Each major update introduces new features to JavaScript.

---

# **Key ECMAScript Updates from 2015 to 2024**
### **ECMAScript 2015 (ES6)**
The most significant update in JavaScript history, introducing features like:
1. **`let` and `const`**
   - Block-scoped variable declarations.
   ```javascript
   let name = "John";
   const PI = 3.14;
   ```

2. **Template Literals**
   - String interpolation and multi-line strings.
   ```javascript
   const user = "Alice";
   console.log(`Welcome, ${user}!`);
   ```

3. **Arrow Functions**
   - Shorter function syntax.
   ```javascript
   const add = (a, b) => a + b;
   ```

4. **Classes**
   - Cleaner syntax for object-oriented programming.
   ```javascript
   class Animal {
     constructor(name) {
       this.name = name;
     }
     speak() {
       console.log(`${this.name} makes a sound.`);
     }
   }
   ```

5. **Promises**
   - Handling asynchronous operations.
   ```javascript
   const fetchData = new Promise((resolve, reject) => {
     resolve("Data loaded!");
   });
   fetchData.then(console.log);
   ```

6. **Modules**
   - Native support for importing/exporting files.
   ```javascript
   // Export
   export const name = "John";
   // Import
   import { name } from './file.js';
   ```

7. **Default Parameters**
   - Assign default values to function arguments.
   ```javascript
   function greet(name = "Guest") {
     return `Hello, ${name}`;
   }
   ```

8. **Destructuring**
   - Extract values from arrays and objects.
   ```javascript
   const [a, b] = [1, 2];
   const { name, age } = { name: "Alice", age: 25 };
   ```

9. **Spread and Rest Operators**
   - Expand or collect array elements.
   ```javascript
   const arr = [1, 2, 3];
   const newArr = [...arr, 4];
   ```

10. **`Map` and `Set`**
    - New data structures for unique values and key-value pairs.
    ```javascript
    const set = new Set([1, 2, 2]);
    const map = new Map([["name", "Alice"]]);
    ```

---

### **ECMAScript 2016 (ES7)**
1. **Array Includes**
   - Check if an element exists in an array.
   ```javascript
   [1, 2, 3].includes(2); // true
   ```

2. **Exponentiation Operator**
   - Simplified exponentiation syntax.
   ```javascript
   console.log(2 ** 3); // 8
   ```

---

### **ECMAScript 2017 (ES8)**
1. **`async/await`**
   - Easier syntax for asynchronous programming.
   ```javascript
   async function fetchData() {
     const data = await fetch("https://api.example.com");
     console.log(data);
   }
   ```

2. **Object Entries and Values**
   - Retrieve object keys/values as arrays.
   ```javascript
   const obj = { a: 1, b: 2 };
   console.log(Object.entries(obj)); // [['a', 1], ['b', 2]]
   console.log(Object.values(obj)); // [1, 2]
   ```

---

### **ECMAScript 2018 (ES9)**
1. **Rest/Spread for Objects**
   ```javascript
   const obj = { a: 1, b: 2 };
   const newObj = { ...obj, c: 3 };
   ```

2. **Asynchronous Iteration**
   ```javascript
   for await (const value of asyncIterable) {
     console.log(value);
   }
   ```

---

### **ECMAScript 2019 (ES10)**
1. **Flat and FlatMap**
   - Flatten nested arrays.
   ```javascript
   [1, [2, 3]].flat(); // [1, 2, 3]
   ```

2. **Optional Catch Binding**
   - Catch errors without binding.
   ```javascript
   try {
     throw new Error();
   } catch {
     console.log("Error caught");
   }
   ```

---

### **ECMAScript 2020 (ES11)**
1. **Optional Chaining**
   - Safely access deeply nested properties.
   ```javascript
   const obj = { a: { b: 2 } };
   console.log(obj?.a?.b); // 2
   ```

2. **Nullish Coalescing**
   - Use default values only for `null` or `undefined`.
   ```javascript
   console.log(null ?? "Default"); // "Default"
   ```

---

### **ECMAScript 2021 (ES12)**
1. **Logical Assignment**
   ```javascript
   let a = null;
   a ||= "default";
   ```

2. **String Replace All**
   ```javascript
   console.log("a-b-c".replaceAll("-", " ")); // "a b c"
   ```

---

### **ECMAScript 2022 (ES13)**
1. **`at()` Method for Arrays**
   ```javascript
   console.log([1, 2, 3].at(-1)); // 3
   ```

2. **Top-Level Await**
   ```javascript
   const data = await fetch("https://api.example.com");
   ```

---

### **ECMAScript 2023 (ES14)**
1. **Array Find Last**
   ```javascript
   const nums = [1, 2, 3, 4];
   console.log(nums.findLast((n) => n % 2 === 0)); // 4
   ```

2. **Symbol `toPrimitive` for Custom Conversion**
   ```javascript
   const obj = {
     [Symbol.toPrimitive]() {
       return 42;
     },
   };
   console.log(+obj); // 42
   ```

---

### **ECMAScript 2024**
1. **Records and Tuples (Draft Stage)**
   - Immutable data structures similar to objects and arrays.
   ```javascript
   const rec = #{ a: 1 };
   const tup = #[1, 2, 3];
   ```

2. **Pipeline Operator (Draft)**
   - Chain functions with cleaner syntax.
   ```javascript
   const result = value |> double |> increment;
   ```

---