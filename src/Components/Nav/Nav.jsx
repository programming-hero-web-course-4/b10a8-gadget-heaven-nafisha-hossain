import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { FaHeart, FaBars } from "react-icons/fa";

const Nav = ({ cartCount, wishlistCount }) => {
    const location = useLocation();

    const isTransparent = location.pathname === '/statistics' || location.pathname === '/dashboard';
    const navBackground = isTransparent ? 'bg-transparent' : 'bg-purple-600';
    const textColor = isTransparent ? 'text-black' : 'text-white';

    const links = (
        <>
            <li className={textColor}><NavLink to="/">Home</NavLink></li>
            <li className={textColor}><NavLink to="/statistics">Statistics</NavLink></li>
            <li className={textColor}><NavLink to="/dashboard">Dashboard</NavLink></li>
            <li className={textColor}><NavLink to="/support">Repair & Support</NavLink></li>
        </>
    );

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className={`navbar ${navBackground}`}>
            <div className="navbar-start flex items-center">
                <div className="dropdown lg:hidden">
                    <button
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <FaBars className="text-xl" />
                    </button>
                    <ul
                        tabIndex={0}
                        className={`menu menu-sm dropdown-content bg-gray-400 hover:bg-slate-400 rounded-box z-[1] mt-3 w-52 p-2 shadow ${isMenuOpen ? "block" : "hidden"}`}
                    >
                        {links}
                    </ul>
                </div>
                <a className={`btn btn-ghost text-xl ${textColor} ml-2`}>Gadget Heaven</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4">{links}</ul>
            </div>

            <div className="navbar-end flex gap-3">
                <button className="bg-slate-50 p-2 rounded-full relative">
                    <SlBasket className="text-xl" />
                    {cartCount > 0 && <span className="badge">{cartCount}</span>}
                </button>
                <button className="bg-slate-50 p-2 rounded-full relative">
                    <FaHeart className="text-xl text-red-500" />
                    {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
                </button>
            </div>
        </div>
    );
};

export default Nav;
