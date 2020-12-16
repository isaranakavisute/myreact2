import React from "react"
import TodosList from "./TodosList";
import Header from "./Header"

class TodoContainer extends React.Component {
 state = {
 todos: [
   {
     id: 1,
     title:"",
     completed: true
   }
 ]
};


 render(){
  return (
   <div>
    <Header />
    <TodosList 
      todos={this.state.todos}
      handleChangeProps={this.handleChange} 
    />
   </div>
  )
 }
}

export default TodoContainer
