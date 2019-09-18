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
function ShareImpact({ toggle }) {
  const [copySuccess, setCopySuccess] = useState(0);
  const [showPrivateUrl, setPrivateUrl] = useState(0);
  const textAreaRef = useRef(null);
  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    setCopySuccess(1);
    const timer = setTimeout(() => {
      setCopySuccess(0);
    }, 1000);
    return () => clearTimeout(timer);
  }
  return (
    <>
      <WrapShareImpact>
        {copySuccess === 1 && <CopySuccess>Copied Url</CopySuccess>}

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
            <input readOnly ref={textAreaRef} type="text" defaultValue="http://pachama.org/google" />
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
          {showPrivateUrl === 0 && (
            <PrivateText>
              <ShareLink>
                <button className="btn-border" onClick={() => setPrivateUrl(1)}>
                  Create
                </button>
              </ShareLink>
              <PreviewShare>
                <p>
                  Will allow users <em>to see basic</em> information. Best for the general public.
                </p>
                <span>Preview</span>
              </PreviewShare>
            </PrivateText>
          )}
          {showPrivateUrl === 1 && (
            <div>
              <ShareLink>
                <button className="btn-border" onClick={copyToClipboard}>
                  COPY
                </button>
                <input readOnly ref={textAreaRef} type="text" defaultValue="http://pachama.org/google" />
              </ShareLink>
              <PreviewShare>
                <p>
                  Will allow users <em>to see basic</em> information. Best for the general public.
                </p>
                <span>Preview</span>
              </PreviewShare>
            </div>
          )}
        </ShareItem>
        <button className="btn w115" onClick={() => toggle(0)}>
          <span>Done</span>
        </button>
      </WrapShareImpact>
    </>
  );
}
export default ShareImpact;
