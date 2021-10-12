import React from 'react';

class Category extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchCategories()
    }

    imageLogic(id) {
        const slay = window.slay
        const craft = window.craft
        const escort = window.escort
        const ftch = window.ftch
        //ftch = fetch, but couldn't be named 'fetch' as it is a keyword
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
        const categoryId = this.props.match.params.categoryId
        const dynamicImage = (
           categories && categories.length > 1 && categoryId > 1? this.imageLogic(categoryId) : window.ftch
        )

    return (    
        <div className="show-container">
            <img className="show-image" src={dynamicImage}/>
                    {
                        categories && categories.length > 1 ? 
                        <div>
                            <h1 className="show-h1">{categories[categoryId - 1].category_name}</h1>
                            <p className="show-p">{categories[categoryId - 1].ex_description}</p>
                        </div> :  ''
                    }  
        </div> 
                )
            }         
}

export default Category