import React, { createContext, useState } from 'react'
export const reqVal = createContext();

const Context = ({children}) => {
    const[ cart, setCart] = useState([])
  return (
    <reqVal.Provider value={{cart, setCart}}>
      {children}
    </reqVal.Provider>
  )
}

export default Context
