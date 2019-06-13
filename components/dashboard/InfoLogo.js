import React from 'react';

function InfoLogo() {
  return (
    <div className="wrap-info-logo">
      <figure className="project-logo">
        <img src="/static/assets/images/image-1.png" alt="" />
      </figure>
      <a className="link-imagen" href="">
        <img src="/static/iconos/info-circle-solid.svg" width="14" alt="" />
        <p>VIEW PROJECT DETAILS</p>
      </a>
      <style jsx>
        {`
          .project-logo {
            margin-bottom: 20px;
          }
        `}
      </style>
    </div>
  );
}
export default InfoLogo;
