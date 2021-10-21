import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session';
import Login from './login';



const mSTP = ({errors}) => {
  return {
    errors: errors.session
  }
}
const mapDispatchToProps = dispatch => ({
  login: formUser => dispatch(login(formUser)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mapDispatchToProps)(Login);
