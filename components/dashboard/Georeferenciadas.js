import React from 'react';

function Georeferenciadas() {
  return (
    <div className="detail-wrap-modulos">
      <h3 className="aside-title modulos">Modulo de fotitos georeferenciadas</h3>
      <div className="spaces">
        <div className="detail-modulos flex">
          <div className="modulo-item" />
          <div className="modulo-item" />
          <div className="modulo-item" />
          <div className="modulo-item" />
          <div className="modulo-item" />
          <div className="modulo-item" />
        </div>
      </div>
      <style jsx>
        {`
          .modulo-item {
            width: 25%;
            margin-left: 5%;
            margin-bottom: 5%;
            height: 104px;
            box-sizing: border-box;
            background-color: #d8d8d8;
            border: 1px solid #979797;
            &:nth-child(3n + 1) {
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
export default Georeferenciadas;
