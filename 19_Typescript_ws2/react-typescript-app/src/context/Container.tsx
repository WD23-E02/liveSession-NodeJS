
import { useState } from 'react'
import { MyContext } from './context'
import {UserType,ProductType} from "./context"

export default function Container({children}: {children: JSX.Element}) {
    const [user, setUser] = useState<UserType[]>([])
    const [products, setProducts] = useState<ProductType[]>([])

  return (
    <MyContext.Provider value={{user,setUser,products, setProducts}}>
        {children}
    </MyContext.Provider>
  )
}

