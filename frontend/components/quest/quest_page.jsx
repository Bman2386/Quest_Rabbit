import React from 'react';
import { Link } from 'react-router-dom';
// import { getQuests } from '../../utils/quest';

class QuestPage extends React.Component {
    constructor(props){
        super(props)
        this.questShow = this.questShow.bind(this);
        this.categoryShow = this.categoryShow.bind(this);
        this.adShow = this.adShow.bind(this);
        this.show = this.show.bind(this);
        this.timeShow = this.timeShow.bind(this);
    }

    componentDidMount(){
        this.props.fetchAdv();
        this.props.getQuests(this.props.creatorId);
        
    }

    categoryShow(quest) {
        if (quest.extract.category_id === 1){
            return 'Fetch'
        } else if (quest.extract.category_id === 2){
            return 'Craft'
        } else if (quest.extract.category_id === 3){
            return 'Escort'
        } else if (quest.extract.category_id === 4){
            return 'Slay'
        }
    }

    
    adShow(quest){
         const advs = this.props.adventurers;
        if (advs.length === 3 && quest.extract.adventurer_id !== ''){
              
           
            const firstId = advs[0].id;
        const ad = advs[quest.extract.adventurer_id - firstId]
        return ad.username
        } else {
            return 'error'
        }
    }
    questShow(){
        const {quests} = this.props;
       
        
        if (quests && quests.length > 0 && !quests[quests.length -1].extract){
            const last = quests.pop();
            
            const newLast = Object.assign({}, {extract: last});
            
            quests.push(newLast);
        }
            quests.forEach(quest => {
                if(quest && quest.extract && quest.extract.completed === true){
                    let idx = quests.indexOf(quest)
                quests.slice(1, idx);
    
            }
        })

        return this.show(quests);

    }
    
       timeShow(quest){
           const startTime = new Date(quest.extract.start_time);
        return (
            <div className='orders'>{`${startTime}`}</div>
        )
       }
    show(quests) {
        
            if (quests && quests.length > 0 && quests[0].extract){
                const list = quests.map(quest =>
                    <div key={quest.extract.id} className='quest-name'>
                        <p className='p'> Quest Name: {quest.extract.quest_name}</p>
                        <p className='p'>Details: {quest.extract.details}</p>
                        <p className='p'>Start Time: {this.timeShow(quest)}</p>
                        <p className='p'>Category: {this.categoryShow(quest)}</p>
                        <p className='p'>Adventurer: {this.adShow(quest)}</p>
                        <Link 
                        to={`/edit/${quest.extract.id}`}
                        className="btn-4" 
                        id='margin'
                        questid={quest.extract.id}
                        >Edit Quest</Link>
                        <Link 
                        to={`/delete/${quest.extract.id}`}
                        className="btn-4" 
                        id='margin'
                        questid={quest.extract.id}
                        >Cancel Quest</Link>
                </div>
            )
            return list
            } else {
               return(
                   <div className="quest-name">
                       <h1 className='h1' id='center'>Have something else on your to-do list?</h1>
                       <p className='p'>Book your next Quest or manage future to-dos  with Quest Rabbit</p>
                       <Link to="/quest"className='button-submit' id='center'>Check It Off Your List</Link>
                   </div>
                   
               ) 
            }
        }
   

    render(){
     
        return(
            <div>
                <div className="form2">{this.questShow()}</div>
            </div>
        )
    }
}

export default QuestPage;