
import { useEffect, useRef, useState } from 'react'
import './App.css'
import Child from './Child'
import Login from './Login'

function App() {
 
  const [counter, setCounter] = useState<number>(0)

/*   const [user, setUser] = useState<null | {name:string, age:number}>(null)
  
  const [todoList, setTodoList] = useState<{id:number, text:string,done:boolean}[]>([]) */


const printName = (name:string)=>{
  console.log(name)
}
  
const myRef = useRef<HTMLHeadingElement>(null)

useEffect(()=>{
console.log(myRef.current)
},[])

  return (
    <>
     <h1 ref={myRef} >React TypeScript</h1>
    {/*  <Login/> */}
     {/* <Child counter = {counter} setCounter= {setCounter} printName={printName}/> */}
    </>
  )
}

export default App
