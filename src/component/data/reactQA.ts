export const reactQA = [
  {
    keywords: ["react", "ui", "component"],
    answer: `React is a JavaScript library used to build user interfaces, mainly for single-page applications. React follows a component-based architecture, which means the UI is divided into small reusable pieces called components. Each component controls its own logic and UI. This makes the application easier to maintain, test, and scale. React uses Virtual DOM to update only the required parts of the UI instead of reloading the whole page, which improves performance.`,
  },
  {
    keywords: ["component", "react component"],
    answer: `A component is a reusable block of UI in React. Each component can have its own state, props, and logic. There are two types: 1. Functional Components (modern) 2. Class Components (old). Components help break big applications into small manageable pieces.`,
  },
  {
    keywords: ["jx"],
    answer: `JSX stands for JavaScript XML. It allows writing HTML inside JavaScript code. Example: const element = <h1>Hello</h1>. Behind the scenes, JSX is converted into React.createElement() calls. JSX makes React code more readable and closer to HTML structure.`,
  },
  {
    keywords: ["state"],
    answer: `State is an object that stores dynamic data inside a component. When state changes, React automatically re-renders the component. State is mutable and local to the component. Used for data that changes over time like form inputs, counters, toggles.`,
  },
  {
    keywords: ["props"],
    answer: `Props are used to pass data from parent to child component. Props are read-only, child cannot modify them. Props make components reusable and dynamic. Example: <User name="John" />`,
  },
  {
    keywords: ["usestate"],
    answer: `useState is a Hook that allows a functional component to have its own internal memory. It returns two things: the current value of the state and a function to update that value. Whenever the update function is called, React automatically re-renders the component to show the new data on the screen. const [count, setCount] = useState(0). When setCount is called, component re-renders with new value. It replaces class component state.`,
  },
  {
    keywords: ["useeffect"],
    answer: `useEffect is a React Hook used to handle side effects in functional components. A side effect means any operation that happens outside the normal rendering process, such as fetching API data, setting timers, updating the DOM, or adding event listeners. The useEffect hook runs after the component renders. It can run in three ways: 1. Run after every render (no dependency array). 2. Run only once when the component mounts (empty dependency array []). 3. Run when specific values change (dependency array with variables). useEffect can also return a cleanup function to remove things like timers or event listeners when the component unmounts. In simple words: useEffect is used to perform side effects like API calls, timers, and event listeners in React functional components.`,
  },
  {
    keywords: ["dependency array"],
    answer: `Dependency array controls useEffect execution. [] → run only once. No array → run every render. [values] → run when values change.`,
  },
  {
    keywords: ["useref"],
    answer: `useRef is a React Hook used to store a value that does not cause the component to re-render when it changes. It is mainly used for two purposes: 1. Accessing DOM elements directly (for example focusing an input field). 2. Storing values that should persist between renders. The value is stored in the .current property. Unlike useState, updating a useRef value does not trigger a component re-render. In simple words: useRef = store value + access DOM + no re-render.`,
  },
  {
    keywords: ["usememo"],
    answer: `useMemo remembers a value so React doesn't calculate it again. useMemo stores the result of a calculation and reuses it. Imagine if we are student and teacher ask what is 100 * 100. First time we spend 5 min for calculating and get answer 10000. We write on sheet this is usememo. If teacher ask same question again we not need to calculate again i just look on sheet and say answer instantly.`,
  },
  {
    keywords: ["usecallback"],
    answer: `useCallback remembers a function so it is not recreated again. useCallback returns the same function reference between renders. useCallback = remember function, don't recreate.`,
  },
  {
    keywords: ["uselayout", "layout"],
    answer: `useLayoutEffect runs synchronously after DOM updates but before the browser paints. It is used when we need to measure DOM elements or make layout changes. useEffect runs after paint, useLayoutEffect runs before paint.`,
  },
  {
    keywords: ["Custom Hook", "Custom"],
    answer: `A Custom Hook is a function in React that lets us reuse logic in different components. It is just a normal JavaScript function. Its name always starts with use. It can use other React hooks like useState, useEffect. It helps to avoid repeating the same code. A custom hook is a reusable function in React that starts with "use" and allows us to share logic between components.`,
  },
  {
    keywords: ["diff virtual dom and real dom", "real", "virtual"],
    answer: `Virtual DOM is a copy of the real webpage stored in memory. It does not change the screen directly. First, it checks what has changed. Then it updates only the changed part in the Real DOM. Because of this, it is faster and better for performance. Real DOM is the actual DOM of the browser. When any change happens, the whole DOM may re-render. Because of this, it can be slower for large applications. Virtual DOM is a lightweight copy of the Real DOM stored in memory. React first updates the Virtual DOM and compares it with the previous version (diffing). Then React updates only the changed parts in the Real DOM.`,
  },
  {
    keywords: ["real dom", "dom", "real"],
    answer: `Real DOM is the actual webpage structure created by the browser. When we change something, it directly updates the browser screen. It refreshes the UI again. It recalculates the layout. It redraws the page. Because of this, it becomes slow and heavy.`,
  },
  {
    keywords: ["rendering"],
    answer: `Conditional rendering means showing UI based on conditions. Example: if (loading) show loader else show data. Used for authentication, loaders, error messages.`,
  },
  {
    keywords: ["controlled"],
    answer: `Controlled component is a form element controlled by React state. Input value comes from state and updates using onChange. React has full control over form data. Uncontrolled component is controlled by DOM. React uses refs to access values. Less preferred than controlled components.`,
  },
  {
    keywords: ["uncontrolled"],
    answer: `Uncontrolled component is controlled by DOM. React uses refs to access values. Less preferred than controlled components.`,
  },
  {
    keywords: ["lifting state", "lifting"],
    answer: `Lifting State Up is a pattern used when multiple components need to share the same changing data. Instead of keeping the state inside each individual child, we move it to their closest common parent. The parent then passes the state down to the children via props, ensuring that both components are always in sync.`,
  },
  {
    keywords: ["prop drilling", "drilling", "prop"],
    answer: `Prop drilling means passing props through many layers. Makes code messy and hard to maintain. Solved using Context API or Redux.`,
  },
  {
    keywords: ["hoc", "higher order component"],
    answer: `A Higher-Order Component in React is a design pattern where a function takes a component and returns a new enhanced component. It is used to share reusable logic across components while keeping them clean and maintainable.`,
  },
  {
    keywords: ["react router", "router"],
    answer: `React Router is used for navigation. Allows switching pages without reload. Used in SPA applications.`,
  },
  {
    keywords: ["lazy loading", "lazy"],
    answer: `Lazy loading means loading things only when you need them. Lazy loading saves time and internet by not loading unnecessary things. Faster app, Less data usage, Better UX, Happy users.`,
  },
  {
    keywords: ["error boundary", "error"],
    answer: `Error Boundary catches errors so the whole app doesn't crash. If one component breaks, Error Boundary shows a fallback UI instead of breaking the entire app.`,
  },
  {
    keywords: ["one way data flow", "dataflow"],
    answer: `Data flows from parent to child. Child cannot directly modify parent. Makes app predictable.`,
  },
  {
    keywords: ["key"],
    answer: `Key is a unique identifier for list items. Helps React identify which item changed, added, or removed. Without keys, React may re-render wrong elements.`,
  },
  {
    keywords: ["memoization"],
    answer: `Memoization is an optimization technique used to improve performance. It means storing the result of a function and returning the saved result when the same inputs are used again. Instead of calculating the result again and again, the function checks if the result is already stored. If it is stored, it directly returns the saved value. Memoization is useful for expensive calculations or functions that are called many times with the same inputs. In simple words: Memoization means saving function results and reusing them to avoid repeated calculations.`,
  },
  {
    keywords: ["diff memocallback", "memocallback"],
    answer: `useMemo memorizes a value. useCallback memorizes a function. useMemo is used when we want to avoid recalculating heavy values. useCallback is used when passing functions to child components to prevent unnecessary re-renders. Simple: useMemo = remember result. useCallback = remember function.`,
  },
  {
    keywords: ["prevent rerender", "rerender"],
    answer: `To prevent unnecessary re-renders: Use React.memo for components. Use useCallback for functions. Use useMemo for calculated values. Keep state minimal. Split components properly. Avoid inline object and function creation. Main goal is to reduce unnecessary rendering for better performance.`,
  },
  {
    keywords: ["18", "19"],
    answer: `React 18 introduced new features: Concurrent Rendering – allows React to prepare multiple UI updates at the same time. Automatic Batching – React groups multiple state updates into a single render. Transitions – helps mark non-urgent updates so the UI stays responsive. React 19 builds on React 18 focusing more on improving developer experience and full-stack React. Features: use() hook – simplifies handling async data and promises. Better form handling – improved support for forms and actions. Server Actions – allows running server-side logic directly from React components. In simple words: React 18 improved performance and rendering. React 19 improves async handling and full-stack development.`,
  },
  {
    keywords: ["Batching"],
    answer: `React Batching is a performance optimization where React groups multiple state updates together and performs only one re-render instead of multiple re-renders. Instead of rendering twice, React groups these updates and re-renders the component only once. Why React uses Batching: Improves performance, Reduces unnecessary re-renders, Makes the application faster.`,
  },
  {
    keywords: ["Reconciliation"],
    answer: `Reconciliation is the process by which React compares the previous Virtual DOM with the new Virtual DOM after a state or props change, finds the differences, and updates only the necessary parts of the real DOM efficiently.`,
  },
  {
    keywords: ["redux", "toolkit", "useContext"],
    answer: `Redux keeps all data in one box (store) and changes it using proper rules. It is mostly used in large applications where state is complex. useContext is a React Hook that helps share data between components without passing props manually at every level. In Redux Toolkit, first we create a slice that contains state and reducers. Then we configure the store and add the slice reducer. After that, we wrap the app with Provider to connect Redux. Inside components, we use useSelector to read state and useDispatch to update it. For async operations, we use createAsyncThunk. Redux is the core state management library. Redux Toolkit is a wrapper around Redux that makes it easier, cleaner, and more efficient to use.`,
  },
  {
    keywords: ["useContextStore"],
    answer: `First, I create a context using createContext(). Then I create a Provider component where I define the state using useState (or useReducer). I pass the state and functions as a value to the Provider. Then I wrap the App component (or required component tree) with that Provider. Finally, inside child components, I use useContext() to access the shared data directly.`,
  },
  {
    keywords: ["useContext", "context api"],
    answer: `useContext is a React Hook used to access shared data from Context in any component without passing props manually through multiple components. Context API solves the prop drilling problem by creating a global store where data can be shared by many components. Steps: 1. Create Context using React.createContext(). 2. Provide Context wrapping components with Context.Provider. 3. Consume Context using useContext hook inside child components. Context API shares data globally. useContext is used to access that data. It helps avoid prop drilling.`,
  },
  {
    keywords: ["reco"],
    answer: `Context API is used to share data between components without props. Redux is used to manage application state in one central store. Context API is a built-in feature of React, while Redux is an external library. Context is good for small data, Redux is better for big and complex applications.`,
  },
  {
    keywords: ["storeReux"],
    answer: `First i install dependencies. Then i create slices using createSlice and define the initialstate, reducers. Then i use configurestore to create redux store and pass the slice reducers. Then i wrap my component with Provider and pass the store. Then use useSelector for read data and useDispatch for dispatch actions that update the state.`,
  },
  {
    keywords: ["lifecycle", "cycle"],
    answer: `React Lifecycle means the different stages a component goes through. Mounting - Component created and shown on screen. Updating - Component re-renders when state or props change. Unmounting - Component is removed from the screen. In functional components, we manage all these phases using the useEffect hook.`,
  },
  {
    keywords: ["authentication", "auth"],
    answer: `Authentication is used to verify users. In frontend: Store JWT token in secure storage. Use protected routes. Check user role before showing pages. Redirect unauthenticated users to login. Security and role-based access control are important.`,
  },
  {
    keywords: ["design pattern", "design"],
    answer: `Common React design patterns: Higher Order Component (HOC). Render Props. Custom Hooks. Compound Components. These patterns help write reusable and scalable code.`,
  },
  {
    keywords: ["fiber"],
    answer: `React Fiber is the new reconciliation engine introduced in React 16. It improves rendering by breaking work into small units and prioritizing important updates. It enables features like concurrent rendering and better UI responsiveness.`,
  },
  {
    keywords: ["concurrent"],
    answer: `Concurrent rendering allows React to prepare multiple versions of UI in the background. It improves user experience by not blocking the main thread. React 18 introduced features like startTransition and automatic batching for this.`,
  },
  {
    keywords: ["suspense"],
    answer: `Suspense allows components to wait for something before rendering. It is mainly used with React.lazy for code splitting and for handling async data loading. It shows fallback UI like loaders while waiting.`,
  },
  {
    keywords: ["normalization"],
    answer: `Normalization means storing data in a flat structure instead of nested objects. Instead of deeply nested state, we store items by ID in separate objects. This makes updates easier and improves performance.`,
  },
  {
    keywords: ["strict mode", "strict"],
    answer: `React StrictMode is a development tool. It helps detect unsafe lifecycle methods and unexpected side effects. It runs some functions twice in development to find potential bugs.`,
  },
];
