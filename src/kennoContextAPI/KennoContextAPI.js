import React,{createContext,useState} from 'react'

export const  KennoContext =createContext()

export function KennoProvider({children}) {
 
    const [totalMoney,setTotalMoney]=useState(50)
    return (
    <KennoContext.Provider value={[totalMoney,setTotalMoney]}>
        {children}
    </KennoContext.Provider>
    )
}

 
