import React from 'react';
import SumnmaryItem from './Item';
import SideBar from './SideBar';
import { LeakageDescription, LeakageContent } from './style';

function Leakage({ data, sidebar }) {
  const project = data.summary;

  return (
    <LeakageContent className="content">
      <div className="content-main flex">
        <LeakageDescription>
          <SumnmaryItem
            type="two"
            title="Leakage"
            description={project.leakage.text}
            source={project.leakage.source}
            source_link={project.leakage.source_link}
            card={false}
            iconcard="/static/iconos/icon-card-large.svg"
          />
          <SumnmaryItem
            type="two"
            title="Additionality"
            description={project.additionality.text}
            source={project.additionality.source}
            source_link={project.additionality.source_link}
          />
          <SumnmaryItem
            type="two"
            title="Permanence"
            description={project.permanence.text}
            source={project.permanence.source}
            source_link={project.permanence.source_link}
          />
          <SumnmaryItem
            type="two"
            title="Verifiability"
            description={project.verifiability.text}
            source={project.verifiability.source}
            source_link={project.verifiability.source_link}
          />
        </LeakageDescription>
        {sidebar &&
          <SideBar data={data} />
        }
      </div>
    </LeakageContent>
  );
}
export default Leakage;
