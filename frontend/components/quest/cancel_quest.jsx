import React from 'react';
import { Link } from 'react-router-dom';

class CancelQuest extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            id: '',
            quest_name: '',
            category_id: '1',
            details: '',
            creator_id: this.props.creatorId,
            start_time: '',
            completed: 'true',
            adventurer_id: '',
        }
        this.formSetter = this.formSetter.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount(){
        this.props.fetchQuest(this.props.questId);
    }

    formSetter(){
        const {
            id,
            quest_name,
             category_id,
              details, 
              creator_id, 
              start_time, 
              adventurer_id, 
              } = this.props.quest;

              this.setState({
                  id,
                  quest_name,
                  category_id,
                  details,
                  creator_id,
                  start_time,
                  adventurer_id,
              })

    }

    // questForm(){

    // }
    submit(){
        const quest = this.state;
        this.props.updateQuest(quest);
    }

    update(type) {
        return (e) => {
          this.setState({ [type]: e.target.value });
        };
      }
    render(){
        const {quest_name,
            category_id,
             details, 
             creator_id, 
             start_time, 
             completed, 
             adventurer_id, 
             } = this.state;

             const quest = this.props.quest;
             if (quest && (this.state.quest_name === '')){
                 this.formSetter()  
             }
        return (
           <div>
               Your Quest
        <p>{`${quest_name}`}</p>
        <p>{`${details}`}</p>
        <p>{`${category_id}`}</p>
        <p>{`${start_time}`}</p>
        <p>{`${adventurer_id}`}</p>
        <Link  className="btn-4" to="/quests" onClick={() => this.submit()}>Cancel Quest</Link>
            </div> 
        )
        
    }
}

export default CancelQuest;