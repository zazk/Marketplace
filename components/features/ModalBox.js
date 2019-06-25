import React, { useState, useEffect } from 'react';

function ModalBox({ children, showmodal }) {
  let isOpen = showmodal;
  // const [isOpenLightbox, setCloseLightbox] = useState(showmodal);

  const handleClickClose = () => {
    isOpen = false;
    console.log('isopen', isOpen);
  };
  console.log('abriendo modal', showmodal);
  // console.log('isOpenLightbox', isOpenLightbox);

  return (
    <div className="wrap-modalbox">
      <div className={`modalbox ${isOpen === true && 'active'}`}>
        <div className="modalbox-overlay" onClick={() => handleClickClose()} />
        <div className="modalbox-close" onClick={() => handleClickClose()}>
          X
        </div>
        <div className="modalbox-content">{children}</div>
      </div>
      <style jsx>
        {`
          .modalbox {
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 100;
            display: flex;
            align-items: center;
            justify-content: center;
            visibility: hidden;
            opacity: 0;
            height: 0;
            overflow: hidden;
            transition: opacity 0.3s;
            &.active {
              height: 100vh;
              opacity: 1;
              visibility: visible;
            }
          }
          .modalbox-close {
            width: 40px;
            height: 40px;
            background-color: #fff;
            color: #000;
            position: absolute;
            top: 10px;
            right: 10px;
            z-index: 3;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
          }
          .modalbox-overlay {
            background-color: rgba(0, 0, 0, 0.5);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
          }
          .modalbox-content {
            position: relative;
            z-index: 2;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
}
export default ModalBox;
