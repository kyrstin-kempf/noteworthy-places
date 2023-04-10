import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import logo from '../assets/Logo.png'


function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch()
  
    function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          password,
          password_confirmation: passwordConfirmation,
        }),
      })
        .then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => {
              dispatch({ type: "user/userLoaded", payload: user })
            });
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
    }
  
    return (
      <form className='login-form' onSubmit={handleSubmit}>
        <img className='logo-landing' src={logo} alt='Noteworth Places logo'/>
        <label htmlFor="first name">First Name</label>
        <input
          type="text"
          id="first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="last name">Last Name</label>
        <input
          type="text"
          id="last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="signup-email">Email</label>
        <input
          type="text"
          id="signup-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="signup-password">Password</label>
        <input
          type="password"
          id="signup-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password">Confirm Password</label>
        <input
          type="password"
          id="password-confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <button type="submit" className='submit-button-landing'>
          {isLoading ? "Loading..." : "Create Account"}
        </button>
        <div className='login-error'>
          {errors?.map((err) => (
            <p key={err}>{err}</p>
          ))}
        </div>
      </form>
    );
  }

export default SignUp;