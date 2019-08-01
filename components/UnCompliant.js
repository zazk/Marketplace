import React from 'react';
function UnCompliant({ data }) {
  const project = data;
  const list = project.un_goals;
  return (
    <div>
      <h3 className="sidebar-title">UN Sustainable Development Goals</h3>
      <div className="sidebar-cuadros flex">
        {list.map((item, i) => (
          <a key={i} href={'https://sustainabledevelopment.un.org/sdg' + item} className="cuadros-item">
            <img
              src={'https://storage.googleapis.com/marketplace-assets/un_goals-' + item + '.png'}
              width="84"
              height="85"
              alt=""
            />
          </a>
        ))}
      </div>

      <style jsx>
        {`
          .cuadros-item {
            width: 32%;
            margin-left: 1.9%;
            margin-bottom: 1.9%;
            @media screen and (max-width: 480px) {
              width: 28.5%;
            }
            img {
              width: 100%;
              height: auto;
              display: block;
            }
            &:hover {
              opacity: 0.5;
            }
            &:nth-child(3n + 1) {
              margin-left: 0;
            }
            &:first-child {
              margin-left: 0;
            }
            &.c-1 {
              background-color: #717171;
            }
            &.c-2 {
              background-color: #d8d8d8;
            }
            &.c-3 {
              background-color: #c0c0c0;
            }
          }
        `}
      </style>
    </div>
  );
}
export default UnCompliant;
