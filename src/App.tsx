import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [circleClicked, setCircleClicked] = useState(false);
  const circleRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!circleRef.current.contains(event.target) && circleClicked) {
        decrementCount();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [circleClicked]);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
    setCircleClicked(true);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="circle-container">
      <div className="circle" ref={circleRef} onClick={incrementCount}>
        <span className="count">{count}</span>
        <span className="description">ITEMS</span>
      </div>
    </div>
  );
};



export default App
