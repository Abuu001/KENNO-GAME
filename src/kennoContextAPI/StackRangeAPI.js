import React,{createContext,useState} from 'react'

export const  StackRangeContext =createContext()

export function StackRangeProvider({children}) {
 
    const [range,setRange]=useState(["a","b"])
    return (
    <StackRangeContext.Provider value={[range,setRange]}>
        {children}
    </StackRangeContext.Provider>
    )
}