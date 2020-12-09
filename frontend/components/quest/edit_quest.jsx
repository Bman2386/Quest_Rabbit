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
        this.categoryShow = this.categoryShow.bind(this);
        this.adShow = this.adShow.bind(this);
    }

    componentDidMount(){
        this.props.fetchQuest(this.props.questId);
        this.props.fetchAdventurers();
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

      categoryShow() {
        if (this.state.category_id === 1){
            return 'Fetch'
        } else if (this.state.category_id === 2){
            return 'Craft'
        } else if (this.state.category_id === 3){
            return 'Escort'
        } else if (this.state.category_id === 4){
            return 'Slay'
        }
    }

    adShow(){
        const advs = this.props.adventurers;
        if (advs.length > 0 && this.state.adventurer_id !== ''){
            const firstId = advs[0].id;
        const ad = advs[this.state.adventurer_id - firstId]
        return ad.username
        }
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
           <div className='edit-quest-container'>
               <h1 className='h1'>Edit Quest</h1>
               <div className='label-2'>
                   <div className='type'>Quest Name:</div>
                   <input type="text"
               value={quest_name}
               onChange={this.update('quest_name')}
               className='input2'
               />
               </div>
               <div className='label-2'>
                <div className='type'>Details:</div>
                 <textarea
               value={details}
               onChange={this.update('details')}
               className='textarea2'
               />
               </div>
                   <div className='label-2'>
                       <div className='type'>Start Time:</div>
                        <input type="text"
        value={start_time}
        onChange={this.update('start_time')}
        placeholder={start_time}
        className='input2'/> 
                   </div>
              
        <p className= 'p'>Quest Category: {this.categoryShow()}</p> 
        <p className='p'>Adventurer: {this.adShow()}</p>
        <Link  className="btn-4" to="/"  id='margin' onClick={() => this.submit()}>Submit</Link>
            </div> 
        )
        
    }
}

export default EditQuest;