import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Auth0Lock } from 'auth0-lock';

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

const Preview = ({ projects, fetchProjects }) => {
  const lock = new Auth0Lock('sfj8nlpFONfJanArPrB8PpcB0E9FU4UI', 'marketplace-pachama.auth0.com');
  const openLogin = () => {
    lock.show();
  };

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);
  return (
    <LandingProyect picture={projectDetail.main_picture}>
      <LandingMain>
        <IntroMain>
          <div className="lp-intro">
            <SubTitle>{projectDetail.text_intro}</SubTitle>
            <Title>{projectDetail.name}</Title>

            <div className="lp-intro-down">
              <div className="lp-btn">
                <Link to="/">
                  <ViewProjects onClick={() => openLogin()}>
                    <em>Login In</em>
                  </ViewProjects>
                </Link>
              </div>
              <RequestAccess>
                <span>Or Request Beta Access</span>
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
};
export default Preview;
