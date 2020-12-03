import { connect } from 'react-redux';
import ProfileComponent from './profile';
import { logout } from '../../actions/session';

const mSTP = (state) => {
    const user= state.session.currentUser 
    
    return ({
        username: user.username,
        family_crest: user.family_crest,
        realm: user.realm,
        star_sign: user.star_sign
    })
    
}

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(ProfileComponent)