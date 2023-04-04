import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div>
            {showLogin ? (
            <>
                <LoginForm onLogin={onLogin} />
                <hr className='line'></hr>
                <p className='switch-login'>
                Don't have an account? &nbsp;
                <button onClick={() => setShowLogin(false)} className="submit-button"> 
                Sign Up
                </button>
                </p>
            </>
            ) : (
            <>
                <SignUpForm onLogin={onLogin} />
                <hr className='line'></hr>
                <p className='switch-login'>
                Already have an account? &nbsp;
                <button onClick={() => setShowLogin(true)} className="submit-button">
                Log In
                </button>
                </p>
            </>
            )}
        </div>
    );

}

export default Login;