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
        this.dateShow = this.dateShow.bind(this);
        this.changeDate = this.changeDate.bind(this);
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
        const startTime = new Date(this.state.start_time)
        const quest = {
            id: this.state.id,
            quest_name: this.state.quest_name,
            category_id: this.state.category_id,
            details: this.state.details,
            creator_id: this.props.creatorId,
            start_time: startTime,
            completed: 'false',
            adventurer_id: this.state.adventurer_id,
        }
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

    dateShow(){
        const {start_time} = this.state;
        if (start_time !== ''){
            const startDate = new Date(start_time)
            // const [month, date, year] = startDate.toLocaleDateString("en-US").split("/")
            // const day = questDay.getDay();
            // const month = questDay.getMonth();
            // const year = questDay.getYear();
            return (
            <div className='p'>{`${startDate}`}</div>
            )
        } else {
            return ''
        }
    }

    changeDate(event, change){
        const {start_time} = this.state;
        const startTime = new Date(start_time);
        switch (change) {
            case 'month':
                const startMonth = startTime.setMonth(event.target.value);
            return this.setState({start_time: startMonth});
            case 'hour':
                const starthour = startTime.setHours(event.target.value);
            return this.setState({start_time: starthour});
            case 'day':
                const startDay = startTime.setDate(event.target.value);
            return this.setState({start_time: startDay});
            case 'minute':
                const startMinute = startTime.setMinutes(event.target.value);
            return this.setState({start_time: startMinute});
            case 'convert':
                let hour = startTime.getHours();
                
                if (event.target.value === 'AM'){
                    
                    if (hour > 12){
                        hour -= 12
                    }
                } else {
                    
                    if (hour < 12){
                        hour += 12
                    }
                }
                const startHour = startTime.setHours(hour);
            return this.setState({start_time: startHour});
            default:
                break;
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
               <div className='label-container'>
                   <div className='label-2'>
                       <select onChange={(event) => this.changeDate(event, 'month')} value={this.state.start_time}>
                           <option value="">Month</option>
                            <option value={0}>Jan</option>
                            <option value={1}>Feb</option>
                            <option value={2}>Mar</option>
                            <option value={3}>Apr</option>
                            <option value={4}>May</option>
                            <option value={5}>Jun</option>
                            <option value={6}>July</option>
                            <option value={7}>Aug</option>
                            <option value={8}>Sept</option>
                            <option value={9}>Oct</option>
                            <option value={10}>Nov</option>
                            <option value={11}>Dec</option>
                       </select>
                       <select onChange={event => this.changeDate(event, 'day')} value={this.state.start_time}>
                           <option value="">Day</option>
                           <option value={1}>1</option>
                           <option value={2}>2</option>
                           <option value={3}>3</option>
                           <option value={4}>4</option>
                           <option value={5}>5</option>
                           <option value={6}>6</option>
                           <option value={7}>7</option>
                           <option value={8}>8</option>
                           <option value={9}>9</option>
                           <option value={10}>10</option>
                           <option value={11}>11</option>
                           <option value={12}>12</option>
                           <option value={13}>13</option>
                           <option value={14}>14</option>
                           <option value={15}>15</option>
                           <option value={16}>16</option>
                           <option value={17}>17</option>
                           <option value={18}>18</option>
                           <option value={19}>19</option>
                           <option value={20}>20</option>
                           <option value={21}>21</option>
                           <option value={22}>22</option>
                           <option value={23}>23</option>
                           <option value={24}>24</option>
                           <option value={25}>25</option>
                           <option value={26}>26</option>
                           <option value={27}>27</option>
                           <option value={28}>28</option>
                           <option value={29}>29</option>
                           <option value={30}>30</option>
                           <option value={31}>31</option>
                       </select>
                       <select onChange={event => this.changeDate(event, 'hour')} value={this.state.start_time}>
                            <option value="">Hour</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                       </select>
                       <select onChange={event => this.changeDate(event, 'minute')} value={this.state.start_time}>
                            <option value="">Minute</option>
                            <option value={0}>00</option>
                            <option value={15}>15</option>
                            <option value={30}>30</option>
                            <option value={45}>45</option>
                       </select>
                       <select onChange={event => this.changeDate(event, 'convert')} value={this.state.start_time}>
                            <option value="">am/pm</option>
                            <option value='AM'>AM</option>
                            <option value='PM'>PM</option>
                       </select>
                   </div>
               </div>
                   
        {this.dateShow()}
        <p className= 'p'>Quest Category: {this.categoryShow()}</p> 
        <p className='p'>Adventurer: {this.adShow()}</p>
        <Link  className="btn-4" to="/"  id='margin' onClick={() => this.submit()}>Submit</Link>
            </div> 
        )
        
    }
}

export default EditQuest;