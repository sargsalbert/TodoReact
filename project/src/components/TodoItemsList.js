import TodoItem from "./TodoItem"


const TodoItemsList = (props) =>{

    const todoItems = props.items.map(item => (
            <TodoItem key={item} item={item} removeTodoItem={props.removeTodoItem}/>
        )
    )
    
    return(
        <ul>
            {todoItems}
        </ul>
    )
}

export default TodoItemsList