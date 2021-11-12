import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoTable from './components/TodoTable';

function App() {
  const [todo, setTodo]=useState({ desc:"", date:""});
  const [todoList, setTodoList] = useState([]);


  const addTodo = (e) => {
    e.preventDefault(); 

    setTodoList([...todoList, todo]);
  
  }



// delete
const deleteTodo = (index) => {
  console.log('delete', index);
  setTodoList(todoList.filter((todo, i) => i !== index)); 
} //

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <TodoList addTodo={addTodo} />
        <TodoTable todos={todoList} />
      </header>
    </div>
  );
}

export default App;
