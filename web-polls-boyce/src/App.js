/* eslint-disable react/prop-types */
import React, { Fragment, useEffect } from 'react';
import { connect } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import { handleInitialData } from './actions/shared';
import NavBar from './components/NavBar';
import { CreateQuestion } from './pages/CreateQuestion';
import { Leaderboard } from './pages/Leaderboard';

const App = (props) => {

  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  const { authedUser } = props;

  return (
    <div className="container">
      {authedUser === undefined || authedUser === null ? (
        <Login
        props />
      ) : (
        <Fragment>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/leaderboard" exact element={<Leaderboard />} />
            <Route path="/create-question" exact element={<CreateQuestion />} />
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
