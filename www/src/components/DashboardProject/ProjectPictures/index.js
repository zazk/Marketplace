import React from 'react';
import AsideTitle from '../AsideTitle';
import { ModuloItem, DetailWrapModulos } from './style';
function ProjectPictures() {
  return (
    <DetailWrapModulos>
      <AsideTitle text="Geolocated Project Photos" />

      <div className="spaces">
        <div className="detail-modulos flex">
          <ModuloItem>
            <img src="/static/assets/images/picture-1.png" alt="" />
          </ModuloItem>
          <ModuloItem>
            <img src="/static/assets/images/picture-2.png" alt="" />
          </ModuloItem>
          <ModuloItem>
            <img src="/static/assets/images/picture-3.png" alt="" />
          </ModuloItem>
          <ModuloItem>
            <img src="/static/assets/images/picture-3.png" alt="" />
          </ModuloItem>
        </div>
      </div>
    </DetailWrapModulos>
  );
}
export default ProjectPictures;
