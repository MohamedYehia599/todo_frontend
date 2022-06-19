import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/home';
import Tasks from './Components/tasks';
import TaskDetails from './Components/taskDetails';
import NotFound from './Components/notFound';
import TaskCreate from './Components/taskCreate';
import TaskUpdate from './Components/taskUpdate';
import TaskDelete from './Components/taskDelete';

function App() {
  return (    
    <div className='container' >
     <BrowserRouter>
     <Routes>
     <Route path='/tasks/:id'element={<TaskDetails/>}/>
     <Route path='/tasks'element={<Tasks/>}/>
     <Route path=''element={<Home/>}/>
     <Route path='/home'element={<Home/>}/>
     <Route path='/home'element={<Home/>}/>
     <Route path='/tasks/create'element={<TaskCreate/>}/>
     <Route path='/tasks/:id/update'element={<TaskUpdate/>}/>
     <Route path='/tasks/:id/delete'element={<TaskDelete/>}/>
     <Route path='*'element={<NotFound/>}/>

     </Routes>
     
     </BrowserRouter>
     </div >
  );
}

export default App;
