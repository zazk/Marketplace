import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const projectDetail = {
  name: 'Protect our forests in the fight against climate change',
  credits_avail: '100,000',
  projects_quantity: '14',
  total_land: '75,020',
  total_biomass: '750,654.21',
  main_picture: '/static/assets/images/banner-landingprojects.jpg',
  text_intro: 'Take part in our challenge',
};

class ProjectPreview extends Component {
  render() {
    return (
      <LandingProyect>
        <LandingMain>
          <IntroMain>
            <div className="lp-intro">
              <SubTitle>{projectDetail.text_intro}</SubTitle>
              <Title>{projectDetail.name}</Title>

              <div className="lp-intro-down">
                <div className="lp-btn">
                  <Link href="/">
                    <button className="btn">
                      <span>View projects</span>
                    </button>
                  </Link>
                </div>
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
const LandingProyect = styled.div`
  color: #fff;
  background-size: cover;
  position: relative;
  background-image: url(${projectDetail.main_picture});
`;
const LandingMain = styled.div`
  max-width: 1024px;
  margin: auto;
  justify-content: space-between;
  height: calc(100vh - 70px);
  align-items: center;
  position: relative;
  z-index: 10;
  width: 94%;
  display: flex;
  flex-flow: row wrap;
`;
const Title = styled.h3`
  font-size: 44px;
  margin: 0;
  margin-bottom: 30px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 700;
  line-height: 49px;
  @media screen and (max-width: 1024px) {
    font-size: 33px;
    line-height: 35px;
  }
  @media screen and (max-width: 640px) {
    font-size: 26px;
    line-height: 28px;
    padding-right: 30px;
  }
`;
const SubTitle = styled.h4`
  font-size: 16px;
  margin: 0;
  margin-bottom: 20px;
`;
const IntroMain = styled.div`
  width: 43%;
  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;
const LandingDescription = styled.div`
  width: 43%;
  display: flex;
  flex-flow: row wrap;
  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;
const Item = styled.div`
  width: 50%;
  margin-bottom: 40px;
  padding-right: 10px;
  box-sizing: border-box;
  span {
    font-size: 37px;
    font-family: 'Work Sans', sans-serif;
    font-weight: 600;
  }
  p {
    margin: 0;
    font-size: 16px;
  }
  @media screen and (max-width: 1024px) {
    span {
      font-size: 26px;
    }
  }
  @media screen and (max-width: 640px) {
    span {
      font-size: 20px;
    }
    p {
      font-size: 14px;
    }
  }
`;
export default ProjectPreview;
