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

function Hero({ project, list }) {
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
