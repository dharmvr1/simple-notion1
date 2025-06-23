import { createContext, useState } from "react";

export const MainContext=createContext<any>(null)

export default function ContextProvider({children}:{children:React.ReactNode}){
    const [openTask,setOpenTask]=useState(false)

    return (
        <MainContext.Provider value={{openTask,setOpenTask}} >
          {children}
        </MainContext.Provider>
    )
}