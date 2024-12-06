import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import ShoppingPage from "../02-component-patterns/pages/ShoppingPage";
import logo from "../logo.svg";

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="flex">
        {/* Sidebar */}
        <nav className="bg-gray-800 text-white w-64 h-screen fixed">
          <div className="flex items-center justify-center p-6">
            <img src={logo} alt="logo" className="w-16 h-16" />
          </div>
          <ul className="space-y-6 p-4">
            <li>
              <NavLink 
                to="/shoping" 
                className={({ isActive }) =>
                  isActive ? "text-pink-500 font-bold" : "text-white"
                }
              >
                ShoppingPage
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/lazy2" 
                className={({ isActive }) =>
                  isActive ? "text-pink-500 font-bold" : "text-white"
                }
              >
                Lazy 2
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/lazy3" 
                className={({ isActive }) =>
                  isActive ? "text-pink-500 font-bold" : "text-white"
                }
              >
                Lazy 3
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <div className="ml-64 p-8 bg-gray-900 text-white w-full">
          <Routes>
            <Route path="/shoping" element={<ShoppingPage />} />
            <Route path="/lazy2" element={<div>Lazy 2 Page</div>} />
            <Route path="/lazy3" element={<div>Lazy 3 Page</div>} />
            <Route path="/*" element={<div>Home Page</div>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
