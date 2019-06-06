import React from 'react';

function ItemCardLarge({ icon }) {
  return (
    <div className="item-text-feature">
      <img src={icon} alt="" />
      <p>
        <strong>Positive leakage:</strong> dead wood will also capture CO2; plus avoiding the use of concrete will spare
        us from emissions.
      </p>
      <style jsx>
        {`
          .item-text-feature {
            min-height: 87px;
            margin-top: 32px;
            display: flex;
            border-radius: 8px;
            border: solid 1px #e2e5ee;
            padding: 5px 23px;
            box-sizing: border-box;
            align-items: center;
            p {
              flex: 1;
              font-size: 16px;
              color: #030922;
              margin: 0;
            }
            img {
              width: 32px;
              display: block;
              height: auto;
              margin-right: 24px;
              align-self: center;
            }
            @media screen and (max-width: 480px) {
              padding-left: 15px;
              padding-right: 15px;
              img {
                margin-right: 14px;
              }
            }
          }
        `}
      </style>
    </div>
  );
}
export default ItemCardLarge;
