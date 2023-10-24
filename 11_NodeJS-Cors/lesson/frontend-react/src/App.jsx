
import { useEffect, useState } from 'react'
import './App.css'

function App() {
 const [users,setUsers] = useState([])

 useEffect(()=>{
  fetch("http://localhost:4000/users")
  .then(res=>res.json())
  .then(result=>setUsers(result))
 },[])


 const register= (e)=>{
  e.preventDefault()
  const user = {
    firstName:e.target.first.value, 
    lastName: e.target.last.value,
    email:e.target.email.value,
    password:e.target.password.value
  }
fetch("http://localhost:4000/register", 
{
  method: "POST", 
  headers: {"Content-Type":"application/json"}, 
  body: JSON.stringify(user)

}) .then(res=>res.json())
.then(result=>console.log(result))


}

  return (
    <>
      <h1>React App</h1>
      <ul>
        {users.map(user=><li>{user.name}</li>)}
      </ul>
      <form onSubmit={register}>
      <label>First Name: <input type="text" name="first"/></label><br/>
        <label>Last Name: <input type="text" name="last"/></label><br/>
        <label>Email: <input type="email" name="email"/></label><br/>
        <label>Password: <input type="password" name="password"/></label><br/>
        <button>register</button>
      </form>
    </>
  )
}

export default App
