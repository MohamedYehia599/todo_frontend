import {NavLink} from 'react-router-dom';
let Task= (props)=>{

    return(
        <tr>
        <td>{props.taskInfo.id}</td> 
        <td>{props.taskInfo.title}</td> 
        <td>{props.taskInfo.description}</td> 
        <td>{props.taskInfo.user.name}</td> 
        <td>
            <div className='d-flex my-2'>
            <NavLink className={'btn btn-info'} to={`${props.taskInfo.id}`}>details</NavLink>
            <NavLink className={'btn btn-primary mx-2'} to={`${props.taskInfo.id}/update`}>update</NavLink>
            <NavLink className={'btn btn-danger'} to={`${props.taskInfo.id}/delete`}>delete</NavLink>
            </div>

        </td>
     </tr>
    )
}
export default Task;