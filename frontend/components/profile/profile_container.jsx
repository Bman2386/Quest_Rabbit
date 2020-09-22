import React from 'react';
import { connect } from 'react-redux';
import ProfileComponent from './profile'

const mSTP = (state, ownProps) => ({
    user: state.user[ownProps.match.params.username]
})

export default connect(mSTP)(ProfileComponent)