import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import '../styles/Auth.css';

const LoginPage: React.FC = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        <p>Welcome back. Please enter your details.</p>
        <AuthForm />
      </div>
    </div>
  );
};

export default LoginPage;
