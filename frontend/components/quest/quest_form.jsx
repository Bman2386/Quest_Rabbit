import React from 'react';
import PartOne from './part_one';
import PartTwo from './part_two';
import PartThree from './part_three';

class QuestForm extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchCategories()
       if (this.quest.id) {
           this.props.fetchQuest(this.state.quest.id)
       }
    }


    questMover(state) {
        const questId = this.props.quest.id ? this.props.quest.id : null
        switch (state.quest.status) {
            case "2":
            return <PartTwo
            props={this.props}/>
            case "3":
            return <PartThree
            props={this.props}/>
            default:
            return <PartOne
            props={this.props}/>;
        }
    }
    render() {
        
        return (
         <div>
        {this.questMover(state)}
        </div>   
        )}
}

export default QuestForm