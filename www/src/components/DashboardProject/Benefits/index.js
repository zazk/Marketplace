import React from 'react';
import AsideTitle from '../AsideTitle';
import { WrapBenefits, BenefitsItem, BenefitsNumbers, BenefitsText, BenefitsTitle } from './style';
function Benefits() {
  return (
    <WrapBenefits>
      <AsideTitle text="Co-benefits generation"></AsideTitle>

      <BenefitsItem>
        <BenefitsText>
          <BenefitsTitle>Biodiversity</BenefitsTitle>
          <p>
            10 new species were planted since the last verification. The developer plans on having planted 35 different
            species by the end of this project.
          </p>
        </BenefitsText>
        <BenefitsNumbers>
          <span>24</span>
          <em>(10&#x2191;)</em>
        </BenefitsNumbers>
      </BenefitsItem>

      <BenefitsItem>
        <BenefitsText>
          <BenefitsTitle>Jobs Creation</BenefitsTitle>
          <p>
            25 new jobs were generated since the last verification, including logistics, maintenance and management
            roles.
          </p>
        </BenefitsText>
        <BenefitsNumbers>
          <span>123</span>
          <em>(25&#x2191;)</em>
        </BenefitsNumbers>
      </BenefitsItem>

      <BenefitsItem>
        <BenefitsText>
          <BenefitsTitle>Water wells</BenefitsTitle>
          <p>6 new water wells have been built in the last 6 months</p>
        </BenefitsText>
        <BenefitsNumbers>
          <span>6</span>
        </BenefitsNumbers>
      </BenefitsItem>

      <BenefitsItem>
        <BenefitsText>
          <BenefitsTitle>Community Income</BenefitsTitle>
          <p>The communities surrounding the project have increased their income thanks to the project.</p>
        </BenefitsText>
        <BenefitsNumbers>
          <span>$100k</span>
          <em>(&#x2191;3%)</em>
        </BenefitsNumbers>
      </BenefitsItem>
    </WrapBenefits>
  );
}
export default Benefits;
