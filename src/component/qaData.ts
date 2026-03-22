export const qaData = [
  {
    keywords: ["intro", "introduction"],
    answer: `Good Afternoon, and thank you for the opportunity.
My name is Chaitanya Avadhut, and I have around 3+ years of experience as a Frontend Developer, mainly working with React.js and TypeScript.
Currently, I’m working at Ciklum on the Hatch project, which is an educational platform used by US schools for student assessments and learning activities.
My main role was to migrate a legacy PHP-based system to a modern React architecture, where I worked on breaking large screens into reusable components, improving performance, and making the UI more maintainable.
In this project, I:
•	Implemented state management using Redux Toolkit for handling user data, sessions, and activity flows.
•	Integrated multiple REST APIs and handled error states, loaders, and edge cases.
•	Worked with Material UI and Tailwind CSS to build responsive dashboards for teachers and students.
•	Added role-based access control, where different features were shown for teachers, students, and admins.
•	Also wrote unit tests using Jest and React Testing Library for key components.
I also contributed to another Hatch project called WPS Ignite Table, where I developed interactive 2D educational games using Phaser.js and JavaScript.
Here I worked on:
•	Game logic like scoring, timers, animations, and sound effects.
•	Optimizing performance for tablets and touch devices.
•	Making the UI kid-friendly and intuitive.
Overall, I’m passionate about building clean, scalable, and user-friendly applications.
I enjoy understanding business requirements, converting them into technical solutions, and I’m now looking for an opportunity where I can take more ownership, work on challenging products, and grow as a frontend engineer.
`,
  },
  {
    keywords: ["hatch"],
    answer: `
Hatch is an educational platform used by US schools for managing student learning activities and assessments.
I worked as a Frontend Developer at Ciklum, where my main responsibility was migrating a legacy PHP system into a modern React and TypeScript-based application.
The application uses React with Redux Toolkit for state management, REST APIs for data, and Material UI for responsive design.
One major feature I worked on was the Activity Planning module. Teachers can create weekly plans by selecting date ranges, groups, and games. I handled the complete frontend logic including API integration, Redux state, validation, conditional rendering, and error handling.
One challenge was managing complex state across multiple filters, which I solved by structuring Redux slices properly and using reusable components.
This migration improved performance, maintainability, and overall user experience.
`,
  },
  {
    keywords: ["challenge", " project challenge"],
    answer: `
One challenge I faced in my project was performance issue when rendering large data in a list.
The UI was becoming slow because too many components were re-rendering.

I used React.memo to prevent unnecessary re-renders.
I optimized state management.
I used lazy loading where needed.
I checked performance using React DevTools.
`,
  },
  {
    keywords: ["javascript", "js"],
    answer: `JavaScript is a high-level, interpreted programming language used to make
     web pages interactive. It runs in the browser and also on the server using
      Node.js. Modern JavaScript follows ECMAScript standards like ES6, ES7, ES8 etc.
    `,
  },
  {
    keywords: ["es5", "es6"],
    answer: `
    ES5 is the older version of JavaScript released in 2009, which uses var, prototype-based inheritance, and callback-based async code. 
    ES6, released in 2015, introduced modern features like let and const for block scoping, arrow functions, classes, destructuring, template literals, spread operator, modules, and better async handling.
     ES6 makes JavaScript more readable, maintainable, and suitable for large-scale applications.
    `,
  },
  {
    keywords: ["Prototype"],
    answer: `In JavaScript, every object has a hidden property called prototype.
Prototype allows us to share properties and methods between objects.

Instead of creating the same function again and again for every object,
we can put that function inside the prototype.

All objects created from that constructor can use the same method.
This helps to save memory and makes the code reusable.

Example: If we create many users, we can keep common methods like login(),
logout(), or displayName() in the prototype so all users can use them.`,
  },

  {
    keywords: ["event"],
    answer: `JavaScript is single-threaded, so it can execute only one task at a time using the call stack. 
    When we use asynchronous operations like promises, timers, or events, their callbacks are not executed immediately.
   Instead, they wait in queues. The Event Loop continuously checks if the call stack is empty, and when it is, it first executes all promise-related tasks from the microtask queue, and then executes other tasks like setTimeout or events from the callback queue.
    This is how JavaScript handles asynchronous code without blocking.
The microtask queue runs first because it contains high-priority tasks (like Promises) that must finish before JavaScript handles other tasks such as timers or events.`,
  },
  {
    keywords: ["shallow", "deep", "copy"],
    answer: `
In JavaScript, copying an object can be done in two ways: shallow copy and deep copy.

Shallow Copy:
In shallow copy, only the first level of the object is copied.
If the object has nested objects, they still share the same reference.
So if you change the nested object in the copied version, it will also change in the original object.

Shallow copy can be created using the spread operator (...) or Object.assign().

Deep Copy:
In deep copy, a completely new object is created including all nested objects.
Every level is copied separately, so the new object does not share references with the original.

If you change something in the copied object, the original object will not be affected.
Deep copy can be created using JSON.parse(JSON.stringify(obj)), structuredClone(), or libraries like Lodash.

In short:
Shallow copy shares nested references.
Deep copy creates fully independent objects.
`,
  },
  {
    keywords: ["async", "await"],
    answer: `async/await is a modern JavaScript feature used to handle asynchronous operations.
     The async keyword makes a function return a promise, and await waits for that promise to resolve. 
     It makes asynchronous code look synchronous, improves readability, avoids callback hell, and supports proper error handling using try-catch.
     In simple words:
async makes a function return a Promise.
await waits for the Promise result before moving to the next line.
`,
  },
  {
    keywords: ["promise handling", "handling"],
    answer: `
A Promise is used to handle asynchronous operations like API calls.

A Promise has three states:
Pending – operation is in progress.
Fulfilled – operation completed successfully.
Rejected – operation failed.

We handle promises using .then() for success and .catch() for errors.

Example:

fetch("api/data")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));

In simple words:
Promise handles future results of asynchronous operations.
`,
  },
  {
    keywords: ["global execution context", "execution context"],
    answer: `
When JavaScript runs code, it creates a Global Execution Context.

Execution happens in two phases:
1 Creation phase – memory is allocated for variables and functions.
2 Execution phase – code runs line by line.

Call Stack:
Stores execution contexts and follows LIFO (Last In First Out).

Microtask Queue:
Contains high priority tasks like Promise.then() and Promise.catch().

Macrotask Queue (Callback Queue):
Contains tasks like setTimeout, setInterval, and DOM events.

Event Loop:
It checks the call stack and moves tasks from microtask queue first, then macrotask queue.

In simple words:
JavaScript executes code using call stack, microtasks, and macrotasks managed by the event loop.
`,
  },
  {
    keywords: ["promise"],
    answer: `
A Promise in JavaScript is an object that handles asynchronous operations and gives a result in the future, either success or failure.
A Promise has three states:
1. Pending - the operation is still in progress.
2. Fulfilled - the operation completed successfully.
3. Rejected - the operation failed.
We use .then() to handle the successful result and .catch() to handle errors.
Promises help avoid callback hell and make asynchronous code easier to read and manage.


`,
  },
  {
    keywords: ["hell"],
    answer: `Callback hell means too many callbacks inside callbacks, which makes code confusing and hard to manage.
    This makes the code difficult to read, understand, and maintain.
The code structure looks like a pyramid or deeply nested blocks.
    `,
  },
  {
    keywords: ["agile"],
    answer: `Agile is a way of working where we develop the product in small parts, deliver frequently, and take continuous feedback from client or stakeholders. 
    Instead of building everything at once, we build feature by feature and improve based on requirements What us Waterfall
Waterfall is a development approach where the project flows in one direction like a waterfall — first requirements, then design, development, testing, and finally deployment. 
We cannot easily go back once a phase is completed.
`,
  },

  {
    keywords: ["spread", "rest", "operator"],
    answer: `
 .Both spread and rest operators use the same syntax (...), but their purpose and usage are different.
🔹 Spread Operator (...)
Expands / unpacks values
Used on the right-hand side
Converts an array or object into individual elements
Used for:
Copying arrays/objects
Merging arrays/objects
Passing arguments to functions
Rest Operator (...)
Collects / packs values
Used on the left-hand side
Combines multiple values into a single array or object
Used for:
Function parameters
Destructuring arrays/objects

`,
  },
  {
    keywords: ["currying"],
    answer: `
Currying is a functional programming technique where a function with multiple parameters is converted into a sequence of functions,
 each taking a single parameter. It allows partial application of arguments, improves reusability,
and helps write cleaner and more maintainable code.
`,
  },
  {
    keywords: ["closure"],
    answer: `
Closure means a function keeps a connection to the variables around it.
if you i explain you in step wise okay 
You create a function inside another function.
The inner function uses some variable from the outer function.
JavaScript does not delete those variables.
So the inner function can still use them later.

function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
`,
  },
  {
    keywords: ["hashmap"],
    answer: `
A HashMap is a data structure used to store data in key-value pairs.

Each key is unique and is used to quickly access its corresponding value.
In JavaScript, we can use Map or Object to implement a HashMap.
Why we use HashMap:
It provides very fast data access, insertion, and deletion (average O(1) time complexity).
Example using Map:

const map = new Map();
map.set("name", "Chaitanya");
map.set("age", 25);

console.log(map.get("name")); // Chaitanya

In simple words:
HashMap stores data in key-value pairs and allows fast lookup using the key.
`,
  },
  {
    keywords: ["max subarray sum"],
    answer: `
Max Subarray Sum means finding the largest possible sum of a continuous subarray inside an array.

A common solution is Kadane’s Algorithm, which keeps track of the current sum and the maximum sum while iterating through the array.

It compares whether to continue the current subarray or start a new one.

Example:

function maxSubArray(arr){
  let max = arr[0];
  let current = arr[0];

  for(let i = 1; i < arr.length; i++){
    current = Math.max(arr[i], current + arr[i]);
    max = Math.max(max, current);
  }

  return max;
}

In simple words:
Find the largest sum from consecutive numbers in an array.
`,
  },

  {
    keywords: ["lexical", "Temporal Dead Zone", "tdz"],
    answer: `Lexical scope means variable access is decided by where the variable is written in the code. JavaScript determines scope during code creation, not at runtime okay
    Temporal Dead Zone refers to the time between variable hoisting and its declaration when accessing let or const variables throws an error. TDZ exists to prevent bugs and enforce safe variable usage.
`,
  },
  {
    keywords: ["var", "let", "const"],
    answer: `
          var works inside the whole function and you can declare it again and change it, so it can create problems.
           let and const work only inside the block and are more safe. 
           let is used when the value will change, and
            const is used when the value should not change. 
            In modern JavaScript, we avoid var and mostly use const.
`,
  },
  {
    keywords: ["component", "react component"],
    answer: `
A component is a reusable block of UI in React.
Each component can have its own state, props, and logic.
There are two types:
1. Functional Components (modern)
2. Class Components (old)
Components help break big applications into small manageable pieces.
`,
  },

  {
    keywords: ["jx"],
    answer: `
JSX stands for JavaScript XML.
It allows writing HTML inside JavaScript code.
Example:
const element = <h1>Hello</h1>
Behind the scenes, JSX is converted into React.createElement() calls.
JSX makes React code more readable and closer to HTML structure.
`,
  },
  {
    keywords: ["client", "server"],
    answer: `
client side - End-user devices, such as smartphones, desktop computers, and laptops
server side- like hosting websites, managing emails, or storing files

JavaScript (JS) can be used as both a client-side and a server-side language.
Client-side languages: HTML (structure), CSS (styling), and JavaScript (behavior) are used to run code in the user's web browser.
Server-side languages: Python, PHP, Java, Ruby, Node.js (JavaScript runtime), and C# are common options that run on the web server to manage logic and data. 

* Client side is a device ,application or software component that request and consumes services or resources from a server.
* Server is a device, computer or software application that provide services ,resources or functions to client .

`,
  },

  {
    keywords: ["diff virtual dom and real dom", "real", "virtual"],
    answer: `
  Virtual DOM is a copy of the real webpage stored in memory.
It does not change the screen directly.
First, it checks what has changed.
Then it updates only the changed part in the Real DOM.
Because of this, it is faster and better for performance.

Real DOM:
Real DOM is the actual DOM of the browser.
When any change happens, the whole DOM may re-render.
Because of this, it can be slower for large applications.

Virtual DOM:
Virtual DOM is a lightweight copy of the Real DOM stored in memory.
React first updates the Virtual DOM and compares it with the previous version (diffing).
Then React updates only the changed parts in the Real DOM.
Because of this, it is faster and more efficient.
`,
  },

  {
    keywords: ["real dom", "dom", "real"],
    answer: `
Real DOM is the actual webpage structure created by the browser.
When we change something, it directly updates the browser screen.

It refreshes the UI again.
It recalculates the layout.
It redraws the page.
Because of this, it becomes slow and heavy.
`,
  },
  {
    keywords: ["Server-Sent Events", "SSE"],
    answer: `
SSE is a way for the server to send real-time updates to the browser.

It creates a connection between server and client.
The connection stays open.
The server keeps sending data automatically.
It works only one way (Server → Client).
`,
  },
  {
    keywords: ["react", "ui", "component"],
    answer: `
React is a JavaScript library used to build user interfaces, mainly for single-page applications.
React follows a component-based architecture, which means the UI is divided into small reusable pieces called components.
Each component controls its own logic and UI. This makes the application easier to maintain, test, and scale.
React uses Virtual DOM to update only the required parts of the UI instead of reloading the whole page, which improves performance.
`,
  },

  {
    keywords: ["ci/cd"],
    answer: `
CI/CD is a process that automates building, testing, and deploying code. CI focuses on integrating and testing code changes, while CD focuses on automatically deploying the application.

    CI (Continuous Integration)
CI means automatically testing and merging code whenever developers push changes.
Developers push code to repository.
Code is automatically built and tested.
It helps find bugs early.

CD (Continuous Deployment / Delivery)
CD means automatically deploying the tested code to production or server.
After testing, code is deployed.
No manual work needed.
Makes release faster.

In simple words:
CI automatically tests and builds the code.
CD automatically deploys the code.
`,
  },
  {
    keywords: ["callback"],
    answer: `
A callback function is a function that is passed as an argument to another function.
The callback function is executed after the main function finishes its task.
Callbacks are commonly used in asynchronous operations such as API calls, timers (setTimeout, setInterval), and event handling.
They help control the order of execution in JavaScript.
However, using too many nested callbacks can make the code complex and difficult to read, which is called callback hell.
To solve this problem, developers often use Promises or async/await.
In simple words:
A callback is a function that is passed to another function and executed later.
`,
  },
  {
    keywords: ["hoc", "higher order component"],
    answer: `A Higher-Order Component in React is a design pattern where a function takes a component and returns a new enhanced component. It is used to share reusable logic across components while keeping them clean and maintainable.
`,
  },
  {
    keywords: ["restful api", "rest"],
    answer: `
RESTful API is a way for two applications to communicate with each other over the internet.

It follows REST (Representational State Transfer) principles and uses HTTP methods.

Common HTTP methods are:
GET – used to fetch data from the server.
POST – used to create new data.
PUT – used to update existing data.
DELETE – used to remove data.
REST APIs usually send and receive data in JSON format.
They are widely used in web applications to connect the frontend and backend.
In simple words:
A RESTful API allows different applications to communicate using standard HTTP requests.
`,
  },
  {
    keywords: ["json", "package-lock.json"],
    answer: `
JSON stands for JavaScript Object Notation.

It is a lightweight data format used to store and exchange data between server and client.

Example:

{
 "name": "Chaitanya",
 "age": 25
}

package-lock.json is automatically generated by npm.
It locks the exact versions of installed dependencies so that every developer gets the same versions when installing packages.
In simple words:
JSON is used for data format, while package-lock.json locks dependency versions.
`,
  },
  {
    keywords: ["map", "filter", "reduce"],
    answer: `
map() is used to create a new array by transforming each element of an existing array.
filter() is used to select elements that match a condition.
reduce() is used to reduce an array into a single value.
forEach()  is an array method used to iterate over each element of an array and perform some operation.
It takes a callback function with parameters like element, index, and array.
It does not return a new array and always returns undefined.

`,
  },
  {
    keywords: ["Polyfill"],
    answer: `
Polyfill means we create our own function if that function is not available in browser.
For example, if map or filter is not supported, we can write our own logic.
For example, if methods like map(), filter(), or Promise are not supported in an older browser, we can create our own logic to achieve the same functionality.
Polyfills help maintain compatibility across different browsers.
`,
  },
  {
    keywords: ["selector "],
    answer: `
selector in JavaScript help to get specific element form DOM based on ids , class names ,tag names .
Dom Selector Metod :-
getElementByID() -select a single element
getElementByClassName()-select multiple elements that share the same classname
getElementByTagName()-select multiple elements based on their tag name
queryselector()-Selects the first HTML element that matches a CSS selector.
queryselectorAll()-Selects all HTML elements that match a CSS selector.
`,
  },
  {
    keywords: ["Hoisting"],
    answer: `
Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope before the code is executed.
This happens during the creation phase of the execution context.
Because of hoisting, we can use functions or variables before they are declared in the code.
However, only declarations are hoisted, not the initial values.
Variables declared with var are hoisted and initialized with undefined, while let and const are also hoisted but cannot be accessed before declaration (this is called the temporal dead zone).
In simple words:
Hoisting means JavaScript moves declarations of variables and functions to the top of their scope before execution.
`,
  },
  {
    keywords: ["Execution Context", "Execution"],
    answer: `Execution Context is like the environment where JavaScript code lives and runs.
     You can think of it as a box that contains the variables, functions, and the value of this for the current piece of code.
     like Imagine you are a chef. When you enter the kitchen, you need certain things to start cooking: your ingredients, your tools, and a recipe.
      It has two phases: first, it prepares memory for variables (Hoisting),
       and second, it executes the code line-by-line.`,
  },
  {
    keywords: ["state"],
    answer: `
State is an object that stores dynamic data inside a component.
When state changes, React automatically re-renders the component.
State is mutable and local to the component.
Used for data that changes over time like form inputs, counters, toggles.
`,
  },

  {
    keywords: ["props"],
    answer: `
Props are used to pass data from parent to child component.
Props are read-only, child cannot modify them.
Props make components reusable and dynamic.
Example:
<User name="John" />
`,
  },
  {
    keywords: ["memoization"],
    answer: `
Memoization is an optimization technique used to improve performance.
It means storing the result of a function and returning the saved result when the same inputs are used again.
Instead of calculating the result again and again, the function checks if the result is already stored.
If it is stored, it directly returns the saved value.
Memoization is useful for expensive calculations or functions that are called many times with the same inputs.
In simple words:
Memoization means saving function results and reusing them to avoid repeated calculations.
`,
  },

  {
    keywords: ["usestate"],
    answer: `
useState is a Hook that allows a functional component to have its own internal memory. 
It returns two things: the current value of the state and a function to update that value. 
Whenever the update function is called, React automatically re-renders the component to show the new data on the screen.
const [count, setCount] = useState(0)
When setCount is called, component re-renders with new value.
It replaces class component state.
`,
  },

  {
    keywords: ["useeffect"],
    answer: `
useEffect is a React Hook used to handle side effects in functional components.

A side effect means any operation that happens outside the normal rendering process, 
such as fetching API data, setting timers, updating the DOM, or adding event listeners.

The useEffect hook runs after the component renders.

It can run in three ways:
1. Run after every render (no dependency array).
2. Run only once when the component mounts (empty dependency array []).
3. Run when specific values change (dependency array with variables).

useEffect can also return a cleanup function to remove things like timers or event listeners when the component unmounts.

In simple words:
useEffect is used to perform side effects like API calls, timers, and event listeners in React functional components.
`,
  },
  {
    keywords: ["Custom Hook", "Custom"],
    answer: `
A Custom Hook is a function in React that lets us reuse logic in different components.

It is just a normal JavaScript function.
Its name always starts with use.
It can use other React hooks like useState, useEffect.
It helps to avoid repeating the same code.

que : How to Make a Custom Hook ?
A custom hook is a reusable function in React that starts with "use" and allows us to share logic between components.
`,
  },
  {
    keywords: ["array"],
    answer: `
Arrays are special objects used to store collections of data. Here is how the most common methods work:
push(): Adds an element to the end.
pop(): Removes the last element.
unshift(): Adds an element to the start (shifts others right).
shift(): Removes the first element (shifts others left).
map(): Creates a new array by transforming every element.
filter(): Creates a new array with elements that pass a condition.
reduce(): Combines all elements into a single value (like a sum).
forEach(): Runs a function for each element; returns nothing and cannot be stopped early.
includes(): Returns true or false if an element exists.
find(): Returns the first element that matches a condition, then stops.
slice(): Extracts a section; does not change the original array.
splice(): Modifies the original array to add or remove elements.
sort(): Sorts elements alphabetically by default. For numbers, use a compare function:

[] → run only once  
No array → run every render  
[values] → run when values change

`,
  },
  {
    keywords: ["dependency array"],
    answer: `
Dependency array controls useEffect execution.
[] → run only once  
No array → run every render  
[values] → run when values change
`,
  },

  {
    keywords: ["rendering"],
    answer: `
Conditional rendering means showing UI based on conditions.
Example:
if (loading) show loader  
else show data
Used for authentication, loaders, error messages.
`,
  },
  {
    keywords: [
      "javascript conditions",
      "if",
      "if else",
      "else if",
      "switch",
      "ternary",
    ],
    answer: `
Conditions in JavaScript are used to make decisions and execute different blocks of code based on whether a given condition is true or false.
if Condition -The if statement executes a block of code only when the condition is true. 
 if…else Condition -The if…else statement executes one block when the condition is true and another block when it is false. 
else if Condition - The else if statement is used to check multiple conditions sequentially. 
switch Statement- The switch statement is used to execute different code blocks based on the value of an expression.
Ternary Operator (Short Condition)- The ternary operator is a shorthand for if…else used for simple conditions.

`,
  },
  {
    keywords: ["loop"],
    answer: `
A loop is a programming way to run a piece of code repeatedly until a certain condition is met.

for- Used when the number of iterations is known.
while- Executes code while the condition is true.
do...while- Executes the code at least once, even if the condition is false.
for...of- Used to iterate over iterable objects like arrays and strings.
for...in- Used to iterate over iterable objects like arrays and strings.


`,
  },
  {
    keywords: ["setTimeout", "setInterval"],
    answer: `
setTimeout is used to execute a function once after a specified delay (in milliseconds).
like simple It runs code one time only after some time.
setTimeout(() => {
  console.log("Hello");
}, 2000);

setInterval is used to execute a function repeatedly after a specified interval (in milliseconds).
and simple way It runs code again and again after some time.
setInterval(() => {
  console.log("Hello");
}, 2000);
`,
  },

  {
    keywords: ["key"],
    answer: `
Key is a unique identifier for list items.
Helps React identify which item changed, added, or removed.
Without keys, React may re-render wrong elements.
`,
  },
  {
    keywords: ["Destructuring"],
    answer: `Destructuring is a way to take values from array or object and store them into variables easily.
    like simple for ex 
   
Go inside object and take value. it is a  Normal way:  
and Take value directly in one line. it is a Destructuring way
`,
  },
  {
    keywords: ["call", "apply", "blind"],
    answer: `
| call()                                      |                apply()                                     | bind()                            
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------------ |
| It is a method to call a function.          | It is a method to call a function.          | It is a method to create a new function.         |
| Calls the function immediately.             | Calls the function immediately.             | Does not call immediately.                       |
| Arguments are passed one by one.            | Arguments are passed as an array.           | Arguments can be passed later.                   |
| Changes the this value of the function.     | Changes the this value of the function.     | Binds the this value permanently.                |
| Returns the function result.                | Returns the function result.                | Returns a new function.                          |
`,
  },

  {
    keywords: ["controlled"],
    answer: `
Controlled component is a form element controlled by React state.
Input value comes from state and updates using onChange.
React has full control over form data.

uncontrolled component 
Uncontrolled component is controlled by DOM.
React uses refs to access values.
Less preferred than controlled components.
`,
  },

  {
    keywords: ["uncontrolled"],
    answer: `
Uncontrolled component is controlled by DOM.
React uses refs to access values.
Less preferred than controlled components.
`,
  },

  {
    keywords: ["lifting state", "lifting"],
    answer: `
Lifting State Up is a pattern used when multiple components need to share the same changing data. 
Instead of keeping the state inside each individual child, we move it to their closest common parent.
 The parent then passes the state down to the children via props, ensuring that both components are always in sync.
`,
  },

  {
    keywords: ["prop drilling", "drilling", "prop"],
    answer: `
Prop drilling means passing props through many layers.
Makes code messy and hard to maintain.
Solved using Context API or Redux.
`,
  },

  {
    keywords: ["useref"],
    answer: `
useRef is a React Hook used to store a value that does not cause the component to re-render when it changes.

It is mainly used for two purposes:
1. Accessing DOM elements directly (for example focusing an input field).
2. Storing values that should persist between renders.
The value is stored in the .current property.
Unlike useState, updating a useRef value does not trigger a component re-render.

Why we use useRef:
We use useRef when we want to store or update a value without re-rendering the component. It is also useful when we need direct access to a DOM element.
Example:
const inputRef = useRef(null);

useEffect(() => {
  inputRef.current.focus();
}, []);

<input ref={inputRef} />

In simple words:
useRef = store value + access DOM + no re-render.
`,
  },

  {
    keywords: ["usememo"],
    answer: `
useMemo remembers a value so React doesn’t calculate it again.
useMemo stores the result of a calculation and reuses it.
i explain you simply 
imagin if we are student and teacher ask what is 100 * 100 
first time we spend 5 min for calculating and get answer 10000
we write on sheet this is usememo 
if teacher ask same question again we not need to calculate again i just look on sheet and say answer instantly
`,
  },

  {
    keywords: ["usecallback"],
    answer: `
useCallback remembers a function so it is not recreated again.
useCallback returns the same function reference between renders.
i want to say simply 
useCallback = remember function, don’t recreate.
`,
  },

  {
    keywords: ["react router", "router"],
    answer: `
React Router is used for navigation.
Allows switching pages without reload.
Used in SPA applications.
`,
  },

  {
    keywords: ["lazy loading", "lazy"],
    answer: `
Lazy loading means loading things only when you need them.
Lazy loading saves time and internet by not loading unnecessary things.
and why we use lazy loading so
Faster app
Less data usage
Better UX
Happy users
`,
  },

  {
    keywords: ["error boundary", "error"],
    answer: `
Error Boundary catches errors so the whole app doesn’t crash.
If one component breaks, Error Boundary shows a fallback UI instead of breaking the entire app.

`,
  },

  {
    keywords: ["one way data flow", "dataflow"],
    answer: `
Data flows from parent to child.
Child cannot directly modify parent.
Makes app predictable.
`,
  },

  {
    keywords: ["optimize ", "performance optimize"],
    answer: `
I optimized performance mainly by reducing unnecessary re-renders.
I used React.memo for heavy components, useCallback and useMemo for expensive functions, and implemented lazy loading for large modules.
I also avoided deeply nested props by normalizing state in Redux and split large components into smaller reusable ones.
This improved rendering performance, especially on low-end tablets used in schools.

`,
  },
  {
    keywords: ["statehatch"],
    answer: `We use Redux Toolkit for global state management.
Global data like user info, roles, selected groups, and session data are stored in Redux slices.
Local UI states like modal open/close or form inputs are managed using React useState.
For async operations, we use createAsyncThunk to handle API calls and store loading, success, and error states in Redux.
`,
  },
  {
    keywords: ["18", "19"],
    answer: `
React 18 introduced new features to improve performance and user experience.

Some important features in React 18:
Concurrent Rendering – allows React to prepare multiple UI updates at the same time.
Automatic Batching – React groups multiple state updates into a single render.
Transitions – helps mark non-urgent updates so the UI stays responsive.

React 19 builds on React 18 and focuses more on improving developer experience and full-stack React.

Some features in React 19:
use() hook – simplifies handling async data and promises.
Better form handling – improved support for forms and actions.
Server Actions – allows running server-side logic directly from React components.

In simple words:
React 18 improved performance and rendering.
React 19 improves async handling and full-stack development.
`,
  },
  {
    keywords: ["Batching"],
    answer: `
React Batching is a performance optimization where React groups multiple state updates together and performs only one re-render instead of multiple re-renders.
Normally, when state changes, React re-renders the component. If we update state multiple times, React batches them and updates the UI once.

Instead of rendering twice, React groups these updates and re-renders the component only once.
Why React uses Batching:
• Improves performance
• Reduces unnecessary re-renders
• Makes the application faster
Simple say:
React batching means grouping multiple state updates and updating the UI once for better performance.
Example:

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <>
      <p>{count}</p>
      <button onClick={handleClick}>Increase</button>
    </>
  );
}

In this case React batches the updates and performs a single re-render.
`,
  },
  {
    keywords: ["Reconciliation"],
    answer: `Reconciliation is the process by which React compares the previous Virtual DOM with the new Virtual DOM after a state or props change, finds the differences, and updates only the necessary parts of the real DOM efficiently.
`,
  },

  {
    keywords: ["redux", "toolkit", "useContext"],
    answer: `
Redux keeps all data in one box (store) and changes it using proper rules.
It is mostly used in large applications where state is complex.
useContext is a React Hook that helps share data between components without passing props manually at every level.
In Redux Toolkit, first we create a slice that contains state and reducers. Then we configure the store and add the slice reducer. After that, we wrap the app with Provider to connect Redux. Inside components, we use useSelector to read state and useDispatch to update it. For async operations, we use createAsyncThunk.
Redux is the core state management library.
Redux Toolkit is a wrapper around Redux that makes it easier, cleaner, and more efficient to use.
`,
  },
  {
    keywords: ["useContextStore"],
    answer: `
First, I create a context using createContext().
Then I create a Provider component where I define the state using useState (or useReducer).
I pass the state and functions as a value to the Provider.
Then I wrap the App component (or required component tree) with that Provider.
Finally, inside child components, I use useContext() to access the shared data directly.
`,
  },
  {
    keywords: ["useContext", "context api"],
    answer: `
useContext is a React Hook used to access shared data from Context in any component without passing props manually through multiple components (prop drilling).
Normally in React, if we want to send data from a parent component to a deeply nested child component, we have to pass props through many intermediate components. This is called prop drilling.
Context API solves this problem by creating a global store where data can be shared by many components.
Steps to use Context:

1. Create Context
We create a context using React.createContext().

2. Provide Context
Wrap the components with Context.Provider and pass the value.

3. Consume Context
Use the useContext hook inside any child component to access the value.

Simple Summary:
• Context API shares data globally
• useContext is used to access that data
• It helps avoid prop drilling

Example:
const UserContext = React.createContext();

function App() {
  return (
    <UserContext.Provider value="Chaitanya">
      <Profile />
    </UserContext.Provider>
  );
}
function Profile() {
  const user = useContext(UserContext);
  return <h1>Hello {user}</h1>;
}

Simple Summary:
• Context API shares data globally
• useContext is used to access that data
• It helps avoid prop drilling
`,
  },
  {
    keywords: ["reco"],
    answer: `
Context API is used to share data between components without props.
Context API is like a small family group chat. It’s built into React.
Redux is used to manage application state in one central store.
Redux is like a huge Central Post Office. It is an outside tool. Everything is stored in one box.
Context API is a built-in feature of React, while Redux is an external library.
Context is good for small data, Redux is better for big and complex applications.
`,
  },
  {
    keywords: ["storeReux"],
    answer: `
first i install dependencies 
and then i create slices using createSlice okay add i define the  initialstate ,reducers .
and then i use configurestore to create redux store and pass the slice reducers inside the reducer 
and then i wrap my component with <Provider> and pass  the store so whole aplication access it
and then use of useSelectorfor read data and useDispatch for dispatch actions that update the state
`,
  },
  {
    keywords: ["lifecycle", "cycle"],
    answer: `
React Lifecycle means the different stages a component goes through from the time it is created until it is removed from the screen.
There are three main phases.
1. Mounting
Mounting is the first time the component is created and added to the DOM.
During this phase:
• React creates the component
• The component renders JSX
• The UI appears on the screen

2. Updating
Updating happens when the component re-renders because of changes in state or props.

Example:
• User clicks a button
• State changes
• React re-renders the component
We use useEffect with dependencies to run code when a specific value changes.

3. Unmounting
Unmounting happens when the component is removed from the DOM.
Example:
• Navigating to another page
• Hiding a component
• Removing a modal

In useEffect we return a cleanup function that runs before the component is removed.

Simple say 
Mounting → Component created and shown on screen  
Updating → Component re-renders when state or props change  
Unmounting → Component is removed from the screen  
In functional components, we manage all these phases using the useEffect hook.
`,
  },
  {
    keywords: ["diff memocallback", "memocallback"],
    answer: `
useMemo memorizes a value.
useCallback memorizes a function.
useMemo is used when we want to avoid recalculating heavy values.
useCallback is used when passing functions to child components to prevent unnecessary re-renders.
Simple:
useMemo = remember result.
useCallback = remember function.
`,
  },
  {
    keywords: ["prevent rerender", "rerender"],
    answer: `
To prevent unnecessary re-renders:
- Use React.memo for components
- Use useCallback for functions
- Use useMemo for calculated values
- Keep state minimal
- Split components properly
- Avoid inline object and function creation

Main goal is to reduce unnecessary rendering for better performance.
`,
  },
  {
    keywords: ["authentication", "auth"],
    answer: `
Authentication is used to verify users.
In frontend, we:
- Store JWT token in secure storage
- Use protected routes
- Check user role before showing pages
- Redirect unauthenticated users to login
Security and role-based access control are important.
`,
  },
  {
    keywords: ["design pattern", "design"],
    answer: `
Common React design patterns:
- Higher Order Component (HOC)
- Render Props
- Custom Hooks
- Compound Components
These patterns help write reusable and scalable code.
`,
  },
  {
    keywords: ["debounce", "throttle"],
    answer: `
Debouncing delays execution until user stops typing.
Used in search inputs.
Throttling limits execution to once in a given time.
Used in scroll or resize events.
Both improve performance.
`,
  },
  {
    keywords: ["fiber"],
    answer: `
React Fiber is the new reconciliation engine introduced in React 16.
It improves rendering by breaking work into small units and prioritizing important updates.
It enables features like concurrent rendering and better UI responsiveness.
`,
  },
  {
    keywords: ["concurrent"],
    answer: `
Concurrent rendering allows React to prepare multiple versions of UI in the background.
It improves user experience by not blocking the main thread.
React 18 introduced features like startTransition and automatic batching for this.
`,
  },
  {
    keywords: ["suspense"],
    answer: `
Suspense allows components to wait for something before rendering.
It is mainly used with React.lazy for code splitting and for handling async data loading.
It shows fallback UI like loaders while waiting.
`,
  },
  {
    keywords: ["normalization"],
    answer: `
Normalization means storing data in a flat structure instead of nested objects.
Instead of deeply nested state, we store items by ID in separate objects.
This makes updates easier and improves performance.no
`,
  },
  {
    keywords: ["uselayout", "layout"],
    answer: `
useLayoutEffect runs synchronously after DOM updates but before the browser paints.
It is used when we need to measure DOM elements or make layout changes.
useEffect runs after paint, useLayoutEffect runs before paint.
`,
  },
  {
    keywords: ["strict mode", "strict"],
    answer: `
React StrictMode is a development tool.
It helps detect unsafe lifecycle methods and unexpected side effects.
It runs some functions twice in development to find potential bugs.
`,
  },
  {
    keywords: ["large application", "large"],
    answer: `
For large applications:
- Use modular folder structure
- Separate business logic and UI
- Use reusable components
- Maintain proper state management
- Follow coding standards
- Write unit tests
- Use lazy loading and code splitting
`,
  },
  {
    keywords: ["git strategy", "git"],
    answer: `
We follow Git flow or feature branching strategy.
Each feature has its own branch.
Code goes through pull request and code review before merging.
Main branch is always stable.
`,
  },
  {
    keywords: ["micro frontend", "micro", "micro vs macro"],
    answer: `

Micro Frontend is an architecture where a large frontend application is divided into small independent applications.
Each part of the UI is built and managed by different teams and can be developed, tested, and deployed separately.

Micro vs Macro (Task Queue in JavaScript)

In JavaScript, the Event Loop manages two main queues: Microtask Queue and Macrotask Queue.
Microtask Queue (High Priority)
Microtasks run immediately after the current code finishes and before the browser moves to the next event loop cycle.
Examples:
• Promise.then()
• Promise.catch()
• queueMicrotask()
• MutationObserver
Example:
Promise.resolve().then(() => console.log("Microtask"));

Macrotask Queue (Normal Priority)
Macrotasks are executed after microtasks are completed.
Examples:
• setTimeout
• setInterval
• setImmediate
• DOM events

Example:
setTimeout(() => console.log("Macrotask"), 0);
Execution Order Example:
console.log("Start");
setTimeout(() => {
  console.log("Macrotask");
}, 0);
Promise.resolve().then(() => {
  console.log("Microtask");
});
console.log("End");
Output:
Start
End
Microtask
Macrotask
 
Reason:
JavaScript always executes all microtasks before moving to macrotasks.
`,
  },
  {
    keywords: ["5 seconds delay", "delay"],
    answer: `function delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
}

console.log("Start");

delay().then(() => {
  console.log("End");
});
`,
  },
  {
    keywords: ["security"],
    answer: `
Security practices:
- Avoid storing sensitive data in localStorage
- Prevent XSS attacks
- Use HTTPS
- Validate inputs
- Use secure authentication tokens
`,
  },
  {
    keywords: ["accessibility"],
    answer: `
Accessibility ensures the application can be used by people with disabilities.
Use semantic HTML, proper labels, alt tags, ARIA roles, and keyboard navigation.
`,
  },
  {
    keywords: ["unit testing"],
    answer: `
Unit testing means testing small individual parts of the application like functions or components.
The goal is to make sure each unit works correctly in isolation.
It helps catch bugs early and improves code quality.
`,
  },
  {
    keywords: ["unit testing", "unit", "jest"],
    answer: `
Unit testing means testing small individual parts of the application like functions or components.
The goal is to make sure each unit works correctly in isolation.
It helps catch bugs early and improves code quality.

I have used Jest and React Testing Library for unit testing in React applications.
Jest is used as test runner and assertion library.
React Testing Library is used to test components from user perspective.
`,
  },
  {
    keywords: ["enzyme"],
    answer: `
React Testing Library focuses on testing behavior instead of implementation.
It encourages testing like how a user interacts with the application.
Enzyme allows testing internal state, but RTL promotes better testing practices.
`,
  },
  {
    keywords: ["getby", "queryby", "findby"],
    answer: `

These are methods from React Testing Library used to find elements in the DOM while testing.
getBy
getBy is used when the element should already be present on the screen.
• If the element is found → test passes  
• If the element is NOT found → it throws an error
Use getBy when the element is immediately available.

queryBy
queryBy is used when the element might or might not be present.
• If the element is found → returns the element  
• If the element is NOT found → returns null (no error)
Use queryBy when you want to check that something is NOT on the screen.

findBy
findBy is used for async elements (elements that appear later).

Sometimes elements appear after:
• API call
• loading
• state update
findBy waits for the element to appear.

If the element appears → test passes  
If it does not appear after some time → test fails
Simple Difference
getBy
• Used when element should be present immediately
• Throws error if not found

queryBy
• Used to check element may or may not exist
• Returns null if not found

findBy
• Used for async elements
• Waits for the element to appear

`,
  },
  {
    keywords: ["mockapi"],
    answer: `
For API calls, I mock the API using jest.mock or mock functions.
I simulate success and failure responses.
Then I test loading state, success UI, and error UI separately.
`,
  },
  {
    keywords: ["mocking"],
    answer: `
Mocking means replacing real implementation with fake one for testing.
For example, instead of calling real API, we mock the response.
It makes tests faster and independent from external systems.
`,
  },

  {
    keywords: ["coverage"],
    answer: `
Code coverage shows how much of the code is covered by tests.
It includes statements, branches, functions, and lines coverage.
Higher coverage means better confidence but 100% is not always required.
`,
  },
  {
    keywords: ["graphQl"],
    answer: `
GraphQL is a query language for APIs.
It allows the client to request only the data it needs.
It was developed by Meta Platforms.

Main concepts are:

Query → Used to fetch data
Mutation → Used to create/update/delete data
Schema → Defines structure of API
Resolver → Handles request logic

`,
  },
  {
    keywords: ["diff rest and graphQl"],
    answer: `
REST and GraphQL are two ways to communicate between the client (frontend) and server (backend) to get data.
REST API
REST uses multiple URLs (endpoints) to get different types of data.
Example:
If we want user data and their posts.
GET /users/1
GET /users/1/posts

So the client needs to call multiple APIs to get all required data.

Problems in REST:
1. Over-fetching  
Sometimes the API sends more data than we need.
Example response:
{
  id: 1,
  name: "John",
  email: "john@mail.com",
  address: "...",
  phone: "...",
  age: 30
}
But maybe the frontend only needs the name.

Sometimes one API does not give enough data, so we need to call multiple APIs.

This increases network requests and can slow the app.
3. Fixed response  
Server decides what data will be returned. The client cannot choose fields.

GraphQL
GraphQL uses a single endpoint.

Example:
POST /graphql

The client sends a query and decides exactly what data is needed.

Advantages of GraphQL:

1. No over-fetching  
Client requests only the fields it needs.

2. No under-fetching  
Client can fetch related data in a single request.

3. Single endpoint  
All requests go through one endpoint.

----------------------
Simple Difference
----------------------

REST
• Multiple endpoints
• Server decides response
• Can cause over-fetching or under-fetching
• Multiple API calls may be needed

GraphQL
• Single endpoint
• Client decides what data to fetch
• No over-fetching
• Usually fewer API calls

`,
  },
  {
    keywords: ["Native", "ReactNative"],
    answer: `
React Native is a framework developed by Meta Platforms
It is used to build mobile applications using JavaScript and React.
It creates real native mobile apps for Android and iOS.
`,
  },
  {
    keywords: ["Native StyleSheet"],
    answer: `
In React Native we don’t use CSS.
We use StyleSheet.create() to define styles in JavaScript object format.
`,
  },
  {
    keywords: ["Native diff"],
    answer: `
React JS is used for web applications.
React Native is used for mobile applications.
React JS uses HTML elements like div, span.
React Native uses components like View, Text, Image.
React JS renders to the DOM, React Native renders to native mobile components.
`,
  },
  {
    keywords: ["Native navigation"],
    answer: `
Navigation is handled using libraries like
React Navigation.

It provides:
Stack Navigation
Tab Navigation
Drawer Navigation
`,
  },
  {
    keywords: ["cli", "Expo"],
    answer: `
React Native mainly has two types: React Native CLI and Expo.
CLI gives full native control and is used for complex apps.
Expo is easier to set up and good for fast development.
`,
  },
  {
    keywords: ["git", "github", "Difference Git and GitHub"],
    answer: `
    | Git                           | GitHub                        |
| ----------------------------- | ----------------------------- |
| It is a tool.                 | It is a platform/website.     |
| Works locally on your system. | Works online (cloud).         |
| Used to track code changes.   | Used to store and share code. |
| No internet required.         | Internet required.            |        |

`,
  },
  {
    keywords: ["Debounce Function"],
    answer: `
Debouncing is a technique used to limit how often a function runs.
It delays the execution of a function until after a certain time has passed since the last event.
If the event keeps happening (like typing or scrolling), the timer resets and the function will run only once after the user stops.
Why we use debounce:
It helps improve performance and prevents unnecessary function calls.
Common use cases:
Search input API calls
Window resize events
Button click prevention

Example:

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

In simple words:
Debounce means delaying a function call until the user stops performing an action.
`,
  },

  {
    keywords: ["vitals", "speed", "lighthouse"],
    answer: `Web Vitals are like a Health Report for your website. 
Google looks at three main things to see if your site is good:
1. LCP (Loading): How fast does the biggest image or text load?
2. FID (Interactivity): When I click a button, how fast does it react?
3. CLS (Stability): Does the page jump around while loading?

I use a tool called Lighthouse in Chrome. It gives a score out of 100. If the score is low, I fix it by compressing images or removing heavy code.`,
  },

  {
    keywords: ["interceptor", "axios", "security guard"],
    answer: `An Interceptor is like a Security Guard for your API calls.
Imagine every time you leave your house (send a request), the guard checks if you have your ID card (Token). 
And every time you come back (receive a response), the guard checks if you are still allowed to enter.

We use it to:
• Automatically add the "Token" to every API call.
• If the server says "Session Expired", the guard catches it and sends the user to the Login page instantly.`,
  },

  {
    keywords: ["npm", "yarn", "package"],
    answer: `They are both like a Shopping Manager for your project. 
When you need a library like Redux or Axios, you tell the manager to go get it.

• NPM is the standard one that comes with Node.js.
• Yarn is an alternative that is often faster.
• Both use a file called package.json (the shopping list) to make sure every developer on the team has the same tools.`,
  },

  {
    keywords: ["vite", "webpack", "bundler"],
    answer: `These are tools that pack all your small files into one big file for the browser.

• Webpack is like an old heavy truck. It is very powerful but takes a long time to start.
• Vite is like a sports car. It uses modern tech to start almost instantly. 
In my current projects, I prefer Vite because it makes development much faster.`,
  },

  {
    keywords: ["testing", "jest", "rtl"],
    answer: `Testing is like checking the brakes of a car before you go for a drive. 

• Jest is the runner—it checks the logic (is 2 + 2 really 4?).
• React Testing Library (RTL) is the user—it checks if the user can actually see the "Submit" button and click it.

We write tests so that when we change code later, we don't accidentally break old features.`,
  },

  {
    keywords: ["global", "local", "state diff"],
    answer: `I explain it like this:
• Local State (useState): This is like your pocket. You keep small things there that only you need (like a toggle or a single input value).
• Global State (Redux): This is like a School Notice Board. Everyone in the school can see it and use that information (like User Login info or the user's Role).`,
  },

  {
    keywords: ["security", "xss"],
    answer: `XSS is when a hacker tries to put a "bad script" into your website (like inside a comment box). 
If the website is not safe, that script can steal user data.

To prevent this: 
• React is smart—it automatically cleans the text before showing it on the screen.
• We should never use 'dangerouslySetInnerHTML' unless we really trust the data.`,
  },
  {
    keywords: ["clean code", "best practices"],
    answer: `Clean code means writing code for people, not just for computers.
I follow these simple rules:
• Meaningful Names: Don't name a variable 'x', name it 'isUserLoggedIn'.
• Small Components: One component should do only one thing.
• DRY (Don't Repeat Yourself): If I write the same code twice, I move it to a helper function.
• Comments: I write comments for 'Why' I did something, not 'What' I did.`,
  },
  {
    keywords: ["code review", "teammate"],
    answer: `Code review is like a second pair of eyes.
When I review a teammate's code:
• I look for bugs or performance issues.
• I check if the code is easy to read.
• I am always polite. I don't say "This is wrong," I say "Can we try this way to make it faster?"
It’s not about finding mistakes; it’s about making the product better together.`,
  },
  {
    keywords: ["conflict", "argument"],
    answer: `If I have a disagreement with a teammate about code:
1. first  listen to their reason and then .
2. I explain my reason with logic .
3. If we still can't agree, i ask a Senior/Lead for a third opinion.`,
  },
  {
    keywords: ["learn", "new technology"],
    answer: `Technology changes fast, so I stay updated by:
• Reading official documentation (like React.dev).
• Building small side projects to test new things (like Vite or React 19).
• Watching technical blogs or YouTube channels like 'Web Dev Simplified'.`,
  },
  {
    keywords: ["browser", "crp", "critical rendering path"],
    answer: `

Critical Rendering Path means the steps the browser follows to show a webpage on the screen.

1. HTML -> DOM  
Browser reads the HTML and creates the page structure (like a skeleton of the page).

2. CSS -> CSSOM  
Browser reads CSS and understands how the page should look (colors, fonts, styles).

3. Render Tree  
Browser combines DOM + CSSOM to know what elements should appear on the screen.

4. Layout  
Browser calculates the exact position and size of each element.

5. Paint  
Finally, the browser draws everything on the screen.

To make it faster:
• Keep CSS files small  
• Put JavaScript at the bottom or use defer  
• Use minified CSS and JS files
`,
  },
  {
    keywords: ["typescript", "ts"],
    answer: `TypeScript is like a "Safety Net" for JavaScript.
JavaScript is free and easy, but you can make small typos that break the app. 
TypeScript finds those typos while you are typing.
It makes the code easier to understand because you know exactly what data is coming (like a String or a Number).
It's like having a map while driving instead of guessing the road.`,
  },
  {
    keywords: ["bug", "fix", "stuck"],
    answer: `1. I use console.log and React DevTools to see where the data is stopping.
2. I check if it's a "Shallow Copy" issue (very common in React).
3. If I am stuck for more than 1 hour, I ask a teammate .`,
  },

  {
    keywords: ["leaving", "reason", "change"],
    answer: `I learned a lot at Ciklum working on the Hatch project, especially about migrating old systems to React. 
But now, I am looking for a new challenge where I can take more ownership and work on a bigger product. 
I want to join a team where I can use my 3+ years of experience to help the company grow while I grow as a Senior Engineer.`,
  },

  {
    keywords: ["deadline", "pressure", "time"],
    answer: `When time is short, I work smarter, not just faster:
• I focus on "Must-Have" features first.
• I talk to my manager to see if small things (like extra animations) can be done later.
• I write clean code so I don't create new bugs that will waste more time later. 
The key is to keep the manager updated every day so there are no surprises.`,
  },

  {
    keywords: ["strength", "weakness"],
    answer: `• Strength: I can explain complex technical things in simple words. This helps me work well with designers and junior developers.
• Weakness: Sometimes I try to make my code "too perfect" and it takes extra time. Now, I focus on making it "work first," and then I make it "perfect" later if I have time.`,
  },

  {
    keywords: ["future", "5 years", "goals"],
    answer: `In 5 years, I see myself as a Technical Lead or Architect. 
I want to be the person who decides the structure of big projects and helps other developers solve their problems. 
I want to stay close to coding but also help the business grow with good technology.`,
  },
  {
    keywords: ["ask them", "questions"],
    answer: `
1. "How does the team handle code reviews and testing?"
2. "What are the growth opportunities for someone in this role?"`,
  },
  {
    keywords: ["Two Sum"],
    answer: `
function twoSum(arr, target) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];

    if (map[diff] !== undefined) {
      return [map[diff], i];
    }

    map[arr[i]] = i;
  }
}
`,
  },

  {
    keywords: ["Reverse an Array"],
    answer: `
function reverseArray(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}
`,
  },
  {
    keywords: ["Duplicate Elements"],
    answer: `
function findDuplicates(arr) {
  let seen = new Set();
  let duplicates = new Set();

  for (let num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }

  return [...duplicates];
}
`,
  },
];
