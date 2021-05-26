import React from 'react';
import { Redirect } from 'react-router-dom';
import './login-page.css';

import { Form, Field } from 'react-final-form';
import { required, maxLength, composeValidators, minLength } from '../../utils/validators';

const LoginForm = ({ onLogin, isLogged, loginTh, error, captchaUrl }) => {
  return (
    <Form
      onSubmit={({ email, password, rememberMe, captcha }) => {
        loginTh(email, password, rememberMe, captcha);
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="login-page__form login-form">
          {error && <div className="error error-main">{error}</div>}
          <div className="login-form__input">
            <Field name="email" validate={composeValidators(required, maxLength(20), minLength(4))}>
              {({ input, meta }) => (
                <div className="login-input__container">
                  <input
                    {...input}
                    type="email"
                    placeholder="Email"
                    className={`input ${meta.error && meta.touched && 'red'}`}
                  />
                  {meta.error && meta.touched && <span className="error">{meta.error}</span>}
                </div>
              )}
            </Field>
          </div>
          <div className="login-form__input">
            <Field
              name="password"
              validate={composeValidators(required, maxLength(15), minLength(4))}
            >
              {({ input, meta }) => (
                <div className="login-input__container">
                  <input
                    {...input}
                    type="password"
                    placeholder="Password"
                    className={`input ${meta.error && meta.touched && 'red'}`}
                  />
                  {meta.error && meta.touched && <span className="error">{meta.error}</span>}
                </div>
              )}
            </Field>
          </div>
          {captchaUrl && <img src={captchaUrl} alt="captcha" />}
          {captchaUrl && (
            <div className="login-form__input">
              <Field
                name="captcha"
                validate={composeValidators(required, maxLength(20), minLength(3))}
              >
                {({ input, meta }) => (
                  <div className="login-input__container">
                    <input
                      {...input}
                      type="text"
                      placeholder="Enter captcha"
                      className={`input ${meta.error && meta.touched && 'red'}`}
                    />
                    {meta.error && meta.touched && <span className="error">{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
          )}

          <div className="login-form__checkbox">
            <Field name="rememberMe" type="checkbox" validate={required}>
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
            // onClick={() => {
            //   onLogin(isLogged);
            // }}
          >
            Enter
          </button>
        </form>
      )}
    ></Form>
  );
};

const LoginPage = ({ onLogin, isLogged, loginTh, error, captchaUrl }) => {
  // if (isLogged) {
  //   return <Redirect to="/profile" />;
  // }

  return (
    <div className="login-page">
      {/* form */}
      <LoginForm
        onLogin={onLogin}
        isLogged={isLogged}
        loginTh={loginTh}
        error={error}
        captchaUrl={captchaUrl}
      />
    </div>
  );
};

export default LoginPage;
