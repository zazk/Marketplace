import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchProjects } from '../state/operations';
import { requestProjects } from '../state/actions';
import store from '../../../rootReducer';
import {
  ViewProjects,
  LandingProyect,
  LandingMain,
  Title,
  SubTitle,
  IntroMain,
  LandingDescription,
  Item,
  RequestAccess,
} from './style';

const projectDetail = {
  name: 'Protect our forests in the fight against climate change',
  credits_avail: '100,000',
  projects_quantity: '14',
  total_land: '75,020',
  total_biomass: '750,654.21',
  main_picture: '/static/assets/images/banner-landingprojects.jpg',
  text_intro: 'Take part in our challenge',
};

const mapStateToProps = state => ({
  projects: state.projects,
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
});

class ProjectPreview extends Component {
  componentDidMount() {
    console.log('xxxx', this.props);
    this.props.fetchProjects();

    console.log('xxxx');
  }
  render() {
    // fetchProjects();

    console.log('proyectos', this.props);
    return (
      <LandingProyect picture={projectDetail.main_picture}>
        <LandingMain>
          <IntroMain>
            <div className="lp-intro">
              <SubTitle>{projectDetail.text_intro}</SubTitle>
              <Title>{projectDetail.name}</Title>

              <div className="lp-intro-down">
                <div className="lp-btn">
                  <Link href="/">
                    <ViewProjects>
                      <em>View projects</em>
                    </ViewProjects>
                  </Link>
                </div>
                <RequestAccess>
                  <a href="">Or Request Beta Access</a>
                </RequestAccess>
                <SubTitle>Projects available upon authentication</SubTitle>
              </div>
            </div>
          </IntroMain>
          <LandingDescription>
            <Item>
              <span>{projectDetail.credits_avail}</span>
              <p>Carbon credits available</p>
            </Item>
            <Item>
              <span>{projectDetail.projects_quantity}</span>
              <p>Projects</p>
            </Item>
            <Item>
              <span>{projectDetail.total_land}</span>
              <p>Hectares</p>
            </Item>
            <Item>
              <span>{projectDetail.total_biomass}</span>
              <p>Total biomass</p>
            </Item>
          </LandingDescription>
        </LandingMain>
      </LandingProyect>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectPreview);
