import { connect } from 'react-redux';
import { fetchProjects } from '../../state';
import Hero from './Hero';

const mapStateToProps = (state, pdp) => {
  const list = [
    {
      title: `${pdp.data.credits_avail.quatinty} carbon ${pdp.data.credits_avail.unit} available`,
      description: `This project generates ${pdp.data.credits_issued.quatinty} ${pdp.data.credits_issued.unit} per year`,
    },
    {
      title: `${pdp.data.project_type}`,
      description: '',
    },
    {
      title: pdp.data.location.name,
      description: '',
    },
  ];

  return {
    projects: state.projectState.projects,
    project: pdp.data,
    list,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hero);
