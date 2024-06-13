import { Fragment } from "react";
import NavBar from "../NavBar/navBar";
import { Outlet } from "react-router-dom";
const Layout = (props) => {
  return (
    <Fragment>
      <NavBar />
      <Outlet />
    </Fragment>
  );
};

export default Layout;
