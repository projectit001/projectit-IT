import { useState } from 'react'
import './App.css'
import { calculateSomething, greetUser, formatDate } from './utils'

function App() {
  // 1. เขียนใน Component (ใช้ State ได้)
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>{greetUser("User")}</p>
      <p>Today is: {formatDate(new Date())}</p>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increase</button>
      <p>Result: {calculateSomething(10)}</p>
    </div>
  )
}

export default App