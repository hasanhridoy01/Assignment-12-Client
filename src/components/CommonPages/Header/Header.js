import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate =  useNavigate();
  
  //user logout
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
    navigate('/login');
  };

  const menuItems = 
  <>
    <li className='text-xl font-bold text-secondary lg:ml-20'><Link to='/home'>Home</Link></li>
    <li className='text-xl font-bold text-secondary'><Link to='/allproducts'>AllProducts</Link></li>
    <li className='text-xl font-bold text-secondary'><Link to='/myprofile'>MyProfile</Link></li>
    <li className='text-xl font-bold text-secondary'><Link to='/blog'>Blog</Link></li>
    <li className='text-xl font-bold text-secondary'><Link to='/myportfolio'>My Portfolio</Link></li>
    {
      user &&  <li className='text-xl font-bold text-secondary mr-2'><Link to='/dashboard'>Dashboard</Link></li>
    }
    <li className='text-primary'>{user ? <button className="btn btn-secondary"  onClick={logout} >Sign Out</button> : <Link to="/login" className='text-secondary font-bold text-xl'>Login</Link>}</li>
  </>
  return (
    <div className="navbar bg-primary sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost text-base-100 normal-case text-3xl">Electric Items</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        <label for="dashboard-sidebar" tabindex="1" className="btn btn-primary lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
      </div>
    </div>
  );
};

export default Header;