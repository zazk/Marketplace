import React from 'react';
import { WrapShareImpact, Title, ShareLink, Description, ShareItem, TitleShare, PreviewShare } from './style';
function ShareImpact() {
  return (
    <>
      <WrapShareImpact>
        <Title>Share your impact</Title>
        <Description>
          <p>Get others to see how Google is compromised to help save the planet.</p>
        </Description>
        <ShareItem>
          <TitleShare>Public link</TitleShare>
          <ShareLink>
            <button className="btn-border">COPY</button>
            <input type="text" defaultValue="http://pachama.org/google" />
          </ShareLink>
          <PreviewShare>
            <p>
              Will allow users <em>to see basic</em> information. Best for the general public.
            </p>
            <span>Preview</span>
          </PreviewShare>
        </ShareItem>
        <ShareItem>
          <TitleShare>Private link</TitleShare>
          <ShareLink>
            <button className="btn-border">COPY</button>
            <input type="text" defaultValue="http://pachama.org/google" />
          </ShareLink>
          <PreviewShare>
            <p>
              Will allow users <em>to see basic</em> information. Best for the general public.
            </p>
            <span>Preview</span>
          </PreviewShare>
        </ShareItem>
        <button className="btn w115">
          <span>Done</span>
        </button>
      </WrapShareImpact>
    </>
  );
}
export default ShareImpact;
