import React, { useState } from 'react';
import AsideTitle from '../AsideTitle';
import { StatusCircles, StatusItem, WrapStatusText, StatusTextItem, StatusColor } from './style';
function StatusMonitoring() {
  const [showBorder, setBorder] = useState(0);

  return (
    <div className="wrap-status">
      <AsideTitle text="Status monitoring" />
      <StatusCircles>
        <StatusItem className="get-tooltip" style={{ backgroundColor: `#2ed971` }}>
          <img src="/static/iconos/icon-gota.svg" width="15" alt="" />
          <div className="wrap-tooltip">
            <div className="tooltip-inner">
              <p>Leakage</p>
            </div>
          </div>
        </StatusItem>

        <StatusItem
          className="description get-tooltip"
          style={{ backgroundColor: `#ffcf35` }}
          onMouseEnter={() => setBorder(1)}
          onMouseLeave={() => setBorder(0)}
        >
          <img src="/static/iconos/icon-nube.svg" width="28" alt="" />
          <div className="wrap-tooltip">
            <div className="tooltip-inner">
              <p>Weather alert</p>
            </div>
          </div>
        </StatusItem>

        <StatusItem
          className=" description get-tooltip"
          style={{ backgroundColor: `#ff6e5d` }}
          onMouseEnter={() => setBorder(2)}
          onMouseLeave={() => setBorder(0)}
        >
          <img src="/static/iconos/icon-hojas.svg" width="33" alt="" />
          <div className="wrap-tooltip">
            <div className="tooltip-inner">
              <p>Plant health</p>
            </div>
          </div>
        </StatusItem>
      </StatusCircles>
      <WrapStatusText>
        <StatusTextItem className={showBorder === 1 && 'active'}>
          <StatusColor>
            <img src="/static/iconos/weather.svg" height="27" alt="" />
          </StatusColor>
          <p>Weather alert: forecast suggests the possibility of a drier than average season</p>
        </StatusTextItem>

        <StatusTextItem className={showBorder === 2 && 'active'}>
          <StatusColor>
            <img src="/static/iconos/plant.svg" height="27" alt="" />
          </StatusColor>
          <p>Plant health: no pests have been detected and plant health tests have been passed satisfactorily </p>
        </StatusTextItem>
      </WrapStatusText>
    </div>
  );
}
export default StatusMonitoring;
