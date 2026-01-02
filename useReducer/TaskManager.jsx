import React,{useReducer, useState} from 'react';
import { TaskReducer,initialState } from './TaskReducer';
function TaskManager(){
  const [input,setInput]=useState("");
  const [state,dispatch]=useReducer(TaskReducer,initialState);
  const [editId,setEditId]=useState(null);


  const handleAddOrEdit=()=>{
    if(editId){
      dispatch({
        type:'EDIT_TASK',
        payload:{id: editId , text:input}
      });
      setEditId(null);
      setInput("");
    }
    else{
      dispatch({
        type:"ADD_TASK",
        payload:input
      });
      setInput("");
    }
  }
  return(
    <div>
      <h2>Task Manager</h2>
      <input type="text"
      value={input}
      placeholder='Enter Task'
      onChange={(e)=>setInput(e.target.value)} />
      <button onClick={handleAddOrEdit}>{editId?"update task":"Add Task"}</button>


      <ul>
        {
          state.tasks.map(task=>(
            <li key={task.id}>{task.text}
            <button onClick={()=>{setInput(task.text);
              setEditId(task.id)
            }}>Edit</button>

            <button onClick={()=>dispatch({type:"DELETE_TASK",payload:task.id})}>Delete</button>
            </li>
  
            
          ))
        }
      </ul>
    </div>
  )
}
export default TaskManager