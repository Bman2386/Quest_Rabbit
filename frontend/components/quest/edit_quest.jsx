import React from 'react';
import { Link } from 'react-router-dom';

class EditQuest extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            id: '',
            quest_name: '',
            category_id: '1',
            details: '',
            creator_id: this.props.creatorId,
            start_time: '',
            completed: 'false',
            adventurer_id: '',
        }
        this.formSetter = this.formSetter.bind(this);
        this.update = this.update.bind(this);
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
              completed, 
              adventurer_id, 
              } = this.props.quest;

              this.setState({
                  id,
                  quest_name,
                  category_id,
                  details,
                  creator_id,
                  start_time,
                  completed,
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
               Edit Quest
               <input type="text"
               value={quest_name}
               onChange={this.update('quest_name')}
               className='input'
               />
                <textarea
               value={details}
               onChange={this.update('details')}
               className='input'
               />
        <select className="select" name={category_id} onChange={this.update('category_id')}>
                        <option value="1" >Fetch</option>
                        <option value="2" >Craft</option>
                        <option value="3" >Escort</option>
                        <option value="4" >Slay</option>
                </select> 
        <p>{`${start_time}`}</p>
        <input type="text"
        value={start_time}
        onChange={this.update('start_time')}
        placeholder={start_time}/>

        <p>{`${adventurer_id}`}</p>
        <Link  className="btn-4" to="/quests" onClick={() => this.submit()}>Submit</Link>
            </div> 
        )
        
    }
}

export default EditQuest;