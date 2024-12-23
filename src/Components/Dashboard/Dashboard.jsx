import { NavLink } from "react-router-dom";
import { Helmet } from 'react-helmet';  // Ensure this is imported
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <Helmet>
        <title>Dashboard | Gadget Haven</title>
      </Helmet>

      <div className="bg-purple-600 text-white py-6">
        <h1 className="text-4xl text-center font-bold">Dashboard</h1>
        <p className="text-center mt-4">
        Welcome to your Dashboard! Here, you can quickly view and manage all the important data related to your account.
        </p>

        {/* Buttons for Cart and Wishlist */}
        <div className="text-center mt-8">
          <NavLink to="cart">  {/* Adjusted path here */}
            <button className="btn bg-purple-600 text-white py-2 px-6 rounded-full mx-2">
              Cart List
            </button>
          </NavLink>
          <NavLink to="wishlist">  {/* Adjusted path here */}
            <button className="btn bg-purple-600 text-white py-2 px-6 rounded-full mx-2">
              Wishlist
            </button>
          </NavLink>
        </div>

        {/* Render Outlet content here */}
        <Outlet /> {/* This renders the nested route content (ListedCart or Wishlist) */}
      </div>
    </div>
  );
};

export default Dashboard;
