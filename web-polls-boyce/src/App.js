/* eslint-disable react/prop-types */
import React, { Fragment, useEffect } from 'react';
import { connect } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './pages/login';
import { Home } from './pages/home';
import { handleInitialData } from './actions/shared';

import NavBar from './components/NavBar';

const App = (props) => {
  console.log('lol');
  useEffect(() => {
    props.dispatch(handleInitialData());
    console.log('JAJAJAJAJAJAJA');
    console.log(props);
  }, []);

  const { authUser } = this.props;

  return (
    <div className="container">
      {authUser === null ? (
        <Route
          render={() => (
            <Login />
          )}
        />
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
