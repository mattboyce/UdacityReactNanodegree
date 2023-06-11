import React from 'react';

import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import PropTypes from 'prop-types';
// import { Button } from 'semantic-ui-react';
// import { setAuthedUser } from '../actions/authedUser';
// import { Username } from './Username';

const LoginNavBar = () => {

    //   const navigate = useNavigate();

    //   const handleLoginClicked = () => {
    //     props.dispatch(setAuthedUser(null));
    //     navigate(`/`);
    //   };

    return (
        <div>
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/leaderboard">Leaderboard</Link>
                    </li>
                    <li>
                        <Link to="/add">Create Question</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

// function mapStateToProps({ authedUser, users }) {
//   return {
//     authedUser,
//     users,
//     userName: users[authedUser].name,
//   };
// }

// NavBar.propTypes = {
//   authedUser: PropTypes.string.isRequired,
//   dispatch: PropTypes.func.isRequired,
//   users: PropTypes.object.isRequired,
//   userName: PropTypes.string.isRequired,
// };

// export default connect(mapStateToProps)(NavBar);
export default LoginNavBar;