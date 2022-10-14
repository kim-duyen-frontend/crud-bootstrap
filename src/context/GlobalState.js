import React, { createContext, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoReducer from "./reducers/TodoReducer";

const initialState = {
    users: [
        {
            id: uuidv4(),
            name: "Kiến Vinh"
        },
        {
            id: uuidv4(),
            name: "Thu Hiền"
        },
        {
            id: uuidv4(),
            name: "Kim Duyên"
        }
    ]
}
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TodoReducer, initialState);
    return (
        <GlobalContext.Provider value={{ users: state.users }}>
            {children}
        </GlobalContext.Provider>
    )
}