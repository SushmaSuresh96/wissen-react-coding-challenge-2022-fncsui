import React, { useState } from 'react';
import './form.css';
import axios from 'axios';
const Forms = ({ fetchUsers }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = () => {
    axios('https://reqres.in/api/login/', {
      method: 'POST',
      data: {
        email: email,
        password: password,
      },
    })
      .then((response) => {
        setShowError(false);
        localStorage.setItem('auth-token', response.data.token);
        fetchUsers();
      })
      .catch((error) => {
        setShowError(true);
        console.log('here');
      });
    return false;
  };
  return (
    <div className="formWrapper">
      <img
        src="https://drive.google.com/uc?export=view&id=1hvRAGrdq0SqFBZApx2--IcuDf-DOmOBH"
        alt="logo"
      />
      <div className="hello">Hello there, Sign In to continue</div>
      {showError && (
        <div style={{ color: 'red', marginBottom: '20px' }}>
          {' '}
          Please Enter valid Username and Password !!!
        </div>
      )}
      <form>
        <div className="names">Email</div>
        <input name="Email" onChange={(e) => setEmail(e.target.value)}></input>
        <div className="names">Password</div>
        <div className={'passwordWrap'}>
          <input
            type={showPassword ? 'text' : 'password'}
            name="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <img
            width="20"
            className={'eyeIcon'}
            onClick={() => setShowPassword(!showPassword)}
            src={
              !showPassword
                ? 'https://img.icons8.com/material-outlined/344/visible.png'
                : 'https://img.icons8.com/material-outlined/344/hide.png'
            }
          />
        </div>
        <div>
          <div className={'termsWrap'}>
            <input
              type="checkbox"
              onChange={(e) => setTerms(e.target.checked)}
            />
            <div>
              By creating or loggin into an account, you are agreeing with our{' '}
              <b>Terms & Conditions</b> and <b>Privacy Policies</b>
            </div>
          </div>
        </div>
        <button
          className={
            email.length > 1 && password.length > 1 && terms
              ? 'button'
              : 'disabledButton'
          }
          type="button"
          onClick={() => {
            handleSubmit(email, password);
          }}
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Forms;
