import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";


let TaskDetails = ()=>{
    let {id}=useParams();
    let [task, setTask] = useState({})
    let [error, setError] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:8000/api/tasks/${id}`)
        .then((response)=>{return response.json()})
        .then((data)=>{setTask(data.data)})
        .catch((err)=>{setError(err)})
    },[])



let render_task = ()=>{
    if(task.id){
        return(
            <div className="card my-3" >
    <div className="card-header fw-bolder">
      Task ID : {task.id}
    </div>
    

        <div style={{width: '400px' }} class="mt-3">
            <label class="ms-3 fw-bold" >Title :</label>
             <p className="ms-5 my-2" >{task.title}</p> 
        </div>
        <div  class="mt-3">
            <label class="ms-3 fw-bold" >Description:</label>
            <p class="mx-5 my-2" >{task.description}</p>
         </div>
        <div  class="mt-3">
            <label class="ms-3 fw-bold" >written by :</label>
            <p class="mx-5 my-2" >{task.user.name}</p>
            <p class="mx-5 my-2" >{task.user.email}</p>
        </div>    
</div>
        )
    }
}


return(
    <div>
    {render_task()}
</div>
)
}
export default TaskDetails;