import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>

        </Routes>
        {/* <h2 className='text-3xl'>Hellow World</h2>
        <button className='btn btn-primary text-white bg-gradient-to-r from-primary to-secondary'>Button</button> */}
    </div>
  );
}

export default App;
