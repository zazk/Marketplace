import { connect } from 'react-redux';
import ValidateAuth from './ValidateAuth';
import { withRouter } from 'react-router';

const mapStateToProps = state => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(withRouter(ValidateAuth));
