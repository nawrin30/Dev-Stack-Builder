# Dev Stack Builder
Dev Stack is a modern and responsive web application that helps developers explore different technologies and build their ideal development stack. Users can browse technologies, view their details, and add or remove technologies from their personal stack.
### LocalHost :  http://localhost:5173/
### Technologies Used

- React.js
- JavaScript (ES6+)
- Vite
- CSS
- React-Toastify
- JSON
## Features
- Sticky responsive navbar with desktop and mobile layouts
- Hero/banner section with shared orange → pink → violet gradient
- 12 technology cards loaded from public/technologies.json
- Responsive 3-column / 2-column / 1-column technology grid
- Your Stack sidebar with add, remove, duplicate warning and Remove All
- Loading spinner while the JSON file is fetched
- React-Toastify feedback messages
- Responsive footer matching the supplied UI

## Run

```bash
npm install
npm run dev
```



## React questions

### 1. What is JSX, and why is it used in React?
JSX lets us write HTML-like UI inside JavaScript. React uses it to describe what the interface should look like.
### 2. What is the difference between props and state?
Props are values passed from a parent component to a child. State is data owned by a component that can change and cause the UI to update.

### 3. What does useState do, and where did you use it?
UseState stores changing data in a component. Here it stores the loaded technologies, selected stack items, loading state, and mobile menu state.

### 4. What does useEffect do, and why did you need it to load the JSON data?
UseEffect runs side effects after rendering. It is used here to fetch `technologies.json` when the app starts.

### 5. Why does every item in a .map() list need a unique key prop?
React uses the key to identify each list item between renders, so it can update the correct item efficiently.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI based on a condition. The stack shows 'Your stack is empty.' when 'stack.length === 0'; otherwise it shows stack items.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back?
The parent passes data through props, such as 'technology' and 'selected'. A child can send information back by calling a callback prop such as onAdd(technology).

