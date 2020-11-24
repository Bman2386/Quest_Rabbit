import React from 'react';
import { Link } from 'react-router-dom';
import Quests from './quests_item'
// import img from '../../../app/assets/images/QuestRabbit.jpg'

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    // this.state = this.props
    // this.fetchCategories = this.fetchCategories.bind(this)
  }

  componentDidMount() {
    this.props.fetchCategories()
  }
  
      render() {
      const { currentUser, logout, categories } = this.props
      const logo = window.logo
        const display = currentUser ? (
          <div className="nav-bar">
            <Link to='/'>
              <img src={logo} className="logo"/>
            </Link>
            { categories !== [] ? 
               <Quests 
               categories={categories}
                /> : <div></div>
            }
            <h3>Welcome {currentUser.username}!</h3>
            <Link to='/quests'>Your Quests</Link>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <div className="nav-bar">
            <Link to='/'>
              <img src={logo} className="logo"/>
            </Link>
            { categories !== [] ? 
                <Quests 
                categories={categories} 
                /> : <div></div>
            }
            <Link className="btn" to="/intermediary">Log in</Link>
          </div>
        );
        return (
    <header >
      <div>
        {display}
      </div>
    </header>
  )
      }
  
}


export default NavBar