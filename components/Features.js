import React from 'react';
import ItemList from './ItemList';
function Features({ data }) {
  const project = data;
  const location_data = project.location;
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
      title: `${location[0]}`,
      description: `${location[1] + location[2]}`,
    },
  ];
  const DataFeatureList = () =>
    list.map((item, i) => <ItemList key={i} title={item.title} description={item.description} />);

  return (
    <div className="content">
      <div className="feature flex">
        <div className="feature-image">
          <figure>
            <img src={project.main_picture} width="558" height="270" alt="" />
            <figcaption>This project is based in San Francisco, California, USA</figcaption>
          </figure>
        </div>
        <div className="feature-description">
          <div className="progressbar flex">
            <div className="progressbar-item" />
          </div>
          <div className="feature-list">
            <DataFeatureList />
          </div>
          <div className="feature-controls">
            <button className="btn">Request quote</button>
            <figure>
              <img src={project.standard} width="158" height="44" alt="" />
            </figure>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .feature-image {
            width: 54%;
            figcaption {
              color: rgba(54, 54, 54, 0.6);
              font-size: 12px;
              margin-top: 10px;
              @media screen and (max-width: 480px) {
                display: none;
              }
            }
            @media screen and (max-width: 768px) {
              width: 45%;
            }
            @media screen and (max-width: 640px) {
              width: 100%;
              img {
                width: 100%;
              }
            }
          }
          .feature-description {
            width: 37%;
            margin-left: 3.3%;
            @media screen and (max-width: 768px) {
              width: 50%;
            }
            @media screen and (max-width: 640px) {
              width: 100%;
              margin-left: 0;
              margin-top: 30px;
            }
          }
          .progressbar {
            height: 4px;
            background-color: #d8d8d8;
          }
          .progressbar-item {
            width: 24%;
            background-color: #525252;
          }
          .feature-list {
            margin-top: 15px;
            margin-bottom: 30px;
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
