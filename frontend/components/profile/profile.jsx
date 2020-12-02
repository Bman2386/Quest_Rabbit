import React from 'react'

class ProfileComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = this.props.username
    }

    render() {
        const {logout} = this.props
        return (
            <div className='quest-name'> 
                <div>
                  Profile page for: {this.state}  
                </div>
                <br/>
            <button onClick={logout}>Logout</button>
            </div>
        )
    
    }
}

export default ProfileComponent