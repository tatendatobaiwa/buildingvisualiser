import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import '../styles/Auth.css';

const SignupPage: React.FC = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create an Account</h2>
        <p>Start your journey by creating an account.</p>
        <AuthForm isSignup={true} />
      </div>
    </div>
  );
};

export default SignupPage;
