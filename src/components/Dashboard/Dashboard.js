import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const role = user.role;
    const [admin] = useAdmin(user);
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
                    {
                        !admin &&
                        <>
                            <li className='text-secondary'><Link to="/dashboard/myorder">My Order</Link></li>
                            <li className='text-secondary'><Link to="/dashboard/myreview">My Reviews</Link></li>
                            <li className='text-secondary'><Link to="/dashboard/addreview">Add Review</Link></li>
                        </>
                    }
                    {
                        admin && <>
                            <li className='text-secondary'><Link to="/dashboard/alluser">All User</Link></li>
                            <li className='text-secondary'><Link to="/dashboard/addproduct">Add Product</Link></li>
                            <li className='text-secondary'><Link to="/dashboard/myproduct">My Product</Link></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;