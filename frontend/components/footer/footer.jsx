import React from 'react'
import { Link } from 'react-router-dom';


class Footer extends React.Component {

    constructor(props) {
        super(props)
        
    }

    render(){
        const linked = window.linked;
        const git = window.git
        return (
            <div className="footer">
                <Link to="https://www.linkedin.com/in/brendonbiagi/"><img src={linked} className="linked"/></Link>
                <Link to="https://github.com/Bman2386"><img src={git} className="linked"/></Link>
                <Link to="https://bman2386.github.io/Brendon.Biagi/" className="creator">By Brendon Biagi</Link>
            </div>
        )
    }
}

export default Footer