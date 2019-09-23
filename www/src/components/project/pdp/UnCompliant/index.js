import React from 'react';
import { CuadrosItem } from './style';
function UnCompliant({ data }) {
  const project = data;
  const list = project.un_goals;
  return (
    <div>
      <h3 className="sidebar-title">UN compliant</h3>
      <div className="sidebar-cuadros flex">
        {list.map((item, i) => (
          <CuadrosItem key={i}>
            <img src={item} width="84" height="85" alt="" />
          </CuadrosItem>
        ))}
      </div>
    </div>
  );
}
export default UnCompliant;
