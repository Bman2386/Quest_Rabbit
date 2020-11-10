import { connect } from 'react-redux';
import QuestForm from './quest_form';
import { createQuest, updateQuest, fetchQuest } from '../../actions/quest'
import { fetchCategories } from '../../actions/category'

const mSTP = (state, ownProps) => ({
    quest: {
        quest_name: '',
        category_id: ownProps[ownProps.match.params.id],
        details: '',
        creator_id: state.session.currentUser.id,
        start_time: '',
        completed: false,
        status: ''
    },
    categories: Object.keys(state.entities.categories).map(key => state.entities.categories[key])
})

const mDTP = dispatch => ({
    action: quest => dispatch(createQuest(quest)),
    fetchCategories: () => dispatch(fetchCategories()),
})

export default connect(mSTP, mDTP)(QuestForm);
