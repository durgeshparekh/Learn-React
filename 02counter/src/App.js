import React, { useState } from 'react';
import './App.css';

function App() {
    // State to keep track of the counter value
    const [counter, setCounter] = useState(0);
    // State to keep track of messages
    const [message, setMessage] = useState('');

    // Function to increment the counter
    const addValue = () => {
        if (counter >= 20) {
            setMessage('Maximum value reached! Cannot go above 20.');
            // Clear message after 3 seconds
            setTimeout(() => setMessage(''), 3000);
        } else {
            setCounter(counter + 1);
            setMessage(''); // Clear any existing message
        }
    };

    // Function to decrement the counter
    const removeValue = () => {
        if (counter <= 0) {
            setMessage('Minimum value reached! Cannot go below 0.');
            // Clear message after 3 seconds
            setTimeout(() => setMessage(''), 3000);
        } else {
            setCounter(counter - 1);
            setMessage(''); // Clear any existing message
        }
    };

    // Function to reset the counter
    const resetValue = () => {
        setCounter(0);
        setMessage('Counter has been reset to 0!');
        // Clear message after 2 seconds
        setTimeout(() => setMessage(''), 2000);
    };

    return (
        <div className="app">
            <div className="container">
                <h1 className="title">Counter App</h1>

                <div className="counter-display">
                    <span className="counter-value">{counter}</span>
                </div>

                {/* Message display */}
                {message && (
                    <div className={`message ${counter >= 20 ? 'error' : counter <= 0 ? 'error' : 'success'}`}>
                        {message}
                    </div>
                )}

                <div className="button-group">
                    <button
                        className="btn btn-increment"
                        onClick={addValue}
                    >
                        +
                    </button>

                    <button
                        className="btn btn-reset"
                        onClick={resetValue}
                    >
                        Reset
                    </button>

                    <button
                        className="btn btn-decrement"
                        onClick={removeValue}
                    >
                        -
                    </button>
                </div>

                <div className="info">
                    <p>Current count: <strong>{counter}</strong></p>
                    <p className="limits">Range: 0 to 20</p>
                </div>
            </div>
        </div>
    );
}

export default App;
