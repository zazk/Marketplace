import React from 'react';
import ItemText from './ItemText';
import SideBar from './SideBar';
const listContent = {
  title: 'Leakage: none expected',
  description:
    'Include a short excerpt explaining why this project would be that good. Diving a bit in the details may definitely help provide better validation, but in order to achieve it we should definitely consider linking to the source - the project file.',
  source: 'OPD',
  page: '40',
  card: true,
};
const FirstItem = { ...listContent, card: false };
const list = [FirstItem, listContent, listContent, listContent, listContent];
function Leakage({ data }) {
  return (
    <div className="leakage">
      <div className="content flex">
        <div className="leakage-description">
          {list.map((item, i) => (
            <ItemText
              key={i}
              title={item.title}
              description={item.description}
              source={item.source}
              page={item.page}
              card={item.card}
            />
          ))}
        </div>
        <SideBar data={data} />
      </div>
      <style jsx>
        {`
          .leakage {
            padding-bottom: 105px;
            .content {
              justify-content: space-between;
            }
            .leakage-item {
              margin-bottom: 45px;
            }
            @media screen and (max-width: 768px) {
              padding-bottom: 30px;
            }
          }
          .leakage-description {
            width: 54%;
            @media screen and (max-width: 768px) {
              width: 58%;
            }
            @media screen and (max-width: 640px) {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
}
export default Leakage;
