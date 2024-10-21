import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "../components/login/Login";
import AuthProvider from "../components/auth/AuthProvider";
import Dashboard from "../components/dashboard/dashboard";
import Settings from "../components/settings/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/login",
        element: <Login page="login" />,
      },
      {
        path: "signup",
        element: <Login page="signup" />,
      },
      {
        element: <AuthProvider />, // Authentication component to ensure that the user is logged in to access the below protected routes
        children: [
          {
            path: "",
            element: <Dashboard />,
          },
          {
            path: "profile",
            element: <Login page="profile" />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
          {
            path: "logout",
            element: (
              <div>
                {localStorage.clear()}
                <Navigate to="/login" replace={true} />
              </div>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
