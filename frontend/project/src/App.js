import React from "react";
import "./App.css";
import Layout from "./components/Layout/layout";
import UserRegistration from "./components/UserForm/userRegistration";
import LeaveForm from "./components/RequestApplication/leaveForm";
import CardContainer from "./components/LeaveCard/cardContainer";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

const routes = createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="" element={<CardContainer />} />
    <Route path="login" element={<UserRegistration />} />
    <Route path="leave-form" element={<LeaveForm />} />
  </Route>
);

const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
