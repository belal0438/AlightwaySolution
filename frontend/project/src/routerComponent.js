import React, { Suspense, lazy, useContext } from "react";
import "./App.css";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./components/Layout/layout";

import AuthContext from "./store/auth-context";

import { Navigate } from "react-router-dom";

// import UserRegistration from "./components/UserForm/userRegistration";
const UserRegistration = lazy(() =>
  import("./components/UserForm/userRegistration")
);
// import LeaveForm from "./components/RequestApplication/leaveForm";
const LeaveForm = lazy(() =>
  import("./components/RequestApplication/leaveForm")
);
// import CardContainer from "./components/LeaveCard/cardContainer";
const CardContainer = lazy(() =>
  import("./components/LeaveCard/cardContainer")
);

const RouteComponent = () => {
  const AuthCtxt = useContext(AuthContext);
  // console.log("AuthCtxt", AuthCtxt);
  const routes = createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        path=""
        element={
          AuthCtxt.isLoggedIn ? (
            <Suspense fallback={<p>Loading...</p>}>
              <CardContainer />
            </Suspense>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="leave-form"
        element={
          AuthCtxt.isLoggedIn ? (
            <Suspense fallback={<p>Loading...</p>}>
              <LeaveForm />
            </Suspense>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="login"
        element={
          !AuthCtxt.isLoggedIn ? (
            <Suspense fallback={<p>Loading...</p>}>
              <UserRegistration />
            </Suspense>
          ) : (
            <Navigate to="/" />
          )
        }
      />
    </Route>
  );

  const router = createBrowserRouter(routes);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default RouteComponent;
