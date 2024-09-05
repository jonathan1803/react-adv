import React, { Suspense } from "react";
import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";
import logo from "../logo.svg";
import { routes } from "./routes";


const Navigation = () => {
  return (
    <>
    {/* fallback puede ir un componente para que se vea que eta cargando o null */}
  <Suspense fallback={<span>Loading...</span>}>

      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="logo" />
            <ul>
              {routes.map(route => 
                <li key={route.to}>
                <NavLink to={route.to} className={({isActive})=> isActive ? "nav-active" : ""}>{route.name}</NavLink>
              </li>
                
              )}
              {/* <li>
                <NavLink to="/lazy1" className={({isActive})=> isActive ? "nav-active" : ""}>Lazy 1</NavLink>
              </li> */}
              {/* <li>
                <NavLink to="/lazy2" className={({isActive})=> isActive ? "nav-active" : ""}>Lazy 2</NavLink>
              </li>
              <li>
                <NavLink to="/lazy3" className={({isActive})=> isActive ? "nav-active" : ""}>Lazy 3</NavLink>
              </li> */}
            </ul>
          </nav>
          <Routes>
            {routes.map(({to, path, Component})=> (
              <Route key={to} path={path} element={<Component />} />

            ))}
            {/* <Route path="/lazy2" element={<LazyPage2 />} />
            <Route path="/lazy3" element={<LazyPage3 />} /> */}
            <Route path="/*" element={<Navigate to={routes[0].to}  replace  />} />

          </Routes>
        </div>
      </BrowserRouter>
  </Suspense>

    </>
  );
};
export default Navigation;
