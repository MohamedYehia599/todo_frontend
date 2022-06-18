import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/home';
import Tasks from './Components/tasks';
import TaskDetails from './Components/taskDetails';
import NotFound from './Components/notFound';


function App() {
  return (    
    <div className='container' >
     <BrowserRouter>
     <Routes>
     <Route path='/tasks/:id'element={<TaskDetails/>}/>
     <Route path='/tasks'element={<Tasks/>}/>
     <Route path=''element={<Home/>}/>
     <Route path='/home'element={<Home/>}/>
     
     
     <Route path='*'element={<NotFound/>}/>

     </Routes>
     
     </BrowserRouter>
     </div >
  );
}

export default App;
