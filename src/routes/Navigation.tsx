import React from "react";
import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";
import logo from "../logo.svg";
import ShoppingPage from "../02-component-patterns/pages/ShoppingPage";



const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="logo" />
            <ul>
              <li>
                <NavLink to="/shoping" className={({isActive})=> isActive ? "nav-active" : ""}>ShoppingPage</NavLink>
              </li>
              <li>
                <NavLink to="/lazy2" className={({isActive})=> isActive ? "nav-active" : ""}>Lazy 2</NavLink>
              </li>
              <li>
                <NavLink to="/lazy3" className={({isActive})=> isActive ? "nav-active" : ""}>Lazy 3</NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/shoping" element={<ShoppingPage />} />
            <Route path="/lazy2" element={''} />
            <Route path="/lazy3" element={''} />
            <Route path="/*" element={''} />

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
export default Navigation;
