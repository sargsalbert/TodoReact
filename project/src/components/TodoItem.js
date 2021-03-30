

const TodoItem = (props) =>{

    return(
        <li>
            {props.item}
            <button onClick={() => {props.removeTodoItem(props.item)}}>X</button>
        </li>
    )
}

export default TodoItem