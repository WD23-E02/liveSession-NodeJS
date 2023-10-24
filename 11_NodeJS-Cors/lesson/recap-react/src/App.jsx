
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

function App() {
  
 /*  const [users,setUsers] = useState([])
  useEffect(()=>{
    fetch("http://localhost:5000/users")
    .then(res=>res.json())
    .then(result=>setUsers(result))

  },[]) */

  return (
    <>
     <h1>React app</h1>
   <a href="http://localhost:5000/users" target="_blank">/users</a>
   {/*  <div style={{width:"400px"}}> */}
  {/*     <code> 
      {JSON.stringify(users,null,2)}</code> */}
   {/*    {users.map(user=><p>{user.name}</p>)}
    </div> */}
    </>
  )
}

export default App
