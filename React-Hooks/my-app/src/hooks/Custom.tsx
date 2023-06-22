import React from 'react'
import { MyCustomHooks } from './MyCustomHooks'

export const Custom:React.FC = () => {
  const {withdraw, balance, deposit} = MyCustomHooks()
  return (
    <div className='App'>
      <h1>Bank Account</h1>
      <p>Available {balance}</p>
      <button onClick={()=>withdraw(700)} style={{margin:10}}>Withdraw 700</button>
      <button onClick={()=>deposit(100)} style={{margin:10}}>deposit 100</button>
    </div>
  )
} 

