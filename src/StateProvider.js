import React , {createContext , useContext , useReducer} from 'react';

export const StateContext = createContext();

console.log(StateContext);

export const StateProvider = ({reducer , initalState , children})=> (

    <StateContext.Provider value={useReducer(reducer , initalState)}>
    {children}
    </StateContext.Provider>
)

export const useStateValue =()=> useContext(StateContext)