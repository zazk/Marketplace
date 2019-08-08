import React from 'react';
import IntroHero from './IntroHero';
import ItemListHero from './ItemListHero';
import FormRequesQuote from '../../../forms/FormRequestQuote';
import {
  Bgbanner,
  BannerMain,
  Banner,
  FeatureDescription,
  Progressbar,
  ProgressbarItem,
  BannerIntro,
  FeatureList,
  FeatureControls,
} from './style';

function Hero({ data, user }) {
  const project = data;
  const location_data = project.location.name;
  const location = location_data.split(',');

  const list = [
    {
      title: `${project.credits_avail.quatinty} carbon ${project.credits_avail.unit} available`,
      description: `This project generates ${project.credits_issued.quatinty} ${project.credits_issued.unit} per year`,
    },
    {
      title: `${project.project_type}`,
      description: '',
    },
    {
      title: `${location[0] + ', ' + location[1] + ', ' + location[2]}`,
      description: '',
    },
  ];
  const DataFeatureList = () => list.map((item, i) => <ItemListHero key={i} title={item.title} />);
  return (
    <Banner>
      <Bgbanner style={{ backgroundImage: `url(${project.main_picture})` }} />
      <BannerMain>
        <BannerIntro>
          <IntroHero data={project} />
        </BannerIntro>
        <FeatureDescription>
          <Progressbar>
            <ProgressbarItem>
              <span>
                80<em>%</em>
              </span>
            </ProgressbarItem>
          </Progressbar>
          <FeatureList>
            <DataFeatureList />
          </FeatureList>
          <FeatureControls>
            <FormRequesQuote />
            <figure className="feature-logo">
              <img src={project.standard} width="96" alt="" />
            </figure>
          </FeatureControls>
        </FeatureDescription>
      </BannerMain>
    </Banner>
  );
}

export default Hero;
