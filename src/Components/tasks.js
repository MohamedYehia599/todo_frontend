import { useEffect, useState } from "react";
import Task from './task'
import { NavLink } from "react-router-dom";
let List_tasks = ()=>{

    let [tasks, setTasks] = useState({})
    let [error, setError] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:8000/api/tasks`)
        .then((response)=>{return response.json()})
        .then((data)=>{setTasks(data.data)})
        .catch((err)=>{setError(err)})
    },[])

    let render_tasks= ()=>{
        if(tasks[0]){
            return tasks.map((element)=>{
                return(
                    <Task key={element.id} taskInfo = {element} />
                )
            })
    }else if (error){
        return 'check your  connection';
    }else return 'loading'

}

    let render_page=()=>{
return(


<div className="card my-3" >
    <div className="card-header">
      Tasks
    </div>
<table className="table table-striped">
    <thead>
        <th>ID</th>
        <th>Title</th>
        <th>Description</th>
        <th>User-Name</th>
        <th>actions</th>
    </thead>
<tbody>
    {render_tasks()}
 

</tbody>




</table>
{/* <a className="btn btn-success">Add Task</a> */}
<NavLink className={'btn btn-success'} to='/home'>add</NavLink>
</div>
)



    }



    return(
        <div>
    {render_page()}
        </div>
        
    )

}


export default List_tasks;