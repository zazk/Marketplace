import React from 'react';
import { IntroWrap, Content, Text, Title, Description, Cto } from './style';

function IntroCto() {
  return (
    <IntroWrap>
      <Content>
        <Text>
          <Title>Verified projects</Title>
          <Description>
            Some explanation that will make users want to click everywhere and, ultimately, request access in order to
            create an account, and be amazed at the quality of content found here in.
          </Description>
        </Text>
        <Cto>
          <button className="btn white medium">
            <span>Request access</span>
          </button>
        </Cto>
      </Content>
    </IntroWrap>
  );
}

export default IntroCto;
