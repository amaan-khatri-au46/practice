import React from 'react'
import "./App.css"
// import { Custom } from './hooks/Custom'
import { MemoHook } from './useMemo/MemoHook'
import Counter from './hooks/UseReducer'

export const App = () => {
  return (
    <div className='App'>
      {/* <Custom/><br /><br /><br /> */}
      <MemoHook/>
      <Counter/>
    </div>
  )
}
