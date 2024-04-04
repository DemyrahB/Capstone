import { createContext, useContext, useReducer } from "react"

export default function StateProvider(){
    const StateContext = createContext()

    const StateProvider = ({reducer,initialState,children}) => (
        <StateContext.Provider value={useReducer(reducer,initialState)}>
            {children}
        </StateContext.Provider>
    )

    const useStateValue = () => useContext(StateContext)
    
    return(
        <>
        
        </>
    )
}