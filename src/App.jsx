import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./components/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import SignupPage from "./pages/SignupPage";
import DeckView from "./components/Cards/DeckView";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <div>Home Page</div>
      </ProtectedRoute>
    ),
  },
  {
    path: "/games",
    element: (
      <ProtectedRoute>
        <div>Games Page</div>
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  return (
    <DeckView />
    // <AuthProvider>
    //   <RouterProvider router={router} />
    // </AuthProvider>
  );
}

export default App;
