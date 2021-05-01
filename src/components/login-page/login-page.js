import React from 'react';
import { Redirect } from 'react-router-dom';
import './login-page.css';

import { Form, Field } from 'react-final-form';

const LoginForm = ({ onLogin, isLogged }) => {
  return (
    <Form
      onSubmit={(formData) => {
        console.log(formData);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="login-page__form login-form">
          <div className="login-form__input">
            <Field type="text" placeholder="Login" className="input" name="login" component={'input'} />
          </div>
          <div className="login-form__input">
            <Field type="text" placeholder="Password" className="input" name="password" component={'input'} />
          </div>
          <div className="login-form__checkbox">
            <label htmlFor="login-checkbox">Remember me</label>
            <Field id="login-checkbox" type="checkbox" name="rememberMe" component={'input'} />
          </div>
          {/* <p className="login-page__name">Enter!</p> */}
          <button
            className="login-page__button"
            onClick={() => {
              onLogin(isLogged);
            }}
          >
            Enter
          </button>
        </form>
      )}
    </Form>
  );
};

const LoginPage = ({ onLogin, isLogged }) => {
  // if (isLogged) {
  //   return <Redirect to="/profile" />;
  // }

  return (
    <div className="login-page">
      {/* form */}
      <LoginForm onLogin={onLogin} isLogged={isLogged} />
    </div>
  );
};

export default LoginPage;
