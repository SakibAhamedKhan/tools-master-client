import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PurchasePage from './Pages/PurchasePage/PurchasePage';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddReview from './Pages/Dashboard/AddReview';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='blogs' element={<Blogs></Blogs>}></Route>
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='signup' element={<Signup></Signup>}></Route>
          <Route path='purchase/:tool_Id' element={
            <RequireAuth>
              <PurchasePage></PurchasePage>
            </RequireAuth>
          }></Route>

          <Route path='dashboard' element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }>
            <Route index element={<MyProfile></MyProfile>}></Route>
            <Route path='myorders' element={<MyOrders></MyOrders>}></Route>   
            <Route path='review' element={<AddReview></AddReview>}></Route>   
            <Route path='payment/:payment_id' element={<Payment></Payment>}></Route>   





          </Route>






        </Routes>
        {/* <h2 className='text-3xl'>Hellow World</h2>
        <button className='btn btn-primary text-white bg-gradient-to-r from-primary to-secondary'>Button</button> */}


      <ToastContainer />    
    </div>
  );
}

export default App;
