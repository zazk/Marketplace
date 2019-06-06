import React from 'react';
import ItemText from './ItemText';
import SideBar from './SideBar';

function Leakage({ data }) {
  const project = data.summary;

  return (
    <div className="leakage">
      <div className="content flex">
        <div className="leakage-description">
          <span className="leakage-bg" />
          <ItemText type="two" title="Leakage" description={project.leakage} />
          <ItemText type="two" title="Additionality" description={project.additionality} />
          <ItemText type="two" title="Permanence" description={project.permanence} />
          <ItemText type="two" title="Verifiability" description={project.verifiability} />
        </div>
        <SideBar data={data} />
      </div>
      <style jsx>
        {`
          .leakage {
            .content {
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
              display: block;
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
            width: 64%;
            background-color: #e2e5ee;
            padding-right: 30px;
            box-sizing: border-box;
            position: relative;
            &:before {
              content: '';
              position: absolute;
              width: 100vw;
              height: 110px;
              right: 0;
              bottom: 100%;
              z-index: -1;
              background-color: #e2e5ee;
            }
            &:after {
              content: '';
              position: absolute;
              top: 0;
              right: 100%;
              width: 100vw;
              height: 100%;
              background-color: #e2e5ee;
            }
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
