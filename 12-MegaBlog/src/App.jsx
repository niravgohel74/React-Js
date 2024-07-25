import './App.css'

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL);
  console.log(import.meta.env.VITE_APPWRITE_URL);

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl mb-4'>A blog app with appwrite</h1>
    </>
  )
}

export default App
