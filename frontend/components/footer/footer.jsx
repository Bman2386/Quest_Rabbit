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
                <a target="_blank" href="https://www.linkedin.com/in/brendonbiagi/" className='a'><img src={linked} className="linked"/></a>
                <a target="_blank" href="https://github.com/Bman2386" className='a'><img src={git} className="linked"/></a>
                <a target="_blank" href="https://bman2386.github.io/Brendon.Biagi/" className="creator">By Brendon Biagi</a>
            </div>
        )
    }
}

export default Footer