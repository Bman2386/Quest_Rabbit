import { connect } from 'react-redux';
import QuestPage from './quest_page';
import { fetchQuests, updateQuest, fetchQuest } from '../../actions/quest';

const mSTP = (state, ownProps) => {
    // const quests = state.entities.quests
    const creatorId = state.session.currentUser.id;
    return ({
        quests: Object.keys(state.entities.quests).map(key => state.entities.quests[key]),
        creatorId
    })
}

const mDTP = dispatch => ({
    getQuests: (creatorId) => dispatch(fetchQuests(creatorId)),
    getQuest: questId => dispatch(fetchQuest(questId)),
    updateQuest: questId => dispatch(updateQuest(questId))
})

export default connect(mSTP, mDTP)(QuestPage);