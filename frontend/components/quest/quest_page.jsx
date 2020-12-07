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
            debugger    
           
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
    
       
    show(quests) {
        
            if (quests && quests.length > 0 && quests[0].extract){
                debugger
                const list = quests.map(quest =>
                    <div key={quest.extract.id} className='quest-name'>
                        <p className='p'>{quest.extract.quest_name}</p>
                        <p className='p'>Start Time: {quest.extract.start_time}</p>
                        <p className='p'>{quest.extract.details}</p>
                        <p className='p'>Category: {this.categoryShow(quest)}</p>
                        <p className='p'>Adventurer: {this.adShow(quest)}</p>
                        <Link 
                        to={`/edit/${quest.extract.id}`}
                        className="btn-4" 
                        questid={quest.extract.id}
                        >Edit</Link>
                        <Link 
                        to={`/delete/${quest.extract.id}`}
                        className="btn-4" 
                        questid={quest.extract.id}
                        >Cancel Quest</Link>
                </div>
            )
            return list
            } else {
               return(
                   <h1>No quests Yet</h1>
               ) 
            }
        }
   

    render(){
     
        return(
            <div>
                <div className="quest-form">{this.questShow()}</div>
            </div>
        )
    }
}

export default QuestPage;