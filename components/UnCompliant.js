import React from 'react';

function UnCompliant() {
  return (
    <div>
      <h3 className="sidebar-title">UN compliant</h3>
      <div className="sidebar-cuadros flex">
        <a href="" className="cuadros-item c-1" />
        <a href="" className="cuadros-item c-2" />
        <a href="" className="cuadros-item c-3" />
        <a href="" className="cuadros-item c-2" />
        <a href="" className="cuadros-item c-2" />
        <a href="" className="cuadros-item c-3" />
        <a href="" className="cuadros-item c-2" />
        <a href="" className="cuadros-item c-1" />
      </div>

      <style jsx>
        {`
          .cuadros-item {
            width: 23.5%;
            height: 84px;
            margin-left: 1.9%;
            margin-bottom: 1.9%;
            box-sizing: border-box;
            border: 1px solid #717171;
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
