import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1 className='text-3xl bg-green-500 p-4'>React Context Api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
