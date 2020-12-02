import React from 'react';
import { connect } from 'react-redux';
import ProfileComponent from './profile';
import { logout } from '../../actions/session';

const mSTP = (state, ownProps) => {

    return ({
       user: state.session.currentUser, 
       username: state.session.currentUser.username
    })
    
}

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(ProfileComponent)