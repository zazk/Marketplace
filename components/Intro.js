import React from 'react';

function Intro({ data }) {
  const project = data;
  return (
    <div className="content">
      <div className="intro">
        <h3 className="intro-title">{project.title}</h3>
        <p className="intro-description">{project.tagline}</p>
      </div>
      <style jsx>
        {`
          .intro {
            max-width: 700px;
            margin: auto;
            text-align: left;
            padding: 60px 0;
            @media screen and (max-width: 768px) {
              padding: 30px 0;
            }
          }
          .intro-title {
            font-size: calc(25px + (38 - 25) * ((100vw - 320px) / (1920 - 320)));
            font-weight: normal;
            line-height: 40px;
            margin: 0px;
            margin-bottom: 15px;
            @media screen and (max-width: 640px) {
              line-height: 30px;
            }
          }
          .intro-description {
            font-size: 18px;
            color: #4a4a4a;
            margin: 0px;
            @media screen and (max-width: 640px) {
              font-size: 16px;
              line-height: 20px;
            }
          }
        `}
      </style>
    </div>
  );
}
export default Intro;
