import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useAuth = () => {
  const { user } = useSelector((state) => state.auth || {});

  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [role,setRole] = useState('')

  useEffect(() => {
    if (user) {
      setAuth(true);
      setRole(user.roles[0].authority)
    } else {
      setAuth(false);
    }
    setLoading(false);
  }, [user]);

  return { auth, loading,role };
};