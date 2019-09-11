import React from 'react';
import ReactTooltip from 'react-tooltip';

function ItemCard({ title, status, tooltip, tooltipid }) {
  return (
    <div className={`item-card`}>
      <img
        className="item-card-image"
        src={`/static/iconos/checked${!status ? '-disabled' : ''}.svg`}
        width="28"
        alt=""
      />
      <div className="item-card-descripcion">
        <h5>{title}</h5>
        <p>{!status ? 'Not Checked' : 'Checked'}</p>
      </div>
      <a className="link-imagen" data-tip data-for={tooltipid} href="">
        <img src="/static/iconos/info-circle-solid.svg" width="14" alt="" />
        <p>What is {title}?</p>
      </a>
      <ReactTooltip
        id={tooltipid}
        aria-haspopup="true"
        multiline="true"
        place="top"
        type="info"
        effect="solid"
        className="item-card-tooltip"
        style={{ width: '23%' }}
      >
        <p>{tooltip}</p>
      </ReactTooltip>
      <style jsx>
        {`
          .item-card {
            width: 23%;
            margin-left: 2.6%;
            padding: 0 14px;
            box-sizing: border-box;
            padding-left: 50px;
            position: relative;
            border-left: 1px solid #e2e5ee;
            &.disabled {
              display: none;
            }
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
              border: none;
            }
            @media screen and (max-width: 960px) {
              margin-left: 0.5%;
              width: 24.6%;
              padding-left: 20px;
            }
            @media screen and (max-width: 768px) {
              width: 49.7%;
              margin-bottom: 30px;
              &:nth-child(2n + 1) {
                margin-left: 0;
              }
              &:first-child {
                margin-left: 0;
              }
              &:nth-last-child(2) {
                margin-bottom: 0;
              }
              &:last-child {
                margin-bottom: 0;
              }
            }
            @media screen and (max-width: 480px) {
              width: 100%;
              margin-left: 0;
              border-left: none;
              position: relative;
              padding-top: 20px;
              padding-bottom: 20px;
              margin-bottom: 0;
              &:last-child {
                &:after {
                  display: none;
                }
              }
              &:after {
                content: '';
                position: absolute;
                bottom: 0;
                height: 1px;
                width: 90%;
                background-color: #e2e5ee;
              }
              .item-card-image {
                position: absolute;
                top: 25px;
                left: 18px;
              }
            }
          }

          .item-card-descripcion {
            margin-bottom: 15px;
            h5 {
              font-size: 22px;
              margin: 0;
              font-weight: 500;
              color: #030922;
            }
            p {
              font-size: 14px;
              margin: 0;
              color: #969db6;
            }
            @media screen and (max-width: 960px) {
              h5 {
                font-size: 20px;
              }
            }
            @media screen and (max-width: 480px) {
              padding-left: 40px;
            }
          }
          .item-card-tooltip {
            width: 24%;
          }
        `}
      </style>
    </div>
  );
}
export default ItemCard;
