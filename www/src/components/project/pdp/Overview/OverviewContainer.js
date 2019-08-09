import { connect } from 'react-redux';
import { fetchProjects } from '../../state';
import Overview from './Overview';

const mapStateToProps = (state, pdp) => {
  const [locationName, locationAddres1, locationAddres2] = pdp.data.location.name.split(',');
  return {
    projects: state.projectState.projects,
    project: pdp.data,
    locationName,
    locationAddres1,
    locationAddres2,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Overview);
