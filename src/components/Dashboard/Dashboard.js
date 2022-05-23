import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
// import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    // const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-2xl font-bold text-secondary text-center my-5'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-primary text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li className='text-secondary'><Link to="/dashboard">My Appointments</Link></li>
                    <li className='text-secondary'><Link to="/dashboard/review">My Reviews</Link></li>
                    <li className='text-secondary'><Link to="/dashboard/history">My History</Link></li>
                    {/* {
                        admin && <>
                           <li><Link to="/dashboard/alluser">All Users</Link></li>
                           <li><Link to="/dashboard/adddoctor">Add a Doctor</Link></li>
                           <li><Link to="/dashboard/managedoctor">Manage Doctor</Link></li>
                        </>
                    } */}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;