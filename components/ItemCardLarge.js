import React from 'react';

function ItemCardLarge() {
  return (
    <div className="item-text-feature">
      <span />
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
            background-color: #e4e4e4;
            padding: 5px 23px;
            box-sizing: border-box;
            align-items: center;
            p {
              flex: 1;
              font-size: 16px;
              color: #4a4a4a;
            }
            span {
              width: 38px;
              display: block;
              height: 38px;
              border: solid 1px #979797;
              background-color: #d8d8d8;
              border-radius: 100%;
              margin-right: 24px;
              align-self: center;
            }
            @media screen and (max-width: 480px) {
              padding-left: 15px;
              padding-right: 15px;
              span {
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
