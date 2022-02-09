import {connect} from 'react-redux';
import Categories from './category_show';
import { fetchCategories } from '../../actions/category';
import { saveData } from '../../actions/temp';

const mapStateToProps = (state, ownProps) => {
  return {
    categoryid: ownProps[ownProps.match.params.id],
    categories: Object.keys(state.entities.categories).map(key => state.entities.categories[key])
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories()),
  saveData: data => dispatch(saveData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);