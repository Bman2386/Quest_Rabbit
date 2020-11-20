import React from 'react';
import PartOne from './part_one';
import PartTwo from './part_two';
import PartThree from './part_three';

class QuestForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
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

        this.date = this.state.date

       this.adv = this.props.fetchAdventurers();
       this.next = this.next.bind(this);
       this.back = this.back.bind(this);
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
       this.select = this.select.bind(this);       
       this.subCurrentMonth = this.subCurrentMonth.bind(this);
       this.addCurrentMonth = this.addCurrentMonth.bind(this); 
       this.handleDay = this.handleDay.bind(this); 
       this.handleHour = this.handleHour.bind(this);
    }

     next() {
         this.setState({status: (this.state.status += 1)});
        }

    back() {
        this.setState({status: this.state.status -= 1})
        }
    // componentDidMount(){
    //     this.props.fetchAdventurers()
    // }
    subCurrentMonth() {
      const date1 = new Date(this.state.date);
      const month = date1.getMonth();
      date1.setMonth(month - 1);
       this.setState({date: date1});
  }

   addCurrentMonth() {
    const date1 = new Date(this.state.date);
    const month = date1.getMonth();
    date1.setMonth(month + 1);
    this.setState({date: date1});
  }



    select(input){
        this.setState({adventurer_id: input})
        this.next();
    }

    handleDay(day){
      const day1 = new Date(this.state.date);
      const selected = new Date(day1.setDate(day));
      this.setState({start_time: selected});
    }

    handleHour(e){
     const {value} = e;
      const day1 = new Date(this.state.start_time);
      const selected = new Date(day1.setHours(value, 0, 0));
      this.setState({start_time: selected});
      
    }
    handleChange(input) {
        if (input !== "undefined"){
          return e => {
           this.setState({ [input]: e.target.value}) 
            }  
        }
        
      }

    handleSubmit(e) {
        if (e) {e.preventDefault()} 
        const questForm = {
            quest_name: this.state.quest_name,
            category_id: this.state.category_id,
            details: this.state.details,
            creator_id: this.props.creatorId,
            start_time: this.state.start_time,
            completed: 'false',
            adventurer_id: this.state.adventurer_id
        };
        this.props.action(questForm);
    }

    render(){
        const {status} = this.state;
        const { quest_name, category_id, details, start_time, adventurer_id, date } = this.state;
        const values = { quest_name, category_id, details, start_time, adventurer_id, date };
        const {adventurers} = this.props;

        const months = [
          "January",
          "Febuary",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
      ];
    const today = {
          month: months[this.state.date.getMonth()],
          date: this.date.toDateString()
     }
  
     const lastDay = new Date(this.state.date.getFullYear(), this.state.date.getMonth() + 1, 0).getDate();
     const firstDayIndex = new Date(this.state.date.getFullYear(), this.state.date.getMonth(), 1).getDay();
     const prevLastDay = new Date(this.state.date.getFullYear(), this.state.date.getMonth(), 0).getDate();
     const lastDayIndex = new Date(this.state.date.getFullYear(), this.state.date.getMonth() + 1, 0).getDay();
  
     const nextDays = 7 - lastDayIndex - 1;
      
     
     const tally = () => {
         let days = [];
         if (firstDayIndex > 1) {
             for(let x = firstDayIndex; x > 0; x--){
         let num = `${prevLastDay - x + 1}`;
            days.push(num) 
         }
      }
          
         for(let i = 1; i <= lastDay; i++){
             days.push(i)
         }
  
         for(let j=1; j<=nextDays; j++){
             let num2 = `${j}`;
             days.push(num2)
         }
         
         return days
     }
  
      const monthDays = () => {
         const days = tally();
         const today = this.date.getDate();
         const current = function(day) {
             if (day=== today){
                 return 'today';
             } else if (typeof day === 'string'){
                  return 'prev-month'
             } else {
                 return "";
             }
         }
         const dayKey = function(day) {
             if (typeof day === 'string'){
                 day *= 100
                 return day
             } else {
                 return day
             }
         }
         const month = days.map(day => 
              <button 
              
              className={current(day)}
              id={current(day)}
              type='submit'
              value={this.state.start_time}
              onClick={() => this.handleDay(day) }>{day}</button>)
      
              return month;
     }
 
        switch (status) {
            case 1:
              return (
                <PartOne 
                values = {values} 
                handleChange = {this.handleChange}
                next = {this.next}
                />
              )
            case 2:
              return (
                <PartTwo 
                values = {values} 
                select = {this.select}
                back = {this.back}
                adv = {adventurers}
                />
              )
            
            case 3:
              return (
                <PartThree
                values={values}
                handleChange={this.handleChange}
                addCurrentMonth={this.addCurrentMonth}
                subCurrentMonth={this.subCurrentMonth}
                handleHour={this.handleHour}
                today={today}
                monthDays = {monthDays}
                back={this.back}
                submit={this.handleSubmit}
                />
              )
          }
        }
        // render(){
        //     return(
        //         <div>
        //             {this.renderForm()}
        //         </div>
        //     )
        // }
    }

export default QuestForm
    

    // renderForm2(){
        
    //     return(
    //         <div>
    //             <ul className='bar1'>
    //             <li className='currentN'>1</li>
    //             <div className='lineN'></div>
    //             <li className='grey-out'>2</li>
    //             <div className='lineN'></div>
    //             <li className='grey-out'>3</li>
    //         </ul>
    //         <ul>
    //             <li className='current'>Describe your Quest</li>
    //             <li className='line'>Browse Adventurers</li>
    //             <li className='line'>Choose date {'&'} Time</li>
    //         </ul>
    //         <form onSubmit={this.handleSubmit} className="quest-form">
    //         <div>{this.list()}</div>
    //         </form>
    //         </div>
    //     )
    // }

    // renderForm3(){
    //     return(
    //         <div>
    //             <ul className='bar1'>
    //             <li className='currentN'>1</li>
    //             <div className='lineN'></div>
    //             <li className='grey-out'>2</li>
    //             <div className='lineN'></div>
    //             <li className='grey-out'>3</li>
    //         </ul>
    //         <ul>
    //             <li className='current'>Describe your Quest</li>
    //             <li className='line'>Browse Adventurers</li>
    //             <li className='line'>Choose date {'&'} Time</li>
    //         </ul>
    //         <p>choose date format</p>
    //         </div>
    //     )
    // }
    // formChanger(){
    //         if (this.status === 1){
    //             return this.renderForm1()
    //         } else if (this.status === 2){
    //             return this.renderForm2()
    //         } else if (this.status === 3){
    //             return this.renderForm3()
    //         }
    //     }

    // render(){
    //     return (
    //     <div>{this.formChanger()}</div>
    //     )
    // }


