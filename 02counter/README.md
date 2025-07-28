# Counter App - React Beginner Project

A simple counter application built with React to demonstrate basic state management concepts.

## Features

- ✨ Minimalist and clean UI design
- ➕ Increment counter
- ➖ Decrement counter
- 🔄 Reset counter to zero
- 📱 Responsive design

## Learning Concepts

This project demonstrates the following React concepts:

### 1. useState Hook

```javascript
const [counter, setCounter] = useState(0);
```

- `useState` is a React Hook that lets you add state to functional components
- `counter` is the current state value
- `setCounter` is the function to update the state

### 2. Event Handling

```javascript
const addValue = () => {
  setCounter(counter + 1);
};
```

- Functions that handle button clicks
- State updates trigger re-renders

### 3. Component Structure

- Clean, readable component organization
- Separation of logic and presentation

## How to Run

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## File Structure

```
02counter/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.js             # Main component with counter logic
│   ├── App.css            # Styles for the app
│   └── index.js           # Entry point
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## Key State Management Concepts

1. **State**: Data that can change over time
2. **setState**: Function to update state and trigger re-render
3. **Immutability**: Always create new state, don't mutate existing state
4. **Event Handling**: Responding to user interactions

## Next Steps

After understanding this basic counter, you can:

- Add validation (prevent negative numbers)
- Add step increment/decrement
- Save counter value to localStorage
- Add multiple counters
- Learn about useEffect hook for side effects
