import React from 'react';

function ImagenFeature() {
  return (
    <div className="imagen-feature flex content">
      <div className="imagen-feature-descrip">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim perferendis, debitis aperiam animi ratione
        sapiente, aut incidunt est quo quam dolorum temporibus rem ut obcaecati voluptate, adipisci eos commodi?
        Temporibus!
      </div>
      <style jsx>
        {`
          .imagen-feature {
            figure {
              width: 28%;
            }
            @media screen and (max-width: 640px) {
              figure {
                width: 100%;
                margin-bottom: 20px;
                text-align: center;
              }
            }
          }
          .imagen-feature-descrip {
            width: 69%;
            @media screen and (max-width: 640px) {
              width: 100%;
            }
          }
          .imagen-feature {
            background-color: #d8d8d8;
            justify-content: space-between;
          }
          .imagen-feature.content {
            padding: 26px;
            margin-top: 40px;
          }
        `}
      </style>
    </div>
  );
}
export default ImagenFeature;
