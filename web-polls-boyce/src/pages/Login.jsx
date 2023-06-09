/* eslint-disable react/prop-types */

import React from 'react';
import { connect } from "react-redux";
import { setAuthedUser } from '../actions/authedUser';


const handleUserChange = (e) => {
    console.log(e);
    console.log(e.target.value);
    setAuthedUser(e.target.value);
}

const UserSelect = (props) => {
    if (props.props.users === undefined || props.props.users === null || props.props.users === {}) {
        return <></>
    }

    const usersArr = Object.values(props.props.users);

    return (
        <select name="Users" id="usersDropDown" onChange={handleUserChange}>
            <option value=""></option>
            {usersArr.map((user) => (<option key={user.id} value={user.id}>{user.name}</option>))}
        </select>
    )
};

const Login = (props) => {
    return (
        <div id='wrapper'>
            <h3>Select a User</h3>
            <UserSelect
                props={props} />
        </div >
    );
};

const mapStateToProps = ({ users }) => ({
    users: users,
});

export default connect(mapStateToProps)(Login);