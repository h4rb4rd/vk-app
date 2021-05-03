import React from 'react';
import { Redirect } from 'react-router-dom';
import './login-page.css';

import { Form, Field } from 'react-final-form';
import { required, maxLength, composeValidators, minLength } from '../../utils/validators';

const LoginForm = ({ onLogin, isLogged }) => {
  return (
    <Form
      onSubmit={(formData) => {
        console.log(formData);
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="login-page__form login-form">
          <div className="login-form__input">
            <Field name="login" validate={composeValidators(required, maxLength(15), minLength(4))}>
              {({ input, meta }) => (
                <div className="login-input__container">
                  <input {...input} type="text" placeholder="Login" className={`input ${meta.error && meta.touched && 'red'}`} />
                  {meta.error && meta.touched && <span className="error">{meta.error}</span>}
                </div>
              )}
            </Field>
          </div>
          <div className="login-form__input">
            <Field name="password" validate={composeValidators(required, maxLength(15), minLength(4))}>
              {({ input, meta }) => (
                <div className="login-input__container">
                  <input
                    {...input}
                    type="text"
                    placeholder="Password"
                    className={`input ${meta.error && meta.touched && 'red'}`}
                  />
                  {meta.error && meta.touched && <span className="error">{meta.error}</span>}
                </div>
              )}
            </Field>
          </div>
          <div className="login-form__checkbox">
            <Field name="rememberMe" validate={required}>
              {({ input, meta }) => (
                <div className="login-input__container">
                  <label htmlFor="login-checkbox">Remember me</label>
                  <input {...input} type="checkbox" id="login-checkbox" />
                  {meta.error && meta.touched && <span className="error">{meta.error}</span>}
                </div>
              )}
            </Field>
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
    ></Form>
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
