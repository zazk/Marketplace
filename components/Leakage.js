import React from 'react';
import ItemText from './ItemText';
import SideBar from './SideBar';

function Leakage({ data }) {
  const project = data.summary;

  return (
    <div className="leakage">
      <div className="content">
        <div className="content-main flex">
          <div className="leakage-description">
            <span className="leakage-bg" />
            {project.leakage.display && (
              <ItemText
                type="two"
                title="Leakage"
                description={project.leakage.text}
                source={project.leakage.source}
                source_link={project.leakage.source_link}
                card={false}
                iconcard="/static/iconos/icon-card-large.svg"
              />
            )}
            {project.additionality.display && (
              <ItemText
                type="two"
                title="Additionality"
                description={project.additionality.text}
                source={project.additionality.source}
                source_link={project.additionality.source_link}
              />
            )}
            {project.permanence.display && (
              <ItemText
                type="two"
                title="Permanence"
                description={project.permanence.text}
                source={project.permanence.source}
                source_link={project.permanence.source_link}
              />
            )}
            {project.verifiability.display && (
              <ItemText
                type="two"
                title="Verifiability"
                description={project.verifiability.text}
                source={project.verifiability.source}
                source_link={project.verifiability.source_link}
              />
            )}
          </div>
          <SideBar data={data} />
        </div>
      </div>
      <style jsx>
        {`
          .leakage {
            padding-top: 122px;
            .content-main {
              justify-content: space-between;
            }
            .leakage-item {
              margin-bottom: 45px;
            }
            @media screen and (max-width: 768px) {
              padding-bottom: 30px;
            }
            @media screen and (max-width: 640px) {
              overflow: hidden;
            }
          }
          .leakage-bg {
            display: none;
            @media screen and (max-width: 640px) {
              display: none;
              padding-bottom: 30px;
              &:before {
                content: '';
                position: absolute;
                width: 100vw;
                height: 110px;
                left: 0;
                bottom: 100%;
                z-index: -1;
                background-color: #e2e5ee;
              }
              &:after {
                content: '';
                position: absolute;
                top: 0;
                left: 100%;
                width: 100vw;
                height: 100%;
                background-color: #e2e5ee;
              }
            }
          }
          .leakage-description {
            width: 63%;
            box-sizing: border-box;
            position: relative;

            @media screen and (max-width: 768px) {
              width: 58%;
            }
            @media screen and (max-width: 640px) {
              width: 100%;
              padding-right: 0px;
            }
          }
        `}
      </style>
    </div>
  );
}
export default Leakage;
