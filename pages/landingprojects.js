import React from 'react';
import Layout from '../components/layout';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import dataProjects from '../projects-data/projects';
function LandingProjects({ user, router }) {
  const iddata = router.query.project;
  const idproject = iddata ? router.query.project : 0;
  const project = dataProjects[idproject].pdp;
  const urlLogin = iddata ? `/login?project=${idproject}` : '/login';

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const totalCreditsAvail = dataProjects
    .map(v => parseInt(v.pdp.credits_avail.quatinty.replace(/,/g, '')))
    .reduce((sum, current) => sum + current, 0);
  const totalLandArea = dataProjects
    .map(v => parseInt(v.pdp.total_land.area.replace(/,/g, '')))
    .reduce((sum, current) => sum + current, 0);
  const totalBiomass = dataProjects
    .map(v => parseInt(v.pdp.totalBiomass.replace(/,/g, '')))
    .reduce((sum, current) => sum + current, 0);
  const totalProjects = dataProjects.length;
  const projectDetail = {
    name: idproject ? project.title : 'Protect our forests in the fight against climate change',
    credits_avail: idproject ? project.credits_avail.quatinty : numberWithCommas(totalCreditsAvail),
    projects_quantity: totalProjects,
    total_land: idproject ? project.total_land.area : numberWithCommas(totalLandArea),
    total_biomass: idproject ? project.totalBiomass : numberWithCommas(totalBiomass),
    main_picture: idproject ? project.main_picture : '/static/assets/images/banner-landingprojects.jpg',
    text_intro: idproject ? 'Be part of our project' : 'Take part in our challenge',
  };
  return (
    <Layout title="Landing Projects" bodyclass="headerfull" user={user}>
      <div
        className={`landing-projects ${idproject && 'single'}`}
        style={{
          backgroundImage: `url(${projectDetail.main_picture})`,
        }}
      >
        <div className="content-main flex">
          <div className="lp-intro-main">
            <div className="lp-intro">
              <h4 className="lp-subtitle">{projectDetail.text_intro}</h4>
              <h3 className="lp-title">{projectDetail.name}</h3>
              <div className="lp-intro-down">
                <div className="banner-btn">
                  <Link href={urlLogin}>
                    <button className="btn">
                      <span>Log In</span>
                    </button>
                  </Link>
                  <p className="banner-text-link">
                    <Link href="/requestaccess">
                      <a className="banner-link">Or request beta access</a>
                    </Link>
                  </p>
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
      </div>
      <style jsx>
        {`
          .landing-projects {
            color: #fff;
            background-size: cover;
            position: relative;

            .content-main {
              justify-content: space-between;
              height: calc(100vh - 70px);
              align-items: center;
              position: relative;
              z-index: 10;
              width: 94%;
            }
            &.single {
              &:after,
              &:before {
                content: '';
                position: absolute;
                left: 0;
                width: 100%;
              }
              &:after {
                opacity: 0.63;
                background-image: linear-gradient(to bottom, rgba(25, 36, 79, 0.91), rgba(11, 16, 36, 0));
                z-index: 2;
                height: 80vh;
              }
              &:before {
                height: 100%;
                z-index: 1;
                opacity: 0.58;
                background-color: #19244f;
              }
            }
            @media screen and (max-width: 640px) {
              .content-main {
                height: auto;
                min-height: calc(100vh - 70px);
                box-sizing: border-box;
                padding: 30px 0;
                position: relative;
                padding-bottom: 120px;
              }
              .lp-intro-down {
                position: absolute;
                bottom: 0;
                text-align: center;
                width: 100%;
              }
              .lp-btn {
                margin-bottom: 10px;
                .btn {
                  margin: auto;
                  width: 100%;
                }
              }
              .lp-subtitle {
                font-size: 14px;
              }
            }
          }
          .lp-subtitle {
            font-size: 16px;
            margin: 0;
            margin-bottom: 20px;
          }
          .lp-btn {
            margin-bottom: 40px;
          }
          .lp-title {
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
          }
          .lp-intro-main,
          .lp-description {
            width: 43%;
            @media screen and (max-width: 640px) {
              width: 100%;
            }
          }
          .lp-description-item {
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
          }
        `}
      </style>
    </Layout>
  );
}

LandingProjects.propTypes = {
  user: PropTypes.object,
  router: PropTypes.object,
};

export default withRouter(LandingProjects);
