// import React, { Suspense, lazy, useContext } from "react";
import "./App.css";
import RouteComponent from "./routerComponent";
// import Layout from "./components/Layout/layout";

// import AuthContext from "./store/auth-context";

// // import UserRegistration from "./components/UserForm/userRegistration";
// const UserRegistration = lazy(() => import("./components/UserForm/userRegistration"));
// // import LeaveForm from "./components/RequestApplication/leaveForm";
// const LeaveForm = lazy(() => import("./components/RequestApplication/leaveForm"));
// // import CardContainer from "./components/LeaveCard/cardContainer";
// const CardContainer = lazy(() => import("./components/LeaveCard/cardContainer"));

// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   createRoutesFromElements,
// } from "react-router-dom";

// const routes = createRoutesFromElements(
//   <Route path="/" element={<Layout />}>
//     <Route path="" element={<CardContainer />} />
//     <Route path="login" element={<UserRegistration />} />
//     <Route path="leave-form" element={<LeaveForm />} />
//   </Route>
// );

// const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="App">
      <RouteComponent />
    </div>
  );
}

export default App;
