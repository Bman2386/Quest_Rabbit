import React from 'react'

class ProfileComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = this.props.username
    }

    render() {
    <div> Welcome {this.state}</div>
    }
}

export default ProfileComponent