import React from 'react';
import { Link } from 'react-router-dom';
// import { getQuests } from '../../utils/quest';

class QuestPage extends React.Component {
    constructor(props){
        super(props)
        this.questShow = this.questShow.bind(this)
    }

    componentDidMount(){
        this.props.getQuests(this.props.creatorId)
    }


    questShow(){
        const {quests} = this.props;
        console.log(quests[0])
        const show = () => {
          const list = quests.map(quest =>
                 <div key={quest.extract.id}>
                    <p>{quest.extract.quest_name}</p>
                    <p>{quest.extract.start_time}</p>
                    <p>{quest.extract.details}</p>
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
            </div>
        )
    }
}

export default QuestPage;