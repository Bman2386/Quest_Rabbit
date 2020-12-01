import React from 'react';

class EditQuest extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            quest_name: '',
            category_id: '1',
            details: '',
            creator_id: this.props.creatorId,
            start_time: '',
            completed: 'false',
            adventurer_id: '',
            status: 1,
            date: new Date()
        }
    }

    componentDidMount(){
        this.props.fetchQuest(this.props.questId)
    }

    // questForm(){

    // }
    render(){
        return (
           <div>Quests edit form will go here?</div> 
        )
        
    }
}

export default EditQuest;