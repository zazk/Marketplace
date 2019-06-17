import React from 'react';
function InfoLogo() {
  return (
    <div className="wrap-info-logo">
      <figure className="project-logo">
        <img src="/static/assets/images/image-1.png" alt="" />
      </figure>
      <button className="view-project">View project details</button>
      <style jsx>
        {`
          .project-logo {
            margin-bottom: 20px;
          }
          .view-project {
            font-size: 16px;
            line-height: 24px;
            color: #41828e;
            font-weight: 700;
            width: 100%;
            height: 50px;
            border-radius: 20px;
            box-shadow: 0 5px 20px 0 rgba(7, 93, 108, 0.16);
            background-color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            &:hover {
              background-color: rgba(65, 130, 142, 0.1);
            }
          }
        `}
      </style>
    </div>
  );
}
export default InfoLogo;
