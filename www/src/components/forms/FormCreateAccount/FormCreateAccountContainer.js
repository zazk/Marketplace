import { connect } from 'react-redux';
import { submitRequestCreateAccount } from '../../../components/common/user/state/operations';
import FormCreateAccount from './FormCreateAccount';

const mapStateToProps = state => {
  const user = state.userState.user;
  const defaultValues = {
    name: user ? user.name : 'Jhon Perez',
    username: user ? user.email : 'email@mail.com',
    email: user ? user.email : 'email@mail.com',
    auth0: user ? user.sub : '00000',
    companyname: 'For Company ',
    phonenumber: '123-123456',
  };
  return {
    userSaved: state.userState.createAccount,
    user: state.userState.user,
    defaultValues: defaultValues,
  };
};

const mapDispatchToProps = dispatch => ({
  submitRequestCreateAccount: (data, token) => dispatch(submitRequestCreateAccount(data, token)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormCreateAccount);
