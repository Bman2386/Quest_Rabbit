import { connect } from 'react-redux';
import QuestForm from './quest_form';
import { createQuest } from '../../actions/quest'

const mSTP = (state, currentUser) => ({
    quest: {
        quest_name: '',
        category_id: '',
        details: '',
        creator_id: currentUser.id,
        start_time: '',
        completed: false,
    },
    formType: 'Add Quest'
})

const mDTP = dispatch => ({
    action: quest => dispatch(createQuest(quest))
})

export default connect(mSTP, mDTP)(QuestForm);
