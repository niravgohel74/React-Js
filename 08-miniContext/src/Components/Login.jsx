import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div>
        <h2 className='text-2xl bg-gray-900 text-white mb-4'>Login</h2>
        <input className='w-96 border border-orange-500 pb-2' type='text' 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username'/>

        {" "}

        <input className='w-96 border border-orange-500 pb-2' type='text'
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password'/>

        <button onClick={handleSubmit} className='bg-orange-600 text-black px-4 py-1 pb-2 shrink-0'>Submit</button>
    </div>
    
  )
}

export default Login