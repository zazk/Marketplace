import React from 'react';
import Layout from '../components/layout';
import Link from 'next/link';

function Unauthorized() {
  return (
    <Layout title="Unauthorized" bodyclass="headerfull">
      <div
        className="unauthorized"
        style={{
          backgroundImage: `url('../static/assets/images/banner-landingprojects.jpg')`,
        }}
      >
        <div className="content-main flex">
          <div className="lp-intro-main">
            <div className="lp-intro">
              <h3 className="lp-title">Your registration must be approved</h3>

              <div className="lp-intro-down">
                <div className="lp-btn">
                  <Link href="/">
                    <button className="btn">
                      <span>Go Home</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lp-description flex">
            <img src="../static/iconos/user.svg" width="150" alt="" />
            <span> Registration</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .unauthorized {
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

              .lp-btn {
                margin-bottom: 10px;
                .btn {
                  margin: auto;
                  width: 100%;
                }
              }
            }
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
          .lp-description {
            font-size: 40px;
            order: -1;
            font-family: 'Work Sans', sans-serif;
            font-weight: 600;
            span {
              display: block;
              width: 100%;
              margin-left: 10px;
              padding-bottom: 10px;
              position: relative;
              &:after {
                content: '';
                position: absolute;
                bottom: 0;
                height: 2px;
                width: 55%;
                left: 0;
                background-color: #fff;
              }
            }
          }
        `}
      </style>
    </Layout>
  );
}
export default Unauthorized;
