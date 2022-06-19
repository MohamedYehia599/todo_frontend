import { useEffect, useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
let TaskCreate = ()=>{
 let navigation = useNavigate()
    
        let [users, setUsers] = useState({})
        let [error, setError] = useState({})
        let [title,setTitle] = useState({})
        let [description,setDescription] = useState({})
        let [user_id,setUser_id] = useState({})

        useEffect(()=>{
            fetch(`http://localhost:8000/api/users`)
            .then((response)=>{return response.json()})
            .then((data)=>{setUsers(data.data)})
            .catch((err)=>{setError(err)})
        },[])


let render_users= ()=>{
    if(users[0]){
        return users.map((user)=>{
            return (
                <option value ={user.id} name="user_id" key={user.id}>{user.name}</option> 
            )
        })
    }
    
}

let show_errors=()=>{
    if (error) {
        let errors_arr = [];

       for (let [key ,value] of Object.entries(error)) {

            errors_arr.push(value)

          }

          return errors_arr.map((err)=>{
            return(
                <li>{err}</li>       
            )
          })
       
    }
}

let send_request = (e)=>{
e.preventDefault();
let data={
    "title":title,
    "description":description,
    "user_id":user_id
}

    axios.post("http://localhost:8000/api/tasks",data).then((response)=>{
        if(response.status ===201){
            navigation('/tasks')
        }

    }).then((data)=>{}).catch((err)=>{setError(err.response.data.errors); })
}

let render_form=()=>{
    return(

    
    <form encType="multipart/form-data" action="#" method="post" onSubmit={send_request} >

<div className="mb-3 mt-5">
  <label className="form-label">Title</label>
  <input onChange={(e)=>setTitle(e.target.value)}  name="title" type="text" className="form-control"  placeholder="do sports"/>

</div>
<div className="mb-3">
  <label  className="form-label">Description</label>
  <textarea onChange={(e)=>setDescription(e.target.value)} name="description" className="form-control" placeholder=" hit the gym and circulate your blood for a complete hour" rows="3"></textarea>
</div>

<div className="mb-3">
  <label  className="form-label">Task Creator</label>
  <select onChange={(e)=>setUser_id(e.target.value)} name="user_id" className="form-select" aria-label="Default select example">
  <option value="" name="user_id">---</option>
        {render_users()}
     
  

  
</select>
</div>
<button className="btn btn-success">Submit</button>
</form>

    )
}


return (
    <div>
        {render_form()}
        {show_errors()}
    </div>

)
}
export default TaskCreate;

 