import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/CommonPages/Footer/Footer';
import Header from './components/CommonPages/Header/Header'
import Home from './components/HomePage/Home/Home';
import AllProduct from './components/HomePage/AllProduct/AllProduct';
import Purchase from './components/HomePage/Purchase/Purchase';
import MyProfile from './components/MyProfile/MyProfile';
import Login from './components/AuthPages/Login/Login';
import Registration from './components/AuthPages/Registration/Registration';
import RequireAuth from './components/AuthPages/RequireAuth';
import Dashboard from './components/Dashboard/Dashboard';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import MyOrder from './components/Dashboard/MyOrder';

function App() {
  return (
    <div className="">
      <ToastContainer />
      <Header></Header>
      <Routes>
        <Route path='/' element={ <Home></Home> }></Route>
        <Route path='/home' element={ <Home></Home> }></Route>
        <Route path='/allproducts' element={ <AllProduct></AllProduct> }></Route>
        <Route path='/myprofile' element={ 
          <RequireAuth>
            <MyProfile></MyProfile>
          </RequireAuth>
         }></Route>
        <Route path='/purchase/:itemsId' element={ 
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
         }></Route>

         <Route path='/dashboard' element={ 
           <RequireAuth>
             <Dashboard></Dashboard>
           </RequireAuth>
          }>
            {/* <Route index element={}></Route> */}
            <Route path='myorder' element={<MyOrder></MyOrder>}></Route>
            {/* <Route path='review' element={<MyReview></MyReview>}></Route> */}
          </Route>

        <Route path='/login' element={ <Login></Login> }></Route>
        <Route path='/registration' element={ <Registration></Registration> }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
