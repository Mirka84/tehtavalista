

export default function TodoTable (props) {

    

    return(
        <div>
        <table>
        <tbody>
            <tr><th>Todo</th><th>Date</th></tr>
            {props.todoList.map((todo, index) => 
                <tr key={index}>
                <td>{todo.desc}</td>
                <td>{todo.date}</td>
                <td><button onClick={()=>props.deleteTodo()}>Delete</button></td>
            </tr>)}
        </tbody>
        </table> 


        </div>
    )
}