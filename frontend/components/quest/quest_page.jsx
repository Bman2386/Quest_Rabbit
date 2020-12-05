import React from 'react';
import { Link } from 'react-router-dom';
// import { getQuests } from '../../utils/quest';

class QuestPage extends React.Component {
    constructor(props){
        super(props)
        this.questShow = this.questShow.bind(this)
    }

    componentDidMount(){
        this.props.getQuests(this.props.creatorId);
    }


    questShow(){
        const {quests} = this.props;
       
        
        if (quests && quests.length > 1 && !quests[quests.length -1].extract){
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
       
        const show = () => {

            if (quests && quests.length > 0){
                const list = quests.map(quest =>
                    <div key={quest.extract.id} className='quest-name'>
                        <p>{quest.extract.quest_name}</p>
                        <p>{quest.extract.start_time}</p>
                        <p>{quest.extract.details}</p>
                        <p>{quest.extract.completed}</p>
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
        return show();
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