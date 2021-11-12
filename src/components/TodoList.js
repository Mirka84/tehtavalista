import React from 'react'; 
import { useState } from 'react';

export default function TodoList ({ addTodo }){

const [todo, setTodo]=useState({ desc: "", date: ""});




    return (
        <div>
        <form onSubmit={addTodo}>
            <input type="text" name="desc" onChange={(event) => {
                setTodo({...todo, [event.target.name]: event.target.value});
              }
            } 
            value={todo.desc} placeholder="Todo"/>
            <input type="date" name="date" onChange={(event) => {
                setTodo({...todo, [event.target.name]: event.target.value});
              }
            } value={todo.date} placeholder="Date"/>
            <input type="submit" value="Add"/>
        </form>  

        </div>
    )
}
