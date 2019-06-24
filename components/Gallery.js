import React, { useState } from 'react';

function Gallery({ data }) {
  const [showInLightbox, setInLightbox] = useState(0);
  const [openLightbox, setOpenLightbox] = useState(0);

  const ImagesData = data;

  const numbersImages = ImagesData.length;
  let imageInit = 0;

  const addIndice = myindice => {
    console.log('indice generado', myindice);
    imageInit = myindice;
  };
  const addPrev = index => {
    console.log('test prev');
    let prevdata = showInLightbox - 1;
    let prev = prevdata < 0 ? numbersImages - 1 : prevdata;

    setInLightbox(prev);
  };

  const addNext = () => {
    console.log('test next');
    let nextdata = showInLightbox + 1;
    let next = nextdata >= numbersImages ? 0 : nextdata;
    setInLightbox(next);
  };

  return (
    <div className="gallery">
      {ImagesData.map((img, i) => (
        <figure className="gallery-item" key={i} onClick={() => (addIndice(i), setInLightbox(i), setOpenLightbox(1))}>
          <img src={img.image} width="392" height="190" alt="" />
          <figcaption>{img.caption}</figcaption>
        </figure>
      ))}
      <div className={`wrap-lightbox ${openLightbox === 1 && 'active'}`}>
        <div className="close-lightbox" onClick={() => setOpenLightbox(0)}>
          <img src="/static/iconos/close-w.svg" width="20" alt="" />
        </div>
        <span className="lightbox-next" onClick={() => addNext()}>
          <img src="/static/iconos/arrow-next.svg" width="40" alt="" />
        </span>
        <span className="lightbox-prev" onClick={() => addPrev()}>
          <img src="/static/iconos/arrow-prev.svg" width="40" alt="" />
        </span>

        <div className="list-lightbox">
          {ImagesData.map((img, i) => (
            <div key={i} className={`item-lightbox ${showInLightbox === i && 'active'}`}>
              <img src={img.image} width="392" height="190" alt="" />
              <figcaption className="box">{img.caption}</figcaption>
            </div>
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .gallery {
            .gallery-item {
              cursor: pointer;
              transition: all 0.3s;
              margin-bottom: 20px;
              position: relative;
              border-radius: 10px;
              overflow: hidden;
              &:after {
                content: '';
                position: absolute;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 100%;
                background-image: linear-gradient(to top, rgba(25, 36, 79, 0.91), rgba(11, 16, 36, 0));
              }
              &:last-child {
                margin-bottom: 0;
              }
              &:hover {
                opacity: 0.8;
              }
              @media screen and (max-width: 640px) {
                width: 100%;
              }
              img {
                width: 100%;
              }
            }
            figcaption {
              font-size: 12px;
              margin-top: 10px;
              color: #fff;
              position: absolute;
              width: 100%;
              bottom: 0px;
              left: 0;
              right: 0;
              margin: auto;
              text-align: center;
              z-index: 5;
              padding: 10px;
              box-sizing: border-box;
              &.box {
                width: 80vw;
              }
            }
          }
          .wrap-lightbox {
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1200;
            height: 0;
            overflow: hidden;
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.3s;
            &.active {
              height: 100vh;
              opacity: 1;
              visibility: visible;
            }
            .close-lightbox {
              width: 40px;
              height: 40px;
              border-radius: 100%;
              background-color: #000;
              position: absolute;
              top: 10px;
              right: 10px;
              font-size: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.3s;
              cursor: pointer;
              &:hover {
                opacity: 0.5;
              }
            }
            .item-lightbox {
              position: absolute;
              top: 0;
              bottom: 0;
              margin: auto 0;
              left: 0;
              height: 85vh;
              width: 100%;
              text-align: center;
              z-index: 1;
              opacity: 0;
              visibility: hidden;
              transition: all 0.5s;
              box-sizing: border-box;
              padding: 0 30px;
              padding-bottom: 60px;
              display: flex;
              justify-content: center;
              align-items: center;
              &.active {
                opacity: 1;
                visibility: visible;
              }

              img {
                height: auto;
                width: 80vw;
              }
              figcaption {
                font-size: 16px;
                color: #fff;
              }
            }
            .lightbox-next,
            .lightbox-prev {
              position: absolute;
              top: 0;
              bottom: 0;
              margin: auto 0;
              width: 40px;
              height: 40px;
              background-color: #fff;
              border-radius: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 2;
              transition: all 0.3s;
              cursor: pointer;
              &:hover {
                opacity: 0.5;
              }
            }
            .lightbox-next {
              right: 10px;
            }
            .lightbox-prev {
              left: 10px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Gallery;
