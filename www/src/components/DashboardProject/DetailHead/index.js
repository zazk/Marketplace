import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DetailLogoProject, HeadNameProject, DetailHeader, HeadLeft, HeadRight, SelectControl, WrapBtn } from './style';
function DetailHead() {
  const [openDropdown, setDropdown] = useState(0);

  return (
    <DetailHeader>
      <HeadLeft>
        <button className="volver-detail">
          <img src="/static/iconos/arrow-head.svg" width="11" alt="" />
        </button>
        <DetailLogoProject>
          <img src="/static/assets/images/isotipo.png" width="30" alt="" />
        </DetailLogoProject>
        <HeadNameProject>Middlebury College Improved Forest Management Project</HeadNameProject>
      </HeadLeft>
      <HeadRight>
        <WrapBtn className={`wrap-btn wrap-drodown type-two ${openDropdown === 1 && 'active'}`}>
          <button className={`btn drop ${openDropdown === 1 && 'active'}`}>
            <span>Request</span>
            <SelectControl className="open-select" onClick={() => setDropdown(1)} />
            <SelectControl className="close-select" onClick={() => setDropdown(0)} />
          </button>
          <div className="dropdown">
            <ul className="dropdown-main">
              <li className="dropdown-item">
                <Link to="#">
                  <span className="dropdown-link">Request drone LiDAR</span>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="#">
                  <span className="dropdown-link">Request on-site visit</span>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link>
                  <span className="dropdown-link" to="#">
                    Request verification
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </WrapBtn>
      </HeadRight>
    </DetailHeader>
  );
}
export default DetailHead;
