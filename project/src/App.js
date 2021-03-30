import React from "react";
import Header from "./components/Header";
import TodoItemsList from "./components/TodoItemsList";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: ["item", "dsa"],
      todoName: "",
    }
  }

  removeTodoItem = (todoName) => {
    const { items } = this.state;
    const index = items.indexOf(todoName);
    const newItems = [...items];

    newItems.splice(index, 1);
    this.setState({
      items: newItems
    })
  }

  handleChange = (e) => {
    this.setState({
      todoName: e.target.value
    }
    )
  }

  onAddBtn = () => {
    const { todoName, items } = this.state;
    if (!todoName || items.includes(todoName)) {
      return
    }

    const newItems = [...items]
    newItems.push(todoName)
    this.setState({
      todoName: "",
      items: newItems
    })
  }


  render() {
    return (
      <div className="App">
        <Header onAddBtn={this.onAddBtn} todoName={this.state.todoName} handleChange={this.handleChange} />
        <TodoItemsList items={this.state.items} removeTodoItem={this.removeTodoItem} />
      </div>
    );
  }
}

export default App;
