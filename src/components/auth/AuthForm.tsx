import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import '../../styles/Auth.css'; // We'll reuse the styles

interface AuthFormProps {
  isSignup?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ isSignup = false }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Firebase logic will go here
    if (isSignup) {
      console.log('Signing up with:', { email, password, confirmPassword });
    } else {
      console.log('Logging in with:', { email, password });
    }
  };

  return (
    <div className="auth-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {isSignup && (
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}
        <button type="submit" className="btn btn-primary btn-block">
          {isSignup ? 'Create Account' : 'Login'}
        </button>
      </form>

      <div className="divider">OR</div>

      <div className="social-login">
        <button className="btn-social google">
          <FcGoogle className="social-icon" /> Continue with Google
        </button>
        <button className="btn-social apple">
          <FaApple className="social-icon" /> Continue with Apple
        </button>
      </div>

      <div className="auth-switch">
        {isSignup ? (
          <p>Already have an account? <Link to="/login">Login</Link></p>
        ) : (
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
