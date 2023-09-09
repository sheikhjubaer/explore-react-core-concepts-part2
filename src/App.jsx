import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'
// import Friend from './Friend'

function App() {
  
  // Event experiments handler Starts 
  function handleClick() {
    alert('button clicked');
  }

  const handleClick2 = () => {
    alert('button 2 clicked');
  }

  const addToFive = (num) => {
    alert(num + 5);
  }
  // Event experiments handler Ends 

  return (
    <>
      <h3>React Core Concepts 2</h3>

      <Friends></Friends>
      {/* How to use useEffect where we are using API from JSON placeholder to fetch the data */}
      <Users></Users>

      {/* How to use State Hook -> useState() Starts */}
      <Team></Team>

      <Counter></Counter>
      {/* How to use State Hook -> useState() Ends */}

      {/* Event experiments handler Starts  */}
      {/* Way 1 */}
      <button onClick={handleClick}>Click Me 1</button>
      {/* Way 2 */}
      <button onClick={handleClick2}>Click Me 2</button>
      {/* Way 3 */}
      <button onClick={() => {alert('third button clicked')}}>Click Me 3</button>
      {/* Way 4 -> Using arrow function in JSX */}
      <button onClick={() => addToFive(3)}>Four</button>
      {/* Event experiments handler Ends  */}
    </>
  )
}

export default App
