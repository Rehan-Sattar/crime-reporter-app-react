import React from 'react';
import Login from '../forms/Login';
import './home.css';

const Home = () => {
  return (
    <div className='container home-wrapper shadow'>
      <div className='row'>
        <div className='col-md-7 col-sm-12 col-lg-7 app-description-section'>
          <h1 className='heading-main'>Crime Rates Tracker</h1>
          <p className='lead description'>
            This App allows user to file complaints or missing reports and keep
            a track of it. There are 3 categories that a user can file;
            Complaint, Crime Report and Missing Report and can see all the
            status of what action has been taken by the admin.
          </p>
          <div className='d-flex mt-4'>
            <div className='flex-row'>
              <h5>
                <i className='fa fa-check' />
              </h5>
            </div>
            <div className='flex-row'>
              <h5 className='lead ml-3 disc-point'>
                The system asks the user to enter all the details of the person.
              </h5>
            </div>
          </div>
          <div className='d-flex mt-3'>
            <div className='flex-row'>
              <h5>
                <i className='fa fa-check' />
              </h5>
            </div>
            <div className='flex-row'>
              <h5 className='lead ml-3 disc-point'>
                The users can view the 3 kinds of reports by cities.
              </h5>
            </div>
          </div>
          <div className='d-flex mt-3'>
            <div className='flex-row'>
              <h5>
                <i className='fa fa-check' />
              </h5>
            </div>
            <div className='flex-row'>
              <h5 className='lead ml-3 disc-point'>
                The System allows the user to check for crimes without logging
                in. The User can also check for missing people. However they
                cannot view other user complains
              </h5>
            </div>
          </div>
        </div>
        <div className='col-md-5 col-sm-12 col-lg-5 p-3'>
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Home;
