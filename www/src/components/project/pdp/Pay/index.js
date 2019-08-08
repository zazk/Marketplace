import React from 'react';
import { PayTitle, PayContent } from './style';
function Pay({ data }) {
  const project = data;
  return (
    <PayContent style={{ backgroundImage: `url(/static/assets/images/bg-footer.jpg)` }}>
      <div className="content">
        <div className="content-main">
          <PayTitle>{project.tagline_footer}</PayTitle>
          <button className="btn">
            <span>Request Quote</span>
          </button>
        </div>
      </div>
    </PayContent>
  );
}
export default Pay;
