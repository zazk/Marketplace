import React from 'react';
function ProjectPictures() {
  return (
    <div className="detail-wrap-modulos">
      <h3 className="aside-title modulos">Project Pictures</h3>
      <div className="spaces">
        <div className="detail-modulos flex">
          <div className="modulo-item">
            <img src="/static/assets/images/picture-1.png" alt="" />
          </div>
          <div className="modulo-item">
            <img src="/static/assets/images/picture-2.png" alt="" />
          </div>
          <div className="modulo-item">
            <img src="/static/assets/images/picture-3.png" alt="" />
          </div>
          <div className="modulo-item">
            <img src="/static/assets/images/picture-3.png" alt="" />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .modulo-item {
            width: 23.5%;
            margin-left: 2%;
            margin-bottom: 2%;
            box-sizing: border-box;
            background-color: #d8d8d8;
            border-radius: 10px;
            img {
              width: 100%;
              height: auto;
            }
            &:nth-child(4n + 1) {
              margin-left: 0;
            }
            &:first-child {
              margin-left: 0;
            }
          }
        `}
      </style>
    </div>
  );
}
export default ProjectPictures;
