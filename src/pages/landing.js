import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProjectPreview from '../components/project/Preview';

class LandingPage extends Component {
  static propTypes = {
    projectState: PropTypes.object.isRequired,
  };

  render() {
    const { projectState } = this.props;
    console.log(this.props);
    return <ProjectPreview project={projectState} />;
  }
}

export default LandingPage;
