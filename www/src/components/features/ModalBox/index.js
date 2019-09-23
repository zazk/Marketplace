import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ModalBoxWrap, ModalboxClose, ModalboxOverlay, ModalboxContent } from './style';
function ModalBox({ children, isOpen, toggle, url }) {
  return (
    <ModalBoxWrap className={`modalbox ${isOpen === 1 && 'active'}`}>
      <ModalboxOverlay />
      <ModalboxContent>
        {url ? (
          <Link to={url}>
            <ModalboxClose className="modalbox-close">
              <img src="/static/iconos/close-box.svg" width="20" alt="" />
            </ModalboxClose>
          </Link>
        ) : (
          <ModalboxClose className="modalbox-close" onClick={() => toggle(0)}>
            <img src="/static/iconos/close-box.svg" width="20" alt="" />
          </ModalboxClose>
        )}

        {children}
      </ModalboxContent>
    </ModalBoxWrap>
  );
}
ModalBox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  // isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
export default ModalBox;
