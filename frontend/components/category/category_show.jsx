import React from 'react';
import { Link } from 'react-router-dom';

class Category extends React.Component {
    constructor(props){
        super(props)
        // this.state = {
        //     categories,
        //     categoryId
        // }
    }

    componentDidMount(){
        this.props.fetchCategories()
    }

    imageLogic(id) {
        switch (id) {
            case "2":
            return craft;
            case "3": 
            return escort;
            case "4":
            return slay;
            default:
            return ftch;
        }
    }

    render() {
        const {categories} = this.props
        const id = this.props.match.params.categoryId
        const ftch = window.ftch
        const slay = window.slay
        const craft = window.craft
        const escort = window.escort

        
        const dynamicImage = (
           categories && categories.length > 1 && id > 1? this.imageLogic(id) : ftch
        )

    return (    
        <div className="show-container">
            <img className="show-image" src={dynamicImage}/>
                    {
                        categories && categories.length > 1 ? 
                        <div>
                            <h1 className="show-h1">{categories[id - 1].category_name}</h1>
                            <p className="show-p">{categories[id - 1].ex_description}</p>
                        </div> :  <h1>Not loaded</h1>
                    }  
        </div> 
                )
            }         
}

export default Category