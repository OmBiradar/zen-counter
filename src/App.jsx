import React, { useState } from 'react';
import './App.css'
    
function App() {
    const [count, setCount] = useState(0);

    const handleIncrease = () => setCount(count + 1);
    const handleDecrease = () => setCount(count > 0 ? count - 1 : 0);
    const handleReset = () => setCount(0);

    return (
        <div className="app">
        <div className="counter">
            {count}
        </div>
        <div className="buttons">
            <button className="btn" onClick={handleIncrease}>Increase</button>
            <button className="btn" onClick={handleReset}>Reset</button>
            <button className="btn" onClick={handleDecrease}>Decrease</button>
        </div>
        </div>
    );
}

export default App
