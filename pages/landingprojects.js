import React from 'react';
import Layout from '../components/layout';
import Link from 'next/link';
import PropTypes from 'prop-types';

function LandingProjects({ user }) {
  return (
    <Layout title="Landing Projects" bodyclass="headerfull" user={user}>
      <div
        className="landing-projects"
        style={{
          backgroundImage: `url('/static/assets/images/banner-landingprojects.jpg')`,
        }}
      >
        <div className="content-main flex">
          <div className="lp-intro-main">
            <div className="lp-intro">
              <h4 className="lp-subtitle">Take part in our challenge</h4>
              <h3 className="lp-title">Protect our forests in the fight against climate change</h3>

              <div className="lp-intro-down">
                <div className="lp-btn">
                  <Link href="/login">
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
              <span>100,000</span>
              <p>Carbon credits available</p>
            </div>
            <div className="lp-description-item">
              <span>14</span>
              <p>Projects</p>
            </div>
            <div className="lp-description-item">
              <span>75,020</span>
              <p>Hectares</p>
            </div>
            <div className="lp-description-item">
              <span>750,654.21</span>
              <p>Total biomss</p>
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
};
export default LandingProjects;
