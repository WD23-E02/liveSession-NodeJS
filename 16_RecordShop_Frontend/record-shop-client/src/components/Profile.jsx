import React, { useContext } from 'react'
import { MyContext } from '../context/context'

export default function Profile() {
    const {user} = useContext(MyContext)
  return (
    <div>
        <h1>Profile Page</h1>
        
    </div>
  )
}
