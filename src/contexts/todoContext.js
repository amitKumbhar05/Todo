import { createContext, useContext } from "react";

export const todoContext = createContext({
    todos : [
        {
            id: 1,
            todo : 'name',
            complete : false
        }
    ],
    addTodo : (todo)=>{},
    deleteTodo : (id)=>{},
    toggleComplete : (id)=>{},
    updateTodo : (id,todo)=>{}
});

export const useTodo = ()=>{
    return useContext(todoContext);
}

export const TodoContextProvider = todoContext.Provider;