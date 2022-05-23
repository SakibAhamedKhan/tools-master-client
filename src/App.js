import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='blogs' element={<Blogs></Blogs>}></Route>
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='signup' element={<Signup></Signup>}></Route>

        </Routes>
        {/* <h2 className='text-3xl'>Hellow World</h2>
        <button className='btn btn-primary text-white bg-gradient-to-r from-primary to-secondary'>Button</button> */}


      <ToastContainer />    
    </div>
  );
}

export default App;
