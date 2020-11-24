import React from 'react';
import { getQuests } from '../../utils/quest';

class QuestPage extends React.Component {
    constructor(props){
        super(props)
        this.questShow = this.questShow.bind(this)
    }

    componentDidMount(){
        this.props.getQuests(this.props.creatorId)
    }

    editQuest(quest){
        console.log(quest)
    }

    questShow(){
        const {quests} = this.props;
        const show = () => {
          const list = quests.map(quest =>
                 <div key={quest}>
                    <p>{quest.extract.quest_name}</p>
                    <p>{quest.extract.start_time}</p>
                    <p>{quest.extract.completed}</p>
                    <button value={quest} onClick={(quest) => this.editQuest(quest)}>Edit</button>
                </div>
            )
            return list
        }
            
        return (
            quests && quests.length > 0 ? 
            show()
        : <h1>No quests Yet</h1>
        )}

    render(){
        return(
            <div>
                <div>{this.questShow()}</div>
               <div> Quests should show above</div>
            </div>
        )
    }
}

export default QuestPage;