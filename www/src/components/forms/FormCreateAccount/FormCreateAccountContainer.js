import { connect } from 'react-redux';
import { submitRequestCreateAccount } from '../../project/state';
import FormCreateAccount from './FormCreateAccount';

const mapStateToProps = state => {
  const user = state.userState.user;
  const defaultValues = {
    role_id: user ? 1 : '0',
    name: user ? user.name : 'Jhon Perez',
    username: user ? user.email : 'email@mail.com',
    email: user ? user.email : 'email@mail.com',
    auth0: user ? user.sub : '00000',
    companyname: 'For Company ',
    phonenumber: '123-123456',
  };
  return {
    usersaved: state.projectState.createAccount,
    user: state.userState.user,
    loadingform: state.projectState.loadingform,
    defaultValues: defaultValues,
  };
};

const mapDispatchToProps = dispatch => ({
  submitRequestCreateAccount: data => dispatch(submitRequestCreateAccount(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormCreateAccount);
