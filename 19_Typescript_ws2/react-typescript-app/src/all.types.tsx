import { CSSProperties } from "react"

export type StyleProps = {
    style : CSSProperties,
    title: string
  }



  // type intercestion
/* type UserType = {
  name : string, 
  age: number
}
type StudentType =UserType & {
  className : string 
}

interface UserInterface { 
  name : string 
  age: number
}

//interface extends
interface StudentInterface extends UserInterface{
  className: string
} */

/* OMIT
EXCLUDE 
RECORD<> */