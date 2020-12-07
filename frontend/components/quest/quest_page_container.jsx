import { connect } from 'react-redux';
import QuestPage from './quest_page';
import { fetchQuests} from '../../actions/quest';
import {fetchAdventurers} from '../../actions/adventurer'

const mSTP = (state, ownProps) => {
    // const quests = state.entities.quests
    const creatorId = state.session.currentUser.id;
    const adv = Object.keys(state.entities.adventurers).map(key => state.entities.adventurers[key])
    return ({
        quests: Object.keys(state.entities.quests).map(key => state.entities.quests[key]),
        creatorId,
        adventurers: adv
    }) 
}

const mDTP = dispatch => ({
    getQuests: (creatorId) => dispatch(fetchQuests(creatorId)),
    fetchAdv: () => dispatch(fetchAdventurers())
    // getQuest: questId => dispatch(fetchQuest(questId)),
    // updateQuest: questId => dispatch(updateQuest(questId))
})

export default connect(mSTP, mDTP)(QuestPage);