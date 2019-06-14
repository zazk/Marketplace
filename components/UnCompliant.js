import React from 'react';
function UnCompliant({ data }) {
  const project = data;
  const list = project.un_goals;
  return (
    <div>
      <h3 className="sidebar-title">UN compliant</h3>
      <div className="sidebar-cuadros flex">
        {list.map((item, i) => (
          <a key={i} href="" className="cuadros-item">
            <img src={item} width="84" height="85" alt="" />
          </a>
        ))}
      </div>

      <style jsx>
        {`
          .cuadros-item {
            width: 23.5%;
            height: 84px;
            margin-left: 1.9%;
            margin-bottom: 1.9%;
            @media screen and (max-width: 480px) {
              width: 28.5%;
            }
            img {
              max-width: 100%;
              height: auto;
            }
            &:hover {
              opacity: 0.5;
            }
            &:nth-child(4n + 1) {
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
