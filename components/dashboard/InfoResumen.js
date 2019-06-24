import React from 'react';
function InfoResumen() {
  return (
    <div className="wrap-info-resumen">
      <div className="project-ubication">
        <p>Forest / North America</p>
        <h3 className="title-ubication">Middlebury College Improved Forest Management Project</h3>
      </div>

      <div className="wrap-info-item flex">
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
            padding-bottom: 15px;
            margin-bottom: 20px;
            border-bottom: 1px solid #d8d8d8;
            p {
              font-size: 12px;
              font-family: 'Work Sans', sans-serif;
              font-weight: 700;
              color: rgba(54, 54, 54, 0.8);
              margin: 0;
              margin-bottom: 10px;
              text-transform: uppercase;
            }
          }
          .title-ubication {
            font-size: 22px;
            color: #363636;
            margin: 0;
            font-family: 'Work Sans', sans-serif;
            line-height: 33px;
            font-weight: 600;
          }
          .wrap-info-item {
            border-bottom: 1px solid #d8d8d8;
          }
          .project-info-item {
            width: 50%;
            margin-bottom: 25px;
            padding-left: 10px;
            box-sizing: border-box;
            font-family: 'Work Sans', sans-serif;
            span {
              font-size: 32px;
              font-weight: 400;
            }
            p {
              font-size: 12px;
              color: rgba(0, 0, 0, 0.5);
              margin: 0;
              text-transform: uppercase;
            }
          }
        `}
      </style>
    </div>
  );
}
export default InfoResumen;
