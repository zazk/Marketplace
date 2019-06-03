import React from 'react';

function ItemCard() {
  return (
    <div className="item-card">
      <span />
      <div className="item-card-descripcion">
        <h5>Permanence</h5>
        <p>California, USA</p>
      </div>
      <style jsx>
        {`
          .item-card {
            width: 23%;
            margin-left: 2.6%;
            background-color: #cccccc;
            display: flex;
            min-height: 84px;
            align-items: center;
            padding: 0 14px;
            box-sizing: border-box;
            padding-left: 50px;
            position: relative;
            span {
              position: absolute;
              top: 28px;
              left: 10px;
              width: 28px;
              height: 28px;
              display: block;
              margin-right: 10px;
              border-radius: 100%;
              border: solid 1px #979797;
              background-color: #d8d8d8;
            }
            &:first-child {
              margin-left: 0;
            }
            @media screen and (max-width: 960px) {
              margin-left: 0.5%;
              width: 24.6%;
            }
            @media screen and (max-width: 768px) {
              width: 49.7%;
              margin-bottom: 0.5%;
              &:nth-child(2n + 1) {
                margin-left: 0;
              }
              &:first-child {
                margin-left: 0;
              }
            }
            @media screen and (max-width: 480px) {
              width: 100%;
              margin-left: 0;
            }
          }
          .item-card-descripcion {
            flex: 1;
            h5 {
              font-size: 22px;
              margin: 0;
              font-weight: normal;
            }
            p {
              font-size: 14px;
              margin: 0;
            }
            @media screen and (max-width: 960px) {
              h5 {
                font-size: 20px;
              }
            }
          }
        `}
      </style>
    </div>
  );
}
export default ItemCard;
