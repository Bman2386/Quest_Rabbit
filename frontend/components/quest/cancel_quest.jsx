import React from 'react';
import { Link } from 'react-router-dom';

class CancelQuest extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            id: '',
            quest_name: '',
            category_id: '',
            details: '',
            creator_id: this.props.creatorId,
            start_time: '',
            completed: 'true',
            adventurer_id: '',
            status: 1,
            body: '',
            rating: 0
        }
        this.formSetter = this.formSetter.bind(this);
        this.submit = this.submit.bind(this);
        this.yourQuest = this.yourQuest.bind(this);
        this.next = this.next.bind(this);
        this.writeReview = this.writeReview.bind(this);
        this.submitReview = this.submitReview.bind(this);
        this.avgCalc = this.avgCalc.bind(this);
    }

    componentDidMount(){
        this.props.fetchQuest(this.props.questId);
        this.props.fetchAdventurer(this.state.adventurer_id);
        this.props.fetchReviews();
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
        const {
            id,
            quest_name,
             category_id,
              details, 
              creator_id, 
              start_time, 
              adventurer_id, 
              completed
              } = this.state;
        const quest = {
            id,
            quest_name,
             category_id,
              details, 
              creator_id, 
              start_time, 
              adventurer_id,
              completed
        }
        this.props.updateQuest(quest);
    }

    update(type) {
        
        return (e) => {
          this.setState({ [type]: e.target.value });
        };
      }

      finalPart(){
          return(
              <div>
                  <div>By clicking submit you are cancelling your quest, are you sure you want to cancel?</div>
                <Link  className="btn-4" to="/" onClick={() => this.submit()}>Confirm</Link>  
              </div>
          )
        
      }

      next(){
          this.setState({status: (this.state.status += 1)})
      }

      yourQuest(){
         const {quest_name,
            category_id,
             details, 
             start_time, 
             adventurer_id, 
             } = this.state;
            
             const quest = this.props.quest;
             if (quest && (this.state.quest_name === '')){
                 this.formSetter()  
             } 

             return(
                 <div className='form'>
                     Your Quest
        <p className='p'>Quest Name: {`${quest_name}`}</p>
        <p className='p'>Details: {`${details}`}</p>
        <p className='p'>Category: {`${category_id}`}</p>
        <p className='p'>Start Time: {`${start_time}`}</p>
        <p className='p'>Adventurer Id:{`${adventurer_id}`}</p> 
        <button onClick={() => this.next()}>Cancel Quest</button>
                 </div>
             )
      }

     
      avgCalc(){
          
        const {rating, body, creator_id, adventurer_id} = this.state;
            const review = {rating, body, user_id: creator_id, adventurer_id};
            const firstId = this.props.adventurers[0].id
            const adv = this.props.adventurers[this.state.adventurer_id - firstId];
            const ratings = adv.total_ratings += 1;
            const el = Number(review.rating);
            const reviews = this.props.reviews;
            let sum = 0;
            reviews.forEach(ele =>{
                if (ele.extract.adventurer_id === this.state.adventurer_id){
                    let temp = Number(ele.extract.rating)
                    sum += temp;
                }
                return sum;
            })
            const avg = () => {
                return ((sum + el)/ratings)
            }
            debugger
            return avg()
      }
      submitReview(){
            const {rating, body, creator_id, adventurer_id} = this.state;
            const review = {rating, body, user_id: creator_id, adventurer_id};
            const firstId = this.props.adventurers[0].id
            const adv = this.props.adventurers[this.state.adventurer_id - firstId];
            debugger
            if (adv.total_ratings > 0){
               const ratings = adv.total_ratings += 1;
               const avg = this.avgCalc()
               const updateRating = {avg_rating: avg, total_ratings: ratings, id: adv.id}
              
               this.props.updateAdventurer(updateRating);
            } else {
                const newRating = {
                    avg_rating: rating,
                    total_ratings: 1,
                    id: adv.id
                    }
                
               this.props.updateAdventurer(newRating);
            }
            this.props.createReview(review);
            this.next();
      }
      writeReview(){
        const firstId = this.props.adventurers[0].id
        const adv = this.props.adventurers[this.state.adventurer_id - firstId];
        return(
            <div>
                <label>Review for: {`${adv.username}`}</label>
                <div>Rating:
                    <br/>
                    <label>
                        1 Star 
                        <input 
                      type="radio"
                      value={1}
                      name="1 Star"
                      checked={this.state.rating === "1"}
                      onChange={this.update("rating")}/>  
                    </label>
                    <br/>
                      <label>
                          2 Stars
                           <input 
                      type="radio"  
                      value={2}
                      name="2 Stars"
                      checked={this.state.rating === "2"}
                      onChange={this.update("rating")}/>
                      </label>
                      <br/>
                      <label>
                          3 Stars
                           <input 
                      type="radio"  
                      value={3}
                      name="3 Stars"
                      checked={this.state.rating === "3"}
                      onChange={this.update("rating")}/>
                      </label>
                      <br/>
                      <label>
                          4 Stars
                           <input 
                      type="radio"  
                      value={4}
                      name="4 Stars"
                      checked={this.state.rating === "4"}
                      onChange={this.update("rating")}/>
                      </label>
                      <br/>
                      <label>
                          5 Stars
                           <input 
                      type="radio"  
                      value={5}
                      name="5 Stars"
                      checked={this.state.rating === "5"}
                      onChange={this.update("rating")}/>
                      </label>
                      <br/>
                    
                </div>
                <label>
                    Body:
                   <textarea
                   value={this.state.body}
                   onChange={this.update("body")}/> 
                </label>
                
                <button onClick={() => this.submitReview()}>Submit Review</button>
            </div>
        )
      }
      pageSetter(){

        if (this.state.status === 1){
           return this.yourQuest()
        } else if (this.state.status === 2){

           return this.writeReview()
        } else if (this.state.status === 3){
            return this.finalPart()
        }
      }
    render(){
        
        return (
            <div>
       {this.pageSetter()}
            </div> 
        )
        
    }
}

export default CancelQuest;