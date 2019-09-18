import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const mapStateToProps = state => ({
  user: state.userState.user,
});

const withAuth = Component =>
  connect(mapStateToProps)(
    withRouter(({ user, history, ...props }) => {
      if (!user) {
        history.push('/');
      }
      return Component({ ...props });
    })
  );

export default withAuth;
