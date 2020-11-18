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
            status: 1
        }  
       this.adv = this.props.fetchAdventurers();
       this.next = this.next.bind(this);
       this.back = this.back.bind(this);
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
       this.select = this.select.bind(this);        
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

    select(input){
        this.handleChange(input);
        this.next();
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
        const { quest_name, category_id, details, start_time, adventurer_id } = this.state;
        const values = { quest_name, category_id, details, start_time, adventurer_id };
        const {adventurers} = this.props
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


