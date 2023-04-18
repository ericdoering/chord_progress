import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export const logout = () => {
  return useCallback(() => {
    localStorage.removeItem('token')
    let navigate = useNavigate(); 
    navigate('/');
}, [])
};