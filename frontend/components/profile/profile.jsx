import React from 'react';
import { Link } from 'react-router-dom';

class ProfileComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.getUser(this.props.id)
    }
    render() {
        const {logout} = this.props;
        const {username, family_crest, realm, star_sign} = this.props;
        return (
            <div className="quest-form">
                <div className='quest-name'> 
                <div className='p'>
                    Username: {`${username}`}  
                </div>
                <div className='p'>
                    Family Crest: {`${family_crest}`}
                </div>
                <div className='p'>
                    Realm: {`${realm}`}
                </div>
                <div className='p'>
                    Star Sign: {`${star_sign}`}
                </div>
                <br/>
                <Link onClick={logout} className='btn-4' to='/'>Logout</Link>
            </div>
            </div>
            
        )
    
    }
}

export default ProfileComponent