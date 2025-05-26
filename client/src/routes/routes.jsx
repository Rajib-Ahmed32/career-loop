import React from "react";
import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import JobDetailsPage from "./pages/JobDetailsPage";
import AddJobPage from "./pages/AddJobPage";
import ApplyJobPage from "./pages/ApplyJobPage";
import MyApplicationsPage from "./pages/MyApplicationsPage";
import MyJobsPage from "./pages/MyJobsPage";
import ReviewApplicationsPage from "./pages/ReviewApplicationsPage";
import UpdateJobPage from "./pages/UpdateJobPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import App from "../App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "forgot-password", element: <ForgotPasswordPage /> },
      {
        element: <ProtectedRoute />,
        children: [
          { path: "jobs", element: <JobsPage /> },
          { path: "jobs/details/:id", element: <JobDetailsPage /> },
          { path: "add-jobs", element: <AddJobPage /> },
          { path: "application/apply/:id", element: <ApplyJobPage /> },
          { path: "application/me", element: <MyApplicationsPage /> },
          { path: "my-jobs", element: <MyJobsPage /> },
          { path: "my-jobs/:id", element: <ReviewApplicationsPage /> },
          { path: "jobs/update/:id", element: <UpdateJobPage /> },
        ],
      },
      { path: "*", element: <h2>404 - Page Not Found</h2> },
    ],
  },
]);
