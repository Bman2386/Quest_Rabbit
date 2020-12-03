import React from 'react';
import { Link } from 'react-router-dom';

class ProfileComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state ={ 
            username: this.props.username,
            family_crest: this.props.family_crest,
            realm: this.props.realm,
            star_sign: this.props.star_sign}
    }

    render() {
        const {logout} = this.props
        const {username, family_crest, realm, star_sign} = this.state
        return (
            <div className="quest-form">
                <div className='quest-name'> 
                <div>
                    Username: {username}  
                </div>
                <div>
                    Family Crest: {family_crest}
                </div>
                <div>
                    Realm: {realm}
                </div>
                <div>
                    Star Sign: {star_sign}
                </div>
                <br/>
                <Link onClick={logout} className='btn-4' to='/'>Logout</Link>
            </div>
            </div>
            
        )
    
    }
}

export default ProfileComponent