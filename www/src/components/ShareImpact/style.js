import styled from 'styled-components/macro';
import theme from '../../utils/theme';
export const WrapShareImpact = styled.div`
  max-width: 540px;
  box-sizing: border-box;
  padding: 34px;
  margin: 0 auto;
  background: #fff;
  border-radius: 5px;
  @media screen and (max-width: 600px) {
    max-width: 480px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (max-width: 380px) {
    max-width: 300px;
  }
`;
export const Title = styled.h3`
  font-size: calc(22px + (30 - 25) * ((100vw - 320px) / (1920 - 320)));
  color: ${theme.color.mono.black};
  font-weight: 500;
  font-family: ${theme.fonts.secondary};
  margin: 0;
  margin-bottom: 5px;
`;
export const Description = styled.div`
  font-size: 16px;
  font-weight: 400;
  font-family: ${theme.fonts.secondary};
  color: ${theme.color.mono.black};
  opacity: 0.6;
  margin-bottom: 30px;
  p {
    margin: 0;
  }
`;
export const ShareItem = styled.div`
  margin-bottom: 27px;
`;
export const TitleShare = styled.h3`
  font-size: 16px;
  font-weight: 500;
  font-family: ${theme.fonts.secondary};
  color: ${theme.color.mono.black};
  opacity: 0.8;
  margin: 0;
`;
export const ShareLink = styled.div`
  position: relative;
  padding-right: 85px;
  border-bottom: 1px solid rgba(151, 151, 151, 0.2);
  input {
    width: 100%;
    height: 40px;
    border: none;
    background-color: #fff;
    border: none;
    font-size: 16px;
    color: ${theme.color.mono.black};
    opacity: 0.8;
  }
  .btn-border {
    position: absolute;
    right: 0;
    bottom: 8px;
  }
`;
export const PrivateText = styled.div``;
export const CopySuccess = styled.div`
  font-size: 16px;
  padding: 20px;
  padding-top: 0;
  box-sizing: border-box;
  text-decoration: underline;
  color: ${theme.color.secondary};
  text-align: center;
  width: 100%;
`;
export const PreviewShare = styled.div`
  margin-top: 5px;
  font-size: 12px;
  line-height: 16px;
  font-family: ${theme.fonts.secondary};
  font-weight: 400;
  p {
    margin: 0;
    color: ${theme.color.mono.gray5};
  }
  em {
    font-weight: normal;
    font-weight: 400;
  }
  span {
    color: ${theme.color.secondary};
  }
`;
