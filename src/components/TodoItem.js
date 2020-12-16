import React from "react"

function TodoItem(props) {
     
    return(
     <form>
     <div> 
     <ul><p>Please enter long URL<input type="text" name="input" id="input" /><input type="button" value="submit"  />{props.todo.title}
         </p>Short URL <input type="text" name="output" id="output" /></ul>
     </div>
     </form>
    )  
}






export default TodoItem
