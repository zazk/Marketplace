import React, { useState } from 'react';
import AsideTitle from '../AsideTitle';
import ModalBox from '../../features/ModalBox';
import {
  DetailGraphic,
  WrapGraphicInfo,
  GraphicNumber,
  GraphicDate,
  GraphicOpenLightbox,
  LightboxMainGraphic,
  LightboxItems,
  LightboxItemGraphic,
  LightboxDescription,
  LightboxTitle,
  Sheets,
  WrapGraphics,
} from './style';
function Graphics() {
  const [showInLightbox, setInLightbox] = useState(0);
  const [openLightbox, setOpenLightbox] = useState(0);
  function toggle(set) {
    setOpenLightbox(set);
  }
  return (
    <WrapGraphics>
      <AsideTitle text="Carbon Capture" />
      <div className="spaces">
        <DetailGraphic>
          <WrapGraphicInfo>
            <GraphicNumber>
              <span>13,467.67</span>
              <p>current cap (Tn co2)</p>
            </GraphicNumber>
            <GraphicDate>
              <span>12/07/19</span>
              <GraphicOpenLightbox onClick={() => (setInLightbox(0), toggle(1))}>
                <img src="/static/iconos/icon-info.svg" alt="" />
              </GraphicOpenLightbox>
              <p>Last verification</p>
            </GraphicDate>
          </WrapGraphicInfo>
          <figure>
            <img src="/static/assets/images/graphic-n-1.png" alt="" />
          </figure>
        </DetailGraphic>
      </div>
      <AsideTitle text="Tree Cover" />

      <div className="spaces">
        <DetailGraphic>
          <WrapGraphicInfo>
            <GraphicNumber>
              <span>40.3%</span>
              <p>current cover</p>
            </GraphicNumber>
            <GraphicDate>
              <span>12/07/19</span>

              <GraphicOpenLightbox onClick={() => (setInLightbox(1), setOpenLightbox(1))}>
                <img src="/static/iconos/icon-info.svg" alt="" />
              </GraphicOpenLightbox>

              <p>Last verification</p>
            </GraphicDate>
          </WrapGraphicInfo>
          <figure>
            <img src="/static/assets/images/graphic-n-2.png" alt="" />
          </figure>
        </DetailGraphic>
      </div>
      <AsideTitle text="BIOMASS" />
      <div className="spaces">
        <DetailGraphic>
          <WrapGraphicInfo>
            <GraphicNumber>
              <span>13,467.67</span>
              <p>current cap (Tn co2)</p>
            </GraphicNumber>
            <GraphicDate>
              <span>12/07/19</span>

              <GraphicOpenLightbox onClick={() => (setInLightbox(2), setOpenLightbox(1))}>
                <img src="/static/iconos/icon-info.svg" alt="" />
              </GraphicOpenLightbox>

              <p>Last verification</p>
            </GraphicDate>
          </WrapGraphicInfo>
          <figure>
            <img src="/static/assets/images/graphic-n-3.png" alt="" />
          </figure>
        </DetailGraphic>
      </div>

      <ModalBox isOpen={openLightbox} toggle={toggle}>
        <LightboxMainGraphic>
          <Sheets className="sheet-1">
            <img src="/static/assets/images/big-sheet.svg" alt="" />
          </Sheets>
          <LightboxItems>
            <LightboxItemGraphic className={showInLightbox === 0 && 'active'}>
              <LightboxTitle>CARBON CAPTURE</LightboxTitle>
              <LightboxDescription>
                <p>
                  10 new species were planted since the last verification. The developer plans on having planted 35
                  different species by the end of this project.
                </p>
                <p>
                  25 new jobs were generated since the last verification, including logistics, maintenance and
                  management roles.
                </p>
              </LightboxDescription>
            </LightboxItemGraphic>
            <LightboxItemGraphic className={showInLightbox === 1 && 'active'}>
              <LightboxTitle>TREE COVER</LightboxTitle>
              <LightboxDescription>
                <p>
                  10 new species were planted since the last verification. The developer plans on having planted 35
                  different species by the end of this project.
                </p>
                <p>
                  25 new jobs were generated since the last verification, including logistics, maintenance and
                  management roles.
                </p>
              </LightboxDescription>
            </LightboxItemGraphic>
            <LightboxItemGraphic className={showInLightbox === 2 && 'active'}>
              <LightboxTitle>BIOMASS</LightboxTitle>
              <LightboxDescription>
                <p>
                  10 new species were planted since the last verification. The developer plans on having planted 35
                  different species by the end of this project.
                </p>
                <p>
                  25 new jobs were generated since the last verification, including logistics, maintenance and
                  management roles.
                </p>
              </LightboxDescription>
            </LightboxItemGraphic>
          </LightboxItems>

          <Sheets className="sheet-2">
            <img src="/static/assets/images/small-sheet.svg" alt="" />
          </Sheets>
        </LightboxMainGraphic>
      </ModalBox>
    </WrapGraphics>
  );
}
export default Graphics;
