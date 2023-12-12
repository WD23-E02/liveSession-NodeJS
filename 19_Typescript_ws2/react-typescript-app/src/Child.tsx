/* let url = "http://ljasdkjfagfkjgdkf"
url= 23 */

import { CSSProperties, Dispatch, SetStateAction } from "react";

//Type Alias
/* type ChildPropsType = {
  backgroundColor: string;
  fontSize: number;
  borderRadius: string;
}; */

/*  type Color =  "red" | "green" | "aqua"; */
/*type Mixed  = string | number | boolean 

interface colors {
  color:  "red" | "green" | "aqua";
} */

//Interface 
/* interface IChildProps  {
  backgroundColor: Color;
  fontSize: number;
  borderRadius: string;

}; */
/* import {StyleProps} from "./all.types" */

/* export default function Child(props: {counter: number , setCounter: Dispatch<SetStateAction<number>> , printName : (name:string)=>void }) { */

export default function Child({counter,setCounter,printName}: {counter: number , setCounter: Dispatch<SetStateAction<number>> , printName : (name:string)=>void }) {


  return <div>
    <h3>This is a child component</h3>
    <h2>counter : {counter}</h2>
    <button onClick={()=>setCounter(counter+1)}>increment</button>
  </div>;
}
