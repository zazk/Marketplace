import React from 'react';
import PropTypes from 'prop-types';
function ModalBox({ children, isOpen, toggle }) {
  return (
    <div className="wrap-modalbox">
      <div className={`modalbox active ${isOpen === true && 'active'}`}>
        <div className="modalbox-overlay" onClick={toggle} />
        <div className="modalbox-content">
          <div className="modalbox-close" onClick={toggle}>
            <span>X</span>
          </div>

          {children}
        </div>
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
            top: 0px;
            right: 0px;
            z-index: 101;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 16px;
            color: #fff;
            span {
              position: relative;
              z-index: 2;
            }
            &:after,
            &:before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: 1;
              transition: all 0.3s;
            }
            &:after {
              background-image: linear-gradient(259deg, #0fd856, #01a796, #01a697);
            }
            &:before {
              background-color: #01a697;
              z-index: 2;
              opacity: 0;
            }
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
            display: inline-block;
          }
        `}
      </style>
    </div>
  );
}
ModalBox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
export default ModalBox;
