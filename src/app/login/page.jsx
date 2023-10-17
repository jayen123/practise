'use client'
import React from 'react'
import { useState } from 'react'
export default function Login() {
  const [first, setfirst] = useState(0)
  return (
    <>
        <h1 className='text-7xl text-teal-500 font-bold'>{first}</h1>

        <button onClick={() => setfirst(first + 1)}>Increment</button> 
        <br />
        <button onClick={() => setfirst(first - 1)}>Decrement</button>
    </>
  )
}
