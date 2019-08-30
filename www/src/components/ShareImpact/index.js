import React, { useRef, useState } from 'react';
import {
  WrapShareImpact,
  Title,
  ShareLink,
  Description,
  ShareItem,
  TitleShare,
  PreviewShare,
  CopySuccess,
  PrivateText,
} from './style';
function ShareImpact() {
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);
  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    setCopySuccess('Copied!');
  }
  return (
    <>
      <WrapShareImpact>
        {copySuccess && <CopySuccess>{copySuccess}</CopySuccess>}

        <Title>Share your impact</Title>
        <Description>
          <p>Get others to see how Google is compromised to help save the planet.</p>
        </Description>
        <ShareItem>
          <TitleShare>Public link</TitleShare>
          <ShareLink>
            <button className="btn-border" onClick={copyToClipboard}>
              COPY
            </button>
            <input ref={textAreaRef} type="text" defaultValue="http://pachama.org/google" />
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

          <PrivateText>
            <ShareLink>
              <button className="btn-border">Create</button>
            </ShareLink>
            <PreviewShare>
              <p>
                Will allow users <em>to see basic</em> information. Best for the general public.
              </p>
              <span>Preview</span>
            </PreviewShare>
          </PrivateText>

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
