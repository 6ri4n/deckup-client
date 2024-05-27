import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./components/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import CreateDeck from "./components/Deck/CreateDeck";
import EditDeck from "./components/Deck/EditDeck";
import CategoriesPage from "./pages/CategoriesPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/home",
      element: (
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/deck-categories",
      element: (
        <ProtectedRoute>
          <CategoriesPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/create-deck",
      element: (
        <ProtectedRoute>
          <CreateDeck />
        </ProtectedRoute>
      ),
    },
    {
      path: "/edit-deck/:id",
      element: (
        <ProtectedRoute>
          <EditDeck />
        </ProtectedRoute>
      ),
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
