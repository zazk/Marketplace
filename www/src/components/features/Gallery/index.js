import React, { useState } from 'react';
import { GalleryItem, Figcaption, ItemLightbox, LightboxControls, CloseLightbox, WrapLightbox } from './style';
function Gallery({ data }) {
  const [showInLightbox, setInLightbox] = useState(0);
  const [openLightbox, setOpenLightbox] = useState(0);

  const ImagesData = data;

  const numbersImages = ImagesData.length;

  const addPrev = index => {
    let prevdata = showInLightbox - 1;
    let prev = prevdata < 0 ? numbersImages - 1 : prevdata;

    setInLightbox(prev);
  };

  const addNext = () => {
    let nextdata = showInLightbox + 1;
    let next = nextdata >= numbersImages ? 0 : nextdata;
    setInLightbox(next);
  };

  return (
    <div className="gallery">
      {ImagesData.map((img, i) => (
        <GalleryItem key={i} onClick={() => setInLightbox(i) || setOpenLightbox(1)}>
          <img src={img.image} width="392" height="190" alt="" />
          <Figcaption>{img.caption}</Figcaption>
        </GalleryItem>
      ))}
      <WrapLightbox className={openLightbox === 1 && 'active'}>
        <CloseLightbox onClick={() => setOpenLightbox(0)}>
          <img src="/static/iconos/close-w.svg" width="20" alt="" />
        </CloseLightbox>
        <LightboxControls className="next" onClick={() => addNext()}>
          <img src="/static/iconos/arrow-next.svg" width="40" alt="" />
        </LightboxControls>
        <LightboxControls className="prev" onClick={() => addPrev()}>
          <img src="/static/iconos/arrow-prev.svg" width="40" alt="" />
        </LightboxControls>

        <div className="list-lightbox">
          {ImagesData.map((img, i) => (
            <ItemLightbox key={i} className={showInLightbox === i && 'active'}>
              <img src={img.image} width="392" height="190" alt="" />
              <Figcaption className="box">{img.caption}</Figcaption>
            </ItemLightbox>
          ))}
        </div>
      </WrapLightbox>
    </div>
  );
}

export default Gallery;
