import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "Nirav",
    age: 23
  }

  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl mb-4'>Tailwind css test</h1>
      <Card username="Nirav Gohel" btnText="click me" />
      <Card username="NG" btnText="Visit me" />
      

    </>
  )
}

export default App
