import React, { useState } from 'react';
import { CompanyName, CompanyImage, WrapLabelDropdown } from './style';

const LoggedUserDropdown = ({ picture, name, logOut }) => {
  const [openDropdown, setDropdown] = useState(false);
  return (
    <div className="wrap-company-user">
      <CompanyName className={`wrap-drodown ${openDropdown && 'active'}`}>
        <WrapLabelDropdown>
          <CompanyImage style={{ backgroundImage: `url(${picture})` }} />
          <div className="dropdown-btn ">
            <div
              className="dropdown-open dropdown-controls"
              onClick={() => setDropdown(true)}
            />
            <div
              className="dropdown-close dropdown-controls"
              onClick={() => setDropdown(false)}
            />
            <span className="dropdown-label company-name">{name}</span>
            <img
              className="drop-down-icon"
              src="/static/iconos/arrow-down.svg"
              width="12"
              alt=""
            />
          </div>
        </WrapLabelDropdown>
        <div className="dropdown">
          <ul className="dropdown-main">
            <li className="dropdown-item">
              <span className="dropdown-link" onClick={() => logOut()}>
                Log Out
              </span>
            </li>
          </ul>
        </div>
      </CompanyName>
    </div>
  );
};

export default LoggedUserDropdown;
