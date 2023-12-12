import { createContext } from "react";
export type UserType = {
    email: string, 
    _id: string, 
    firstName: string, 
    lastName: string
}
export type ProductType = {
    title: string,
    price: number, 
    rating: number, 
    description: string
}


type ContextType = {
    user: UserType[],
    setUser : React.Dispatch<React.SetStateAction<UserType[]>>
    products :ProductType[] 
    setProducts :React.Dispatch<React.SetStateAction<ProductType[]>> 
}


export const MyContext = createContext<null | ContextType>(null)