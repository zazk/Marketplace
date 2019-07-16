import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const projectDetail = {
  name: 'Protect our forests in the fight against climate change',
  credits_avail: '100,000',
  projects_quantity: '14',
  total_land: '75,020',
  total_biomass: '750,654.21',
  main_picture: '/static/assets/images/banner-landingprojects.jpg',
  text_intro: 'Take part in our challenge',
};

class LandingPage extends Component {
  render() {
    return (
      <div className="content-main flex">
        <div className="lp-intro-main">
          <div className="lp-intro">
            <h4 className="lp-subtitle">{projectDetail.text_intro}</h4>
            <h3 className="lp-title">{projectDetail.name}</h3>

            <div className="lp-intro-down">
              <div className="lp-btn">
                <Link href="/">
                  <button className="btn">
                    <span>View projects</span>
                  </button>
                </Link>
              </div>
              <h4 className="lp-subtitle">Projects available upon authentication</h4>
            </div>
          </div>
        </div>
        <div className="lp-description flex">
          <div className="lp-description-item">
            <span>{projectDetail.credits_avail}</span>
            <p>Carbon credits available</p>
          </div>
          <div className="lp-description-item">
            <span>{projectDetail.projects_quantity}</span>
            <p>Projects</p>
          </div>
          <div className="lp-description-item">
            <span>{projectDetail.total_land}</span>
            <p>Hectares</p>
          </div>
          <div className="lp-description-item">
            <span>{projectDetail.total_biomass}</span>
            <p>Total biomass</p>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
