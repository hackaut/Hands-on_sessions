### Topics to be covered:
---

![Logo of React](public/react-svgrepo-com.svg);

- Basics of React: 
  - Why React? 
  - Installation
  - Components
  - JSX syntax
  - Demonstration // use (TailwindCSS) playCDN
- Hooks: 
  - State.
  - Side-effects.
  - Demonstrate.
- Data Fetching:
  - Fetch API.
  - Axios.
  - Demonstrate.
- React Router:
  - BrowserRouter.
  - Route.
  - Link.
  - Demonstrate.



## Getting Started...

### 1. Basics of React
---

a. **What is React?**
- React is a JavaScript library, for creating fast, interactive User Interface for web apps.

b. **Why React?**
- React is developed by facebook developers.
- Provides virtual DOM, which makes rendering fast.
- Divides into resusablke components, incleases code modularity.
- Supports server-side-rendering.
- Simpler to learn & implement.

c. **Installation**
- React can be installed using **npm**. npm stands for Node Package Manager, it manages the packages in Node.js.
- To install React, run the following command in your terminal: (And follow the instruction procedure.)
```bash
npx install create-react-app@latest <your-app-name>
cd <your-app-name>
npm start
``` 
- This will create a new React application in a folder named `<your-app-name>` and start a local development server.

d. **Components**
- Components are the building blocks of a React application.
- A component is a JavaScript function or class that returns a React element.
- Components can accept **props** (properties) to customize their behavior and appearance.

e. **JSX Syntax**
- JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML.
- JSX allows you to write HTML-like code within JavaScript, making it easier to create React elements.
- JSX is transpiled to JavaScript using Babel, a JavaScript compiler.
- Example of JSX:

```jsx
import React from 'react';
function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a simple React application.</p>
    </div>
  );
}
export default App;
```

f. **Demonstration**
- Create a simple React application that displays a heading and a paragraph.
- Use the `create-react-app` command to set up the project.
- Open the `src/App.js` file and replace the default code with the JSX example provided above.
- Run the application using `npm start` and observe the output in the browser.


### Hooks
---

a. **What are Hooks?**
- Hooks are functions that let you use state and other React features in functional components.
- Hooks were introduced in React 16.8 to allow functional components to manage state and side effects.
- Hooks provide a way to use React features without writing class components.

b. **State Hook**
- The `useState` hook allows you to add state to functional components.
- It returns an array with two elements: the current state value and a function to update it.
- Example of using the `useState` hook:

```jsx
import React, { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default Counter;
```

- In this example, we create a `Counter` component that displays a count and a button to increment it.

c. **Side Effects Hook**
- The `useEffect` hook allows you to perform side effects in functional components, such as fetching data or subscribing to events.
- It takes a function as its first argument and an optional array of dependencies as its second argument.
- The effect function runs after the component renders and can return a cleanup function to clean up resources.
- Example of using the `useEffect` hook:

```jsx
import React, { useState, useEffect } from 'react';
function Timer() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <h1>Timer: {seconds} seconds</h1>;
}
export default Timer;
```

- In this example, we create a `Timer` component that increments the seconds every second using the `setInterval` function.
- The cleanup function clears the interval when the component unmounts to prevent memory leaks.

d. **Demonstration**
- Create a simple React application that uses the `useState` and `useEffect` hooks.
- Create a `Counter` component that increments a count when a button is clicked.
- Create a `Timer` component that increments seconds every second.

### Data Fetching
---

a. **Fetch API**
- The Fetch API is a modern way to make HTTP requests in JavaScript.
- It returns a Promise that resolves to the Response object representing the response to the request.
- Example of using the Fetch API to fetch data from an API:

```jsx
import React, { useState, useEffect } from 'react';
function DataFetcher() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <h1>Data Fetcher</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default DataFetcher;
```

- In this example, we create a `DataFetcher` component that fetches data from a placeholder API and displays it in a list.

b. **Axios**
- Axios is a popular library for making HTTP requests in JavaScript.
- It provides a simple API and supports features like interceptors, request cancellation, and automatic JSON transformation.

> Note: Try to use axios instead of fetch API, because it is more reliable and easy to use.

- To use Axios, you need to install it using npm:

```bash
npm install axios
```

- Example of using Axios to fetch data from an API:

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function DataFetcher() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setData(response.data));
  }, []);
  return (
    <div>
      <h1>Data Fetcher</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default DataFetcher;
```

- In this example, we create a `DataFetcher` component that fetches data from a placeholder API using Axios and displays it in a list.

c. **Demonstration**
- Create a simple React application that fetches data from an API using both the Fetch API and Axios.
- Create a `DataFetcher` component that fetches data from a placeholder API and displays it in a list.
- Compare the two methods and discuss their advantages and disadvantages.

### React Router
---

a. **What is React Router?**
- React Router is a library for routing in React applications.
- It allows you to create single-page applications with navigation and dynamic routing.
- React Router provides components like `BrowserRouter`, `Route`, and `Link` to manage routing in your application.

b. **BrowserRouter**
- The `BrowserRouter` component is the main component that wraps your entire application and enables routing.
- It uses the HTML5 history API to keep your UI in sync with the URL.
- Example of using `BrowserRouter`:

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
export default App;
```
- In this example, we create a `Router` component that defines routes for the home page, about page, and a fallback for 404 pages.

c. **Route**
- The `Route` component is used to define a route in your application.
- It takes a `path` prop that specifies the URL path and a `component` prop that specifies the component to render when the path matches.
- Example of using `Route`:

```jsx
import React from 'react';
import { Route } from 'react-router-dom';
function Home() {
  return <h1>Home Page</h1>;
}
function About() {
  return <h1>About Page</h1>;
}
function NotFound() {
  return <h1>404 Not Found</h1>;
}
export { Home, About, NotFound };
```
- In this example, we create three components: `Home`, `About`, and `NotFound` to represent different pages in our application.

d. **Link**
- The `Link` component is used to create navigation links in your application.
- It takes a `to` prop that specifies the URL path to navigate to when the link is clicked.
- Example of using `Link`:

```jsx
import React from 'react';
import { Link } from 'react-router-dom';
function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}
export default Navigation;
```

- In this example, we create a `Navigation` component that contains links to the home and about pages.

e. **Demonstration**
- Create a simple React application that uses React Router for navigation.
- Create a `Navigation` component that contains links to the home and about pages.
- Create a `Home` component that displays a welcome message.
- Create an `About` component that displays information about the application.
- Create a `NotFound` component that displays a 404 error message.
- Use the `BrowserRouter`, `Route`, and `Link` components to set up routing in your application.
- Test the navigation by clicking the links and observing the URL changes without reloading the page.

### Conclusion
---

- React is a powerful library for building user interfaces.
- Hooks provide a way to manage state and side effects in functional components.
- Data fetching can be done using the Fetch API or Axios.
- React Router allows you to create single-page applications with navigation and dynamic routing.
- Practice building simple React applications to reinforce your understanding of the concepts covered in this session.
- Explore the official React documentation for more advanced topics and best practices.

### References
---

- React documentation: [React Docs](https://reactjs.org/docs/getting-started.html)
- React Router documentation: [React Router Docs](https://reactrouter.com/web/guides/quick-start)
- Axios documentation: [Axios Docs](https://axios-http.com/docs/intro)
- Tailwind CSS documentation: [Tailwind CSS Docs](https://tailwindcss.com/docs/installation)
