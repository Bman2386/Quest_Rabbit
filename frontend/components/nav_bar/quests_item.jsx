import React from 'react'
import { Link } from 'react-router-dom';


class Quests extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false,
          }
          // console.log(this.props, this.state)
        this.handleBlur = this.handleBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleBlur(e) {
        this.setState({show: false})
      }
      handleClick(){
        this.setState({show: !this.state.show})
      }

      render() {
          const active = this.state.show ? 'active' : ''
          const { categories } = this.props
          // console.log(category)
          // debugger
          return (
            <div className='dd-container'
            style={{ position: 'relative'}} >
            <button 
              style={{ position: 'relative'}} 
              onBlur={this.handleBlur} 
              onClick={this.handleClick}
              className={`btn-3 ${active}`}
            >  Quests</button>
                {this.state.show ? (
                  <ul 
                    onClick={e => e.stopPropagation()} 
                    className={`container`}

                  >
                    POPULAR QUESTS
                    {
                      categories.map(category => 
                        <Link className="btn"
                          key={category.id}
                          category={category}
                          to={`/${category}`}
                        >{category.category_name}</Link>
                      )}
                  </ul>
                ) : null }
           
          </div>
    )
      }
    
}

export default Quests