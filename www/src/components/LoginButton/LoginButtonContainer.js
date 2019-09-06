import { connect } from 'react-redux';
import { fetchProjects } from '../project/state';
import { receiveUser } from '../common/user/state/actions';
import LoginButton from './LoginButton';
import Const from '../../utils/const';
const mapStateToProps = state => {
  return {
    user: state.userState.user,
  };
};
const checkUser = (auth0, history) => {
  fetch(`${Const.urlSite}api/account/auth0/${auth0}`)
    .then(response => response.json())
    .then(json => {
      if (json.username) {
        history.push('/list');
      } else {
        history.push('/create-account');
      }
    });
};

const mapDispatchToProps = dispatch => ({
  receiveUser: user => dispatch(receiveUser(user)),
  fetchProjects: () => dispatch(fetchProjects()),
  checkUser: (auth0, history) => checkUser(auth0, history),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginButton);
