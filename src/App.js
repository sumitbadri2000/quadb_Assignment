import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

import PrivateRoute from "./routes/privateRoute";
import JobDetail from "./pages/JobDetail";
import Success from "./pages/Submit";

export default function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }></Route>
      <Route path="/login" element={<Login />}></Route>

      <Route path="/signup" element={<Signup />}></Route>
      <Route
        path="/jobDetails/:id"
        element={
          <PrivateRoute>
            <JobDetail />
          </PrivateRoute>
        }></Route>
      <Route
        path="/success"
        element={
          <PrivateRoute>
            <Success />
          </PrivateRoute>
        }></Route>
    </Routes>
  );
}
