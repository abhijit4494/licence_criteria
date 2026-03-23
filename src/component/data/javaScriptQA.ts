export const javaScriptQA = [
     {
    keywords: ["abhay"],
    answer: `JavaScript is a high-level, interpreted programming language used to make web pages interactive. It runs in the browser and also on the server using Node.js. Modern JavaScript follows ECMAScript standards like ES6, ES7, ES8 etc.`,
  },
  {
    keywords: ["javascript", "js"],
    answer: `JavaScript is a high-level, interpreted programming language used to make web pages interactive. It runs in the browser and also on the server using Node.js. Modern JavaScript follows ECMAScript standards like ES6, ES7, ES8 etc.`,
  },
  {
    keywords: ["es5", "es6"],
    answer: `ES5 is the older version of JavaScript released in 2009, which uses var, prototype-based inheritance, and callback-based async code. ES6, released in 2015, introduced modern features like let and const for block scoping, arrow functions, classes, destructuring, template literals, spread operator, modules, and better async handling. ES6 makes JavaScript more readable, maintainable, and suitable for large-scale applications.`,
  },
  {
    keywords: ["var", "let", "const"],
    answer: `var works inside the whole function and you can declare it again and change it, so it can create problems. let and const work only inside the block and are more safe. let is used when the value will change, and const is used when the value should not change. In modern JavaScript, we avoid var and mostly use const.`,
  },
  {
    keywords: ["Prototype"],
    answer: `In JavaScript, every object has a hidden property called prototype. Prototype allows us to share properties and methods between objects. Instead of creating the same function again and again for every object, we can put that function inside the prototype. All objects created from that constructor can use the same method. This helps to save memory and makes the code reusable. Example: If we create many users, we can keep common methods like login(), logout(), or displayName() in the prototype so all users can use them.`,
  },
  {
    keywords: ["event"],
    answer: `JavaScript is single-threaded, so it can execute only one task at a time using the call stack. When we use asynchronous operations like promises, timers, or events, their callbacks are not executed immediately. Instead, they wait in queues. The Event Loop continuously checks if the call stack is empty, and when it is, it first executes all promise-related tasks from the microtask queue, and then executes other tasks like setTimeout or events from the callback queue. This is how JavaScript handles asynchronous code without blocking. The microtask queue runs first because it contains high-priority tasks (like Promises) that must finish before JavaScript handles other tasks such as timers or events.`,
  },
  {
    keywords: ["shallow", "deep", "copy"],
    answer: `In JavaScript, copying an object can be done in two ways: shallow copy and deep copy. Shallow Copy: In shallow copy, only the first level of the object is copied. If the object has nested objects, they still share the same reference. So if you change the nested object in the copied version, it will also change in the original object. Shallow copy can be created using the spread operator (...) or Object.assign(). Deep Copy: In deep copy, a completely new object is created including all nested objects. Every level is copied separately, so the new object does not share references with the original. If you change something in the copied object, the original object will not be affected. Deep copy can be created using JSON.parse(JSON.stringify(obj)), structuredClone(), or libraries like Lodash. In short: Shallow copy shares nested references. Deep copy creates fully independent objects.`,
  },
  {
    keywords: ["async", "await"],
    answer: `async/await is a modern JavaScript feature used to handle asynchronous operations. The async keyword makes a function return a promise, and await waits for that promise to resolve. It makes asynchronous code look synchronous, improves readability, avoids callback hell, and supports proper error handling using try-catch. In simple words: async makes a function return a Promise. await waits for the Promise result before moving to the next line.`,
  },
  {
    keywords: ["promise handling", "handling"],
    answer: `A Promise is used to handle asynchronous operations like API calls. A Promise has three states: Pending – operation is in progress. Fulfilled – operation completed successfully. Rejected – operation failed. We handle promises using .then() for success and .catch() for errors. Example: fetch("api/data").then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err)); In simple words: Promise handles future results of asynchronous operations.`,
  },
  {
    keywords: ["promise"],
    answer: `A Promise in JavaScript is an object that handles asynchronous operations and gives a result in the future, either success or failure. A Promise has three states: 1. Pending - the operation is still in progress. 2. Fulfilled - the operation completed successfully. 3. Rejected - the operation failed. We use .then() to handle the successful result and .catch() to handle errors. Promises help avoid callback hell and make asynchronous code easier to read and manage.`,
  },
  {
    keywords: ["callback"],
    answer: `A callback function is a function that is passed as an argument to another function. The callback function is executed after the main function finishes its task. Callbacks are commonly used in asynchronous operations such as API calls, timers (setTimeout, setInterval), and event handling. They help control the order of execution in JavaScript. However, using too many nested callbacks can make the code complex and difficult to read, which is called callback hell. To solve this problem, developers often use Promises or async/await. In simple words: A callback is a function that is passed to another function and executed later.`,
  },
  {
    keywords: ["hell"],
    answer: `Callback hell means too many callbacks inside callbacks, which makes code confusing and hard to manage. This makes the code difficult to read, understand, and maintain. The code structure looks like a pyramid or deeply nested blocks.`,
  },
  {
    keywords: ["closure"],
    answer: `Closure means a function keeps a connection to the variables around it. You create a function inside another function. The inner function uses some variable from the outer function. JavaScript does not delete those variables. So the inner function can still use them later. function outer() { let count = 0; return function inner() { count++; console.log(count); }; } const counter = outer(); counter(); // 1 counter(); // 2`,
  },
  {
    keywords: ["spread", "rest", "operator"],
    answer: `Both spread and rest operators use the same syntax (...), but their purpose and usage are different. Spread Operator (...): Expands / unpacks values. Used on the right-hand side. Converts an array or object into individual elements. Used for: Copying arrays/objects, Merging arrays/objects, Passing arguments to functions. Rest Operator (...): Collects / packs values. Used on the left-hand side. Combines multiple values into a single array or object. Used for: Function parameters, Destructuring arrays/objects.`,
  },
  {
    keywords: ["currying"],
    answer: `Currying is a functional programming technique where a function with multiple parameters is converted into a sequence of functions, each taking a single parameter. It allows partial application of arguments, improves reusability, and helps write cleaner and more maintainable code.`,
  },
  {
    keywords: ["hashmap"],
    answer: `A HashMap is a data structure used to store data in key-value pairs. Each key is unique and is used to quickly access its corresponding value. In JavaScript, we can use Map or Object to implement a HashMap. Why we use HashMap: It provides very fast data access, insertion, and deletion (average O(1) time complexity). Example using Map: const map = new Map(); map.set("name", "Chaitanya"); map.set("age", 25); console.log(map.get("name")); // Chaitanya. In simple words: HashMap stores data in key-value pairs and allows fast lookup using the key.`,
  },
  {
    keywords: ["max subarray sum"],
    answer: `Max Subarray Sum means finding the largest possible sum of a continuous subarray inside an array. A common solution is Kadane's Algorithm, which keeps track of the current sum and the maximum sum while iterating through the array. It compares whether to continue the current subarray or start a new one. Example: function maxSubArray(arr){ let max = arr[0]; let current = arr[0]; for(let i = 1; i < arr.length; i++){ current = Math.max(arr[i], current + arr[i]); max = Math.max(max, current); } return max; } In simple words: Find the largest sum from consecutive numbers in an array.`,
  },
  {
    keywords: ["lexical", "Temporal Dead Zone", "tdz"],
    answer: `Lexical scope means variable access is decided by where the variable is written in the code. JavaScript determines scope during code creation, not at runtime. Temporal Dead Zone refers to the time between variable hoisting and its declaration when accessing let or const variables throws an error. TDZ exists to prevent bugs and enforce safe variable usage.`,
  },
  {
    keywords: ["global execution context", "execution context"],
    answer: `When JavaScript runs code, it creates a Global Execution Context. Execution happens in two phases: 1 Creation phase – memory is allocated for variables and functions. 2 Execution phase – code runs line by line. Call Stack: Stores execution contexts and follows LIFO (Last In First Out). Microtask Queue: Contains high priority tasks like Promise.then() and Promise.catch(). Macrotask Queue (Callback Queue): Contains tasks like setTimeout, setInterval, and DOM events. Event Loop: It checks the call stack and moves tasks from microtask queue first, then macrotask queue. In simple words: JavaScript executes code using call stack, microtasks, and macrotasks managed by the event loop.`,
  },
  {
    keywords: ["Execution Context", "Execution"],
    answer: `Execution Context is like the environment where JavaScript code lives and runs. You can think of it as a box that contains the variables, functions, and the value of this for the current piece of code. It has two phases: first, it prepares memory for variables (Hoisting), and second, it executes the code line-by-line.`,
  },
  {
    keywords: ["Hoisting"],
    answer: `Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope before the code is executed. This happens during the creation phase of the execution context. Because of hoisting, we can use functions or variables before they are declared in the code. However, only declarations are hoisted, not the initial values. Variables declared with var are hoisted and initialized with undefined, while let and const are also hoisted but cannot be accessed before declaration (this is called the temporal dead zone). In simple words: Hoisting means JavaScript moves declarations of variables and functions to the top of their scope before execution.`,
  },
  {
    keywords: ["setTimeout", "setInterval"],
    answer: `setTimeout is used to execute a function once after a specified delay (in milliseconds). It runs code one time only after some time. setTimeout(() => { console.log("Hello"); }, 2000); setInterval is used to execute a function repeatedly after a specified interval (in milliseconds). It runs code again and again after some time. setInterval(() => { console.log("Hello"); }, 2000);`,
  },
  {
    keywords: ["map", "filter", "reduce"],
    answer: `map() is used to create a new array by transforming each element of an existing array. filter() is used to select elements that match a condition. reduce() is used to reduce an array into a single value. forEach() is an array method used to iterate over each element of an array and perform some operation. It takes a callback function with parameters like element, index, and array. It does not return a new array and always returns undefined.`,
  },
  {
    keywords: ["Polyfill"],
    answer: `Polyfill means we create our own function if that function is not available in browser. For example, if map or filter is not supported, we can write our own logic. If methods like map(), filter(), or Promise are not supported in an older browser, we can create our own logic to achieve the same functionality. Polyfills help maintain compatibility across different browsers.`,
  },
  {
    keywords: ["selector"],
    answer: `Selector in JavaScript help to get specific element form DOM based on ids, class names, tag names. Dom Selector Method: getElementByID() - select a single element. getElementByClassName() - select multiple elements that share the same classname. getElementByTagName() - select multiple elements based on their tag name. queryselector() - Selects the first HTML element that matches a CSS selector. queryselectorAll() - Selects all HTML elements that match a CSS selector.`,
  },
  {
    keywords: ["Destructuring"],
    answer: `Destructuring is a way to take values from array or object and store them into variables easily. Go inside object and take value - Normal way. Take value directly in one line - Destructuring way.`,
  },
  {
    keywords: ["call", "apply", "blind"],
    answer: `| call() | apply() | bind() | | --- | --- | --- | | It is a method to call a function. | It is a method to call a function. | It is a method to create a new function. | | Calls the function immediately. | Calls the function immediately. | Does not call immediately. | | Arguments are passed one by one. | Arguments are passed as an array. | Arguments can be passed later. | | Changes the this value of the function. | Changes the this value of the function. | Binds the this value permanently. | | Returns the function result. | Returns the function result. | Returns a new function. |`,
  },
  {
    keywords: ["array"],
    answer: `Arrays are special objects used to store collections of data. push(): Adds an element to the end. pop(): Removes the last element. unshift(): Adds an element to the start. shift(): Removes the first element. map(): Creates a new array by transforming every element. filter(): Creates a new array with elements that pass a condition. reduce(): Combines all elements into a single value. forEach(): Runs a function for each element. includes(): Returns true or false if an element exists. find(): Returns the first element that matches a condition. slice(): Extracts a section. splice(): Modifies the original array to add or remove elements.`,
  },
  {
    keywords: ["loop"],
    answer: `A loop is a programming way to run a piece of code repeatedly until a certain condition is met. for - Used when the number of iterations is known. while - Executes code while the condition is true. do...while - Executes the code at least once, even if the condition is false. for...of - Used to iterate over iterable objects like arrays and strings. for...in - Used to iterate over object properties.`,
  },
  {
    keywords: ["javascript conditions", "if", "if else", "else if", "switch", "ternary"],
    answer: `Conditions in JavaScript are used to make decisions and execute different blocks of code. if Condition - The if statement executes a block of code only when the condition is true. if…else Condition - The if…else statement executes one block when the condition is true and another block when it is false. else if Condition - The else if statement is used to check multiple conditions sequentially. switch Statement - The switch statement is used to execute different code blocks based on the value of an expression. Ternary Operator - The ternary operator is a shorthand for if…else used for simple conditions.`,
  },
];
