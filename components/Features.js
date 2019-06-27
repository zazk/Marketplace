import React from 'react';
import ItemListBanner from './ItemListBanner';
import Link from 'next/link';
import Intro from './Intro';
import FormRequesQuote from '../components/forms/FormRequestQuote';

function Features({ data, user }) {
  const project = data;
  const location_data = project.location.name;
  const location = location_data.split(',');

  const list = [
    {
      title: `${project.credits_avail.quatinty} carbon ${project.credits_avail.unit} available`,
      description: `This project generates ${project.credits_issued.quatinty} ${project.credits_issued.unit} per year`,
    },
    {
      title: `${project.project_type}`,
      description: '',
    },
    {
      title: `${location[0] + ', ' + location[1] + ', ' + location[2]}`,
      description: '',
    },
  ];
  const DataFeatureList = () => list.map((item, i) => <ItemListBanner key={i} title={item.title} />);

  return (
    <div>
      <div className="banner content">
        <div className="bg-banner" style={{ backgroundImage: `url(${project.main_picture})` }} />
        <div className="content banner-main">
          <div className="banner-intro">
            <Intro data={project} />
          </div>
          <div className="feature-description">
            <div className="progressbar">
              <div className="progressbar-item">
                <span>
                  80<em>%</em>
                </span>
              </div>
            </div>
            <div className="feature-list">
              <DataFeatureList />
            </div>
            <div className="feature-controls">
              <FormRequesQuote />
              {/* <Link href="/requestquote">
                <button className="btn">
                  <span>Request quote</span>
                </button>
              </Link> */}
              <figure className="feature-logo">
                <img src={project.standard} width="96" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .banner {
            margin: auto;
            position: relative;
            .bg-banner {
              background-size: cover;
              background-repeat: no-repeat;
              position: absolute;
              z-index: 1;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
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
                background-color: #0a5d6c;
                opacity: 0.53;
                z-index: 1;
              }
              &:before {
                content: '';
                height: 100%;
                width: 100%;
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                opacity: 0.63;
                background-image: linear-gradient(to right, rgba(25, 36, 79, 0.91), rgba(11, 16, 36, 0));
                z-index: 2;
              }
              @media screen and (max-width: 745px) {
                height: 470px;
                border-radius: 0px;
                &:before,
                &:after {
                  border-radius: 0px;
                }
              }
            }
            .banner-main {
              max-width: 1024px;
              position: relative;
              z-index: 3;
            }
            .banner-main {
              height: 440px;
              display: flex;
              flex-flow: row wrap;
              align-items: center;
              justify-content: space-between;
              &.content {
                padding: 0px;
              }
              @media screen and (max-width: 745px) {
                height: auto;
              }
            }
            .banner-intro {
              width: 47.7%;
              @media screen and (max-width: 745px) {
                width: 100%;
              }
            }
          }

          .feature-logo {
            img {
              height: 43px;
              width: auto;
            }
          }
          .feature-description {
            max-width: 414px;
            width: 100%;
            padding: 20px;
            padding-bottom: 26px;
            padding-top: 58px;
            box-sizing: border-box;
            border-radius: 10px;
            box-shadow: 0 3px 10px 2px rgba(3, 9, 34, 0.07), 0 0 4px 0 rgba(3, 9, 34, 0.05);
            background-color: #ffffff;
            @media screen and (max-width: 960px) {
              width: 48%;
              max-width: none;
            }
            @media screen and (max-width: 745px) {
              width: 100%;
              margin-left: 0;
              margin-top: 70px;
              transform: translateY(0px);
            }
          }
          .progressbar {
            height: 6px;
            background-color: #e2e5ee;
            border-radius: 3px;
          }
          .progressbar-item {
            border-radius: 3px;
            width: 80%;
            background-image: linear-gradient(to left, #17b363, #33da9c);
            height: 100%;
            position: relative;
            span {
              width: 35px;
              height: 32px;
              background-color: #17b363;
              position: absolute;
              right: 0;
              bottom: 0;
              display: block;
              font-size: 12px;
              font-family: 'Work Sans', sans-serif;
              font-weight: 700;
              color: #fff;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 8px;
              em {
                font-size: 10px;
                font-weight: 700;
              }
            }
          }
          .feature-list {
            margin-top: 15px;
            margin-bottom: 24px;
          }

          .feature-controls {
            align-items: center;
            display: flex;
            figure {
              margin-left: 28px;
            }
            @media screen and (max-width: 640px) {
              justify-content: center;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Features;
