import axios from 'axios'
import {useNavigate,useParams} from 'react-router-dom';
let TaskDelete=()=>{

   let {id}=useParams();
   let navigation = useNavigate();


    axios.delete(`http://localhost:8000/api/tasks/${id}`).then((response)=>{
        if(response.status ===200){
            navigation('/tasks')
        }
    
    }).then((data)=>{}).catch((err)=>{navigation('/notfound')})




}
export default TaskDelete;