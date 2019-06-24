import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import Gallery from './Gallery';

function FeatureProduct({ data }) {
  const project = data;
  const location_data = project.location.name;
  const location = location_data.split(',');

  const [fixNav, setfixNav] = useState(0);

  const myRef = React.createRef();
  const handleScroll = e => {
    let element = myRef.current;
    let scrollBar = window.scrollY;
    // const positionElement = element.offsetTop;

    // console.log('scrollxxx', positionElement);
    // console.log('scrolltop', scrollBar);

    if (scrollBar >= 788) {
      setfixNav(1);
    } else {
      setfixNav(0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="feature-product">
      <div className={`wrap-head-list ${fixNav === 1 && 'active'}`} ref={myRef}>
        <div className="head-tab flex content">
          <div className="head-tab-list">
            <a href="">Overview</a>
            <a href="">Kpis</a>
            <a href="">Overview</a>
          </div>
          <button className="btn small">Buy</button>
        </div>
      </div>

      <div className="tab-content content">
        <div className="content-main">
          <div className="tab-item flex active">
            <div className="tab-content-descripcion flex">
              <h3 className="tab-title">
                <img src="/static/iconos/icon-eye.svg" width="20" alt="" />
                Overview
              </h3>
              <div className="tab-descripcion">{project.project_overview}</div>
              <div className="tab-features flex">
                <div className="tab-feature-item">
                  <ItemList
                    icono="/static/iconos/icon-sumary-1.svg"
                    title={location[0]}
                    description={location[1] + ', ' + location[2]}
                  />
                </div>
                <div className="tab-feature-item">
                  <ItemList
                    icono="/static/iconos/icon-sumary-2.svg"
                    title={project.project_developer}
                    description="Project developer"
                  />
                </div>
                <div className="tab-feature-item">
                  <ItemList
                    icono="/static/iconos/icon-sumary-3.svg"
                    title={project.total_land.area + ' ' + project.total_land.unit}
                    description=""
                  />
                </div>
                <div className="tab-feature-item">
                  <ItemList
                    icono="/static/iconos/icon-sumary-4.svg"
                    title={project.auditor}
                    description="Project auditor"
                  />
                </div>
                <div className="tab-feature-item">
                  <ItemList
                    icono="/static/iconos/icon-sumary-5.svg"
                    title={project.verification.methodology}
                    description={project.verification.last_verification}
                  />
                </div>
                <div className="tab-feature-item">
                  <ItemList
                    icono="/static/iconos/icon-sumary-6.svg"
                    title={project.land_owner}
                    description="Land owner"
                  />
                </div>
              </div>
            </div>
            <div className="tab-content-images flex">
              <Gallery data={project.project_images} />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .wrap-head-list {
            display: none;
          }
          .wrap-head-list.active {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: #fff;
            z-index: 100;
            border-bottom: 1px solid rgba(151, 151, 151, 0.3);
            .head-tab {
              border: none;
            }
          }
          .tab-features {
            border-radius: 10px;
            box-shadow: 0 10px 34px 0 rgba(7, 93, 108, 0.14);
            background-color: #ffffff;
            padding: 25px 17px;
          }
          .feature-product {
            @media screen and (max-width: 640px) {
              .btn {
                width: 100px;
              }
            }
            @media screen and (max-width: 480px) {
              .btn {
                width: 60px;
              }
            }
          }
          .head-tab {
            height: 50px;
            align-items: center;
            justify-content: space-between;
            border-top: 1px solid rgba(151, 151, 151, 0.3);
            border-bottom: 1px solid rgba(151, 151, 151, 0.3);
          }
          .head-tab {
            a {
              font-size: 14px;
              padding-left: 30px;
              cursor: pointer;
              text-decoration: none;
              color: #363636;
              &:first-child {
                padding-left: 0;
              }
              &.active {
                font-weight: 600;
              }
              &:hover {
                text-decoration: underline;
              }
            }
            @media screen and (max-width: 480px) {
              a {
                font-size: 12px;
                padding-left: 20px;
              }
            }
          }
          .tab-content {
            position: relative;
            padding: 44px 20px;

            background-color: #fafafa;
          }
          .tab-content-descripcion {
            width: 57%;
            @media screen and (max-width: 768px) {
              width: 59%;
            }
            @media screen and (max-width: 640px) {
              width: 100%;
            }
          }
          .tab-content-images {
            padding-top: 35px;
            width: 40.5%;
            flex-direction: column;
            justify-content: center;
            @media screen and (max-width: 640px) {
              width: 100%;
              display: flex;
              flex-flow: row wrap;
              justify-content: space-between;
            }
          }
          .tab-item {
            justify-content: space-between;
            opacity: 0;
            visibility: hidden;
            position: absolute;
            top: 0;
            left: 0;
            transition: all 0.5s;
          }
          .tab-item.active {
            opacity: 1;
            visibility: visible;
            position: relative;
          }
          .tab-feature-item {
            &:last-child,
            :nth-last-child(2) {
              margin-bottom: 0;
            }
          }
          .tab-descripcion {
            font-size: 16px;
            line-height: 26px;
            margin-bottom: 25px;
            color: #030922;
          }

          .tab-title {
            font-size: 24px;
            color: #09c173;
            font-family: 'Work Sans', sans-serif;
            font-weight: 700;
            margin: 0;
            margin-bottom: 20px;
            text-transform: uppercase;
            img {
              margin-right: 12px;
            }
          }
        `}
      </style>
    </section>
  );
}
export default FeatureProduct;
