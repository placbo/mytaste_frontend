import { jwtDecode } from 'jwt-decode';
import React, { useEffect } from 'react';
import { set } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth, User } from '../context/AuthContext';

const AuthSuccess: React.FC = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get('token');
    if (token) {
      const decodedUser: User = jwtDecode(token);
      localStorage.setItem('token', token);
      setUser(decodedUser);
      navigate('/');
    } else {
      navigate('/login');
    }
  }, [navigate, setUser]);

  return (
    <div>
      <h1>Authentication Successful</h1>
      <p>Redirecting...</p>
    </div>
  );
};

export default AuthSuccess;
