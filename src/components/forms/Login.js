import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../../store/actions/auth';
import { history } from '../../config';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
// import './styles.css';

const Login = ({ authenticate, loading, errMessage }) => {
  const { values, handleChange, handleSubmit } = useForm(login, {
    email: '',
    password: ''
  });
  const { email, password } = values;
  // login via google handler.
  function loginVieGoogle() {
    authenticate({}, 'google');
  }
  // login via email, password handler.
  function login() {
    authenticate({ email, password });
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) history.push('/dashboard');
  }, []);

  return (
    <>
      <h1 className='text-center mb-4'>
        <i className='fa fa-user' /> Login
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='example@gmail.com'
          className='form-control form-control-lg my-2'
          name='email'
          required
          value={email}
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='**********'
          className='form-control form-control-lg my-3'
          name='password'
          required
          value={password}
          onChange={handleChange}
        />
        <button className='btn btn-block btn-outline-primary'>
          {loading ? (
            `Login in...`
          ) : (
            <>
              Lets Start <i className='fa fa-arrow-right ml-2' />
            </>
          )}
        </button>
      </form>
      <button
        className='btn btn-block mt-3 btn-danger'
        onClick={loginVieGoogle}>
        <i className='fab fa-google mx-2' />
        Login using Google
      </button>
      {errMessage ? (
        <p className='text-center text-danger mt-2'>{errMessage}</p>
      ) : null}
      <p className='mt-2 text-center'>
        Don't have account ? <Link to='/signup'>Signup</Link> instead
      </p>
    </>
  );
};

const mapStateToProps = ({ auth: { loading, errMessage } }) => ({
  errMessage,
  loading
});

export default connect(
  mapStateToProps,
  { authenticate }
)(Login);
