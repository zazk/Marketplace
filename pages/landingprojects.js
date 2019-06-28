import React from 'react';
import Layout from '../components/layout';
import Link from 'next/link';
function LandingProjects({ user }) {
  return (
    <Layout title="Formulary" bodyclass="landingpage" user={user}>
      <div
        className="landing-projects"
        style={{
          backgroundImage: `url(https://storage.googleapis.com/marketplace-assets/middlebury-main_picture.jpg)`,
        }}
      >
        <div className="content-main flex">
          <div className="lp-intro-main">
            <div className="lp-intro">
              <h4 className="lp-subtitle">Take part in our challenge</h4>
              <h3 className="lp-title">Protect our forests in the fight against climate change</h3>
              <div className="lp-btn">
                <Link href="/login">
                  <button className="btn">
                    <span>View projects</span>
                  </button>
                </Link>
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
            &:before,
            &:after {
              content: '';
              height: 100%;
              width: 100%;
              display: block;
              position: absolute;
              top: 0;
              left: 0;
            }
            &:after {
              background-color: #098e4a;
              opacity: 0.53;
              z-index: 1;
            }
            &:before {
              opacity: 0.63;
              background-image: linear-gradient(to right, rgba(25, 36, 79, 0.91), rgba(11, 16, 36, 0));
              z-index: 2;
            }
            .content-main {
              justify-content: space-between;
              height: calc(100vh - 70px);
              align-items: center;
              position: relative;
              z-index: 10;
            }
          }
          .lp-subtitle {
            font-size: 16px;
            margin: 0;
            margin-bottom: 20px;
          }
          .lp-title {
            font-size: 45px;
            margin: 0;
            margin-bottom: 30px;
            font-family: 'Work Sans', sans-serif;
            font-weight: 700;
          }
          .lp-intro-main,
          .lp-description {
            width: 43%;
          }
          .lp-description-item {
            width: 50%;
            margin-bottom: 40px;
            padding-right: 10px;
            box-sizing: border-box;
            span {
              font-size: 35px;
              font-family: 'Work Sans', sans-serif;
              font-weight: 600;
            }
            p {
              margin: 0;
              font-size: 16px;
            }
          }
        `}
      </style>
    </Layout>
  );
}
export default LandingProjects;
