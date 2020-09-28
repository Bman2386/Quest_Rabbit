import React from 'react'



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
          const { categories } = this.props
          // console.log(category)
          // debugger
          return (
            <div>
            <button 
              style={{ position: 'relative'}} 
              onBlur={this.handleBlur} 
              onClick={this.handleClick}
              className='btn-3'
            >
                Quests
                {this.state.show ? (
                  <ul 
                    onClick={e => e.stopPropagation()} 
                  >
                    {
                      categories.map(category => 
                <li className="btn" key={category.id}>{category.category_name}</li>
                      )}
                  </ul>
                ) : null }
            </button>
          </div>
    )
      }
    
}

export default Quests