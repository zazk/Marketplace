import React from 'react';
import Layout from '../components/layout';
import FilterList from '../components/projectlist/FilterList';
import dataProjects from '../projects-data/projects';
import PropTypes from 'prop-types';

function ProjectList({ user }) {
  return (
    <Layout title="Project List" bodyclass="headerfull" user={user}>
      <div className="project-list">
        <div className="content-main project-list-main feature-two">
          {dataProjects.map((project, i) => (
            <a href={'/pdp?id=' + i} key={i} className="project-item">
              <div
                className="project-picture"
                style={{
                  backgroundImage: `url(${project.pdp.main_picture})`,
                }}
              />
              <div className="project-detail flex">
                <div className="project-resumen">
                  <h3 className="project-name">{project.pdp.title}</h3>
                  <div className="project-ubication">
                    <p className="project-ubication-address">{project.pdp.location.name}</p>
                  </div>
                  <div className="project-progress">
                    <div className="progressbar">
                      <div className="progressbar-item" style={{ width: `80%` }} />
                    </div>
                    <div className="progres-numbers">
                      <p>
                        <strong>{project.pdp.credits_avail.quatinty}</strong>
                        Carbon Credits Available
                      </p>
                    </div>
                  </div>
                </div>
                <div className="project-description">
                  <div className="description-item">
                    <img src="/static/iconos/icon-sumary-1.svg" width="24" alt="" />
                    <div className="description-text">
                      <span>{project.pdp.total_land.area + ' ' + project.pdp.total_land.unit} </span>
                      <p>Total Area</p>
                    </div>
                  </div>
                  <div className="description-item">
                    <img src="/static/iconos/icon-sumary-5.svg" width="24" alt="" />
                    <div className="description-text">
                      <span>{project.pdp.project_type}</span>
                      <p>Project Type</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <style jsx>
          {`
            .project-list {
              padding: 25px 0;
              .content-main {
                width: 94%;
              }
            }
            .progressbar {
              margin: 8px 0;
              height: 4px;
              background-color: #e2e5ee;
              border-radius: 3px;
              max-width: 140px;
            }
            .progressbar-item {
              border-radius: 3px;
              width: 30%;
              background-image: linear-gradient(to left, #17b363, #33da9c);
              height: 100%;
              position: relative;
            }
            .progres-numbers {
              p {
                margin: 0;
                color: rgba(0, 0, 0, 0.5);
                font-size: 12px;
                text-transform: uppercase;
                strong {
                  font-size: 14px;
                  font-family: 'Work Sans', sans-serif;
                  font-weight: 500;
                  color: #363636;
                  margin-right: 5px;
                }
              }
            }
            .project-list-main {
              display: flex;
              flex-flow: row wrap;
            }
            .project-detail {
              flex-flow: row wrap;
            }
            .feature-two,
            .feature-three {
              justify-content: space-between;
              .project-item {
                width: 49%;
                padding-top: 0;
                box-sizing: border-box;
                padding-left: 0;
                position: relative;
              }
              .project-detail {
                padding: 24px;
                padding-bottom: 0;
                flex-direction: column;
              }
              .project-picture {
                position: relative;
                height: 170px;
                width: 100%;
                &:after {
                  z-index: 1;
                }
                &:before {
                  z-index: 2;
                  opacity: 0.63;
                  position: absolute;
                  background-image: linear-gradient(to right, rgba(25, 36, 79, 0.91), rgba(11, 16, 36, 0));
                }
              }
              .project-resumen {
                padding: 0;
                width: 100%;
              }
              .progres-numbers {
                strong {
                  font-size: 16px;
                }
                @media screen and (max-width: 960px) {
                  p {
                    font-size: 11px;
                  }
                  strong {
                    font-size: 14px;
                  }
                }
              }
              .project-ubication-address {
                position: absolute;
                z-index: 3;
                top: 0;
                left: 0;
                width: 100%;
                padding: 10px;
                padding-left: 28px;
                box-sizing: border-box;
                color: #fff;
                &:before {
                  top: 10px;
                  left: 10px;
                  background-image: url('/static/iconos/ico-feature-w-3.svg');
                }
                @media screen and (max-width: 960px) {
                  font-size: 14px;
                }
              }
              .project-description {
                display: flex;
                flex-flow: row wrap;
                width: 100%;
                margin-top: 25px;
              }
              .project-ubication {
                margin-bottom: 0;
              }
              .description-item {
                width: 33.33%;
                padding-right: 10px;
                padding-left: 20px;
                box-sizing: border-box;
                margin-bottom: 0;
                &:first-child {
                  padding-left: 0;
                }
                p {
                  text-transform: inherit;
                }
                img {
                  position: relative;
                  margin-bottom: 10px;
                }
              }
            }
            .feature-three {
              .project-item {
                width: 32%;
              }
              .description-item {
                width: 50%;
              }
              @media screen and (max-width: 745px) {
                .project-detail {
                  flex-direction: row;
                }
                .project-item {
                  width: 100%;
                }
                .project-picture {
                  height: 90px;
                }
                .project-resumen,
                .project-description {
                  width: 50%;
                  margin: 0;
                }
              }
              @media screen and (max-width: 480px) {
                .project-resumen,
                .project-description {
                  width: 100%;
                }
                .project-description {
                  margin-top: 10px;
                }
                .project-description .description-item {
                  padding-left: 0 !important;
                  width: 50% !important;
                  img {
                    position: static !important;
                  }
                }
              }
            }
            .feature-two,
            .feature-three {
              @media screen and (max-width: 960px) {
                .description-item {
                  width: 100%;
                  padding-left: 35px !important;
                  margin-bottom: 5px;
                  img {
                    position: absolute;
                    top: 5px;
                    left: 0;
                  }
                }
                .project-detail {
                  padding: 15px;
                  padding-bottom: 0;
                }
              }
            }
            .feature-two {
              @media screen and (max-width: 480px) {
                .project-item {
                  width: 100%;
                }
              }
            }
            .list-default {
              @media screen and (max-width: 600px) {
                .project-item {
                  padding: 15px;
                  padding-left: 0px;
                }
                .project-resumen,
                .project-description {
                  width: 100%;
                }
                .project-resumen {
                  padding-left: 120px;
                }
                .project-picture {
                  width: 100px;
                  height: 100px;
                  border-radius: 5px;
                  top: 10px;
                  left: 10px;
                  overflow: hidden;
                }
                .project-description {
                  padding-left: 10px;
                  padding-right: 10px;
                  box-sizing: border-box;
                  display: flex;
                  flex-flow: row wrap;
                  margin-top: 15px;
                }
                .description-item {
                  width: 50%;
                  box-sizing: border-box;
                  margin: 0px;
                  padding-right: 10px;
                }
              }
              @media screen and (max-width: 480px) {
                .project-resumen {
                  padding-left: 0px;
                }
                .project-info-project {
                  padding-left: 120px;
                }
                .project-picture {
                  height: 60px;
                }
                .project-progress {
                  padding: 2px 10px;
                }
                .project-name {
                  font-size: 14px;
                }
                .project-ubication {
                  font-size: 12px;
                }
                .description-item {
                  padding-left: 30px;
                }
                .description-text {
                  p {
                    font-size: 10px;
                  }
                }
              }
            }
            .project-item {
              width: 100%;
              overflow: hidden;
              position: relative;
              padding: 24px 0;
              padding-left: 160px;
              border-radius: 10px;
              border: solid 1px #eeeeee;
              background-color: #ffffff;
              display: block;
              margin-bottom: 16px;

              &:hover {
                box-shadow: 0 10px 34px 0 rgba(7, 93, 108, 0.21);
              }
            }
            .project-picture {
              position: absolute;
              top: 0;
              left: 0;
              width: 160px;
              height: 100%;
              background-position: center center;
              background-size: cover;
              &:after,
              &:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
              }
              &:before {
                opacity: ;
              }
              &:after {
                background-color: #0a5d6c;
                opacity: 0.3;
              }
            }
            .project-resumen {
              width: 61%;
              padding-left: 24px;
              padding-right: 10px;
              box-sizing: border-box;
            }
            .project-description {
              width: 39%;
              box-sizing: border-box;
            }
            .project-ubication-address {
              position: relative;
              padding-left: 18px;
              &:before {
                content: '';
                position: absolute;
                top: 3px;
                left: 0;
                width: 13px;
                height: 17px;
                background-image: url('/static/iconos/ico-feature-3.svg');
                display: inline-block;
              }
            }
            .project-name {
              font-family: 'Work Sans', sans-serif;
              font-weight: 500;
              font-size: 20px;
              margin: 0;
              margin-bottom: 5px;
              line-height: 1;
              @media screen and (max-width: 960px) {
                font-size: 16px;
              }
            }
            .project-ubication {
              margin-bottom: 20px;
              p {
                margin: 0;
                letter-spacing: 0.13;
                color: rgba(3, 9, 34, 0.5);
              }
              img {
                margin-right: 5px;
                opacity: 0.5;
              }
            }
            .description-item {
              position: relative;
              padding-left: 40px;
              margin-bottom: 20px;
              &:last-child {
                margin-bottom: 0;
              }
              img {
                position: absolute;
                top: 5px;
                left: 0;
              }
              span {
                font-family: 'Work Sans', sans-serif;
                font-weight: 500;
                font-size: 14px;
              }
              p {
                margin: 0;
                font-size: 12px;
                color: rgba(0, 0, 0, 0.5);
                letter-spacing: 0.5px;
                text-transform: uppercase;
              }
            }
          `}
        </style>
      </div>
    </Layout>
  );
}

ProjectList.propTypes = {
  user: PropTypes.object,
};

export default ProjectList;
