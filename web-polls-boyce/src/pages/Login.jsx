/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { setAuthedUser } from '../actions/authedUser';

const UserSelect = (props) => {
    if (props.props.users === undefined || props.props.users === null || props.props.users === {}) {
        return <></>
    }

    const handleUserChange = (e) => {
        props.props.dispatch(setAuthedUser(e.target.value));
    }

    const usersArr = Object.values(props.props.users);

    return (
        <select data-testid="testUserSelect" name="Users" id="usersDropDown" onChange={handleUserChange}>
            <option value=""></option>
            {usersArr.map((user) => (<option key={user.id} value={user.id}>{user.name}</option>))}
        </select>
    )
};

const Login = (props) => {
    return (
        <div id='wrapper'>
            <h3>Select a User to Login</h3>
            <UserSelect
                props={props}
            />
        </div >
    );
};

function mapStateToProps({ users }) {
    return {
        users,
    };
}

Login.propTypes = {
    dispatch: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Login);