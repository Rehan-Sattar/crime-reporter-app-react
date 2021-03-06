import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserLogout } from '../../store/actions/auth';
import './Header.css';

const Header = props => {
  const { token } = props;
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (token || localStorage.getItem('token')) setAuthenticated(true);
    else setAuthenticated(false);
  }, [token]);

  return (
    <nav className='navbar navbar-dark navbar-expand-lg'>
      <Link to='/' className='brand-logo'>
        <span className='navbar-brand brand-logo'>
          <i className='fa fa-address-card mr-2' />
          Crime Rates Tracker
        </span>
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavAltMarkup'
        aria-controls='navbarNavAltMarkup'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav ml-auto'>
          {!authenticated ? (
            <Link to='/signup' className='nav-item nav-link'>
              Signup
            </Link>
          ) : (
            <button className='btn logout-button' onClick={props.getUserLogout}>
              Logout <i className='fas fa-sign-out-alt mx-2'></i>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => ({
  token: auth.token
});

export default connect(
  mapStateToProps,
  { getUserLogout }
)(Header);
