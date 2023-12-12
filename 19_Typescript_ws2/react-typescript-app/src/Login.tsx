import { useState } from "react"


export default function Login() {
  const [inputValue , setInputValue] = useState<string>("")

  const getInputValue=(e:React.ChangeEvent<HTMLInputElement> )=>{
        setInputValue(e.target.value)
  }


  const formSubmission =(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      console.log(inputValue)
  }

  const printSomething = (e:React.MouseEvent<HTMLHeadingElement>)=>{
    console.log(e.target)
  }
  return (
    <div>
        <h2 onClick={printSomething}>Login Page</h2>
        <form onSubmit= {formSubmission}>
            <label>UserName: <input type="text" name="username" onChange={getInputValue} /></label><br />
            <button>submit</button>
        </form>
    </div>
  )
}
