import { connect } from 'react-redux';
import QuestForm from './quest_form';
import { createQuest, updateQuest, fetchQuest } from '../../actions/quest'
// import { fetchCategories } from '../../actions/category'
import {fetchAdventurers} from '../../actions/adventurer'

const mSTP = (state, ownProps) => {
    
    const creatorId = state.session.currentUser.id;
    const adventurers = Object.keys(state.entities.adventurers).map(key =>state.entities.adventurers[key])
    return ({
        creatorId,
        adventurers,
        adventurerId: ownProps[ownProps.match.params.id]
       
    })
}

const mDTP = dispatch => ({
    action: quest => dispatch(createQuest(quest)),
    // updateQuest: quest => dispatch(updateQuest(quest)),
    // fetchQuest: questId => dispatch(fetchQuest(questId)),
    fetchAdventurers: () => dispatch(fetchAdventurers())
})

export default connect(mSTP, mDTP)(QuestForm);
