import React from 'react';

function InfoResumen() {
  return (
    <div className="wrap-info-resumen">
      <div className="project-ubication">
        <p>Forest / North America</p>
        <h3 className="title-ubication">Boulder Creek National Reserve</h3>
      </div>

      <div className="wrap-info-item">
        <div className="project-info-item">
          <span>11,578 tn</span>
          <p>Emissions compesated</p>
        </div>
        <div className="project-info-item">
          <span>$23,568.54</span>
          <p>Total investment</p>
        </div>
        <div className="project-info-item">
          <span>$7.56</span>
          <p>Average price per credit</p>
        </div>
      </div>
      <style jsx>
        {`
          .project-ubication {
            p {
              font-size: 14px;
              color: rgba(0, 0, 0, 0.5);
              margin: 0;
              margin-bottom: 10px;
            }
          }
          .title-ubication {
            font-size: 28px;
            color: #363636;
            margin: 0;
            margin-bottom: 25px;
            font-weight: 700;
          }
          .wrap-info-item {
            border-bottom: 1px solid #979797;
            margin-bottom: 25px;
          }
          .project-info-item {
            margin-bottom: 25px;
            span {
              font-size: 22px;
            }
            p {
              font-size: 14px;
              color: rgba(0, 0, 0, 0.5);
              margin: 0;
            }
          }
        `}
      </style>
    </div>
  );
}
export default InfoResumen;
