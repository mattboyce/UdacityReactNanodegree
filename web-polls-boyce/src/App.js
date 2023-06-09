/* eslint-disable react/prop-types */
import React, { Fragment, useEffect } from 'react';
import { connect } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import { Home } from './pages/Home';
import { handleInitialData } from './actions/shared';
import NavBar from './components/NavBar';

const App = (props) => {

  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  const { authUser } = props;

  return (
    <div className="container">
      {/* {console.log('what is happening???')}
      {console.log(authUser)} */}
      {authUser === undefined || authUser === null ? (
        <Login
        props />
      ) : (
        <Fragment>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            {/* <Route path="/tweet/:id" element={<TweetPage />} />
            <Route path="/new" element={<NewTweet />} /> */}
          </Routes>
        </Fragment>)}
    </div>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser: authedUser,
});

export default connect(mapStateToProps)(App);
// export default App;
