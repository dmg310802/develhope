import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserName from './username.jsx'
import UserInfoTable from './userInfoTable.jsx'

function App() {
  
  const initialUser = {name: "Daniel", lastName: "Martinez"}
  const [user,setUser] = useState(initialUser)


  const handleClick = () => {
      setUser({
        ...user,
        name: "Pedro",
      })
  }

  return (
    <>
    <UserName name={user.name}/>

    <UserInfoTable user={user}/>

    <button onClick={handleClick}>Change user</button>

    </>
  )
}

export default App
