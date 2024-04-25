import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.isSignedIn) {
      navigate("/login", { replace: true });
    }
  }, [navigate, user]);

  return children;
}
