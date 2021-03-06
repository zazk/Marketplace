import { createGlobalStyle } from 'styled-components/macro';
import theme from '../../utils/theme.js';

const UrlFont = 'static/assets/fonts/';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'icomoon';
    src:  url('${UrlFont}icomoon.eot?vhryx6');
    src:  url('${UrlFont}icomoon.eot?vhryx6#iefix') format('embedded-opentype'),
      url('${UrlFont}icomoon.ttf?vhryx6') format('truetype'),
      url('${UrlFont}icomoon.woff?vhryx6') format('woff'),
      url('${UrlFont}icomoon.svg?vhryx6#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
  }
  [class^="icon-"], [class*=" icon-"] {
    font-family: 'icomoon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon-menu:before {
    content: "\\e917";
  }
  .icon-close:before {
    content: "\\e918";
  }
  .icon-menu-point:before {
    content: "\\e916";
  }
  .icon-arrow-right1:before {
    content: "\\e903";
  }
  .icon-ubication:before {
    content: "\\e904";
  }
  .icon-bluesource:before {
    content: "\\e905";
  }
  .icon-calendar:before {
    content: "\\e906";
  }
  .icon-check:before {
    content: "\\e907";
  }
  .icon-coins:before {
    content: "\\e908";
  }
  .icon-icon-eye:before {
    content: "\\e909";
  }
  .icon-info:before {
    content: "\\e90a";
  }
  .icon-land:before {
    content: "\\e90b";
  }
  .icon-tone:before {
    content: "\\e90c";
  }
  .icon-arrow-down-white:before {
    content: "\\e90d";
  }
  .icon-arrow-head:before {
    content: "\\e90e";
  }
  .icon-arrow-next:before {
    content: "\\e90f";
  }
  .icon-arrow-prev:before {
    content: "\\e910";
  }
  .icon-arrow-thin-right:before {
    content: "\\e911";
  }
  .icon-carbon-credits:before {
    content: "\\e912";
  }
  .icon-checked:before {
    content: "\\e913";
  }
  .icon-close-big:before {
    content: "\\e914";
  }
  .icon-close-box:before {
    content: "\\e915";
  }
  .icon-arrow-down:before {
    content: "\\e901";
  }
  .icon-lupa:before {
    content: "\\e902";
  }
  .icon-arrow-right:before {
    content: "\\e900";
  }

  #view-child-main-1 {
    pointer-events: inherit !important;
  }

  .item-card-tooltip {
      width: 24%;
    }
  li{
    margin:0;
    list-style:none;
  }
  a{
    text-decoration:none;
    color:inherit;
  }
  .cnt-wrapper{
    overflow:hidden;
  }
  button:focus, select:focus, input:focus, textarea:focus{
    outline:none
  }
  body{
    margin:0px;
    font-family: ${theme.fonts.primary};
    font-weight: 400;
    color: ${theme.color.primary};
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    background-color:#fafafa;
  }
  button {
        border: none;
        background: none;
        padding: 0;
      }
  .tab-feature-item {
    width: 50%;
    margin-bottom: 20px;
    @media screen and (max-width: 480px) {
      width: 100%;
    }
  }
  .sidebar-title {
    font-size: 13px;
    margin-bottom: 10px;
    font-weight: 700;
    font-family: 'Work Sans', sans-serif;
    text-transform: uppercase;
  }
  figure {
    margin: 0;
    img {
      max-width: 100%;
      height: auto;
    }
  }
  ul {
    margin: 0px;
    padding: 0px;
  }
  .btn-border{
    border: 1px solid ${theme.color.secondary};
    padding:5px 12px;
    color:${theme.color.secondary};
    border-radius: 5px;
    font-weight: 500;
  }
  .btn {
    color: #fff;
    height: 50px;
    width: 196px;
    border:none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    transition: all 0.3s;
    padding: 0;
    text-decoration: none;
    cursor: pointer;
    border:none;
    overflow: hidden;
    border-radius:5px;
    position: relative;

    &.drop{
      &.active{
        span{
          &:after{
            transform:rotate(180deg);
          }
        }
      }
      span{
        &:after{
          color:#fff;
          content:"\\e90d";
          font-family: 'icomoon';
          margin-left: 5px;
          font-size: 13px;
          display: inline-block;
        }

      }
    }
    &.border-green-small{
      height: 41px;
      width: 164px;
      color: ${theme.color.secondary};
      border: 1px solid ${theme.color.secondary};
      &:after, &:before{
        display: none;

      }
    }
    span{
      position: relative;
      z-index: 2;
    }
    &.w175{
      width: 175px;
    }
    &.w115{
      width: 115px;
    }
    &[disabled] {
        cursor: default;
        background-color: #d8d8d8;
        color: rgba(255, 255, 255, 0.74);
        &:after,
        &:before {
          display: none;
        }
      }
    &:after, &:before{
      content:"";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      transition:all .3s
    }
    &:after{
      background-image: linear-gradient(259deg, #0fd856, #01a796, #01a697);
    }
    &:before{
      background-color: #01a697;
      z-index: 2;
      opacity: 0;

    }
    &.white{
      color:#64b65a;
      &:after{
        background-image:none;
        background-color: #fff;
      }
      &:hover{
        color:#fff;
        &:before{
          background-color: #64b65a;
        }
      }
    }
    .btn-icon{
      margin-left:5px;
      margin-top:5px;
      position: relative;
      z-index: 2;
    }
    &.gray {
      width: 210px;
      border: solid 1px #979797;
      background-color: #d8d8d8;
      height: 50px;
      font-size: 16px;
      color: #4a4a4a;
      border-radius: 0px;
      text-transform: inherit;
    }
    .small {
      width: 115px;
    }
    &.medium {
      width: 214px;
    }
    &:hover {
      &:after{
        opacity: 0;
      }
      &:before{
        opacity: 1;
      }

    }
  }
  .dashboard-page{
    header{
      display:none;
    }
  }
  .content {
    max-width: 1280px;
    padding:0 20px;
    box-sizing: border-box;
    margin: auto;
    color: #363636;
    text-align: left;
    font-size: 14px;
  }
  .content-main{
    max-width: 1024px;
    margin: auto;
  }
  .flex {
    display: flex;
    flex-flow: row wrap;
  }
  .link-imagen {
      display: flex;
      text-decoration: none;
      &:hover {
        p {
          text-decoration: underline;
        }
      }
      img {
        margin-right: 5px;
      }
      p {
        margin: 0;
        font-size: 14px;
        color: #17b363;
      }
      @media screen and (max-width: 640px) {
        justify-content: center;
      }
      @media screen and (max-width: 480px) {
        justify-content: flex-start;
      }
    }
    .wrap-drodown {
        position: relative;
        &.active {
          .dropdown-open{
            display:none;

          }
          .dropdown-close{
            display:block;
          }
          .dropdown {
            opacity: 1;
            visibility: visible;
            transform: translateY(0px);
          }
        }

        &.type-two {
          .dropdown {
            border-radius: 25px 0px 25px 0px;
            background-color: #fff;
            overflow: hidden;
            box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.08);
            .dropdown-main {
              box-shadow: inherit;
            }
            .dropdown-link {
              height: 44px;
            }
          }
        }
        .dropdown {
          opacity: 0;
          transform: translateY(-5px);
          visibility: hidden;
          transition: all 0.5s;
          position: absolute;
          width: 100%;
          left: 0;
          top: 100%;
          padding-top: 10px;
          z-index: 10;
          background-color: rgba(255, 255, 255, 0.8);
          .dropdown-main {
            box-sizing: border-box;
            box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.08);
          }
          &.w100{
            width: 100px;
          }
        }
        .dropdown-link {
          height: 35px;
          display: flex;
          padding: 0 10px;
          font-size: 14px;
          align-items: center;
          color: rgba(54, 54, 54, 0.5);

          &:hover {
            background-color: rgba(1, 166, 151, 0.9);
            color: #fff;
          }
        }
        .dropdown-btn{
          position:relative;
          padding: 0 10px;
          .drop-down-icon{
            margin-left: 5px;
          }
        }
        .dropdown-label{
          color:#050b24;
          font-size: 16px;
          @media screen and (max-width: 480px){
            display:none;
          }
        }
        .dropdown-controls{
          position: absolute;
          top: 0;
          left: 0;
          z-index: 3;
          width: 100%;
          height: 100%;

        }
        .dropdown-close{
          display:none
        }
      }

    .project-list {
      .btn-request {
        display: none;
      }
      .wrap-company-user{
        display:block;
      }
    }
    .headerfull{
      .header{
        background-color:#fff;
        .content{
          box-shadow:none !important;
        }
      }
    }

    .get-tooltip{
      position:relative;
      &:hover{
        .wrap-tooltip {
              opacity: 1;
              visibility: visible;
              transform: translateY(0px) translateX(-50%);
            }

        }

      }
    .wrap-tooltip {
      position: absolute;
      bottom: 100%;
      padding-bottom: 10px;
      left: 50%;
      opacity: 0;
      visibility: hidden;
      transform: translateY(5px) translateX(-50%);
      transition: all 0.3s;
      .tooltip-inner {
        background-color: #000;
        padding: 4px 8px;
        color: #fff;
        position: relative;
        border-radius: 5px;
        width: 90px;
        text-align: center;
        p {
          margin: 0;
          font-size: 13px;
          font-family: 'Work Sans', sans-serif;
        }
        &:after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 6px 6px 0 6px;
          border-color: #000 transparent transparent transparent;
        }
      }
    }

    .formulary{
      @media screen and (max-width:480px){
        .MuiFormControl-root   {
          .MuiInput-root{
            z-index:3;
          }
          .MuiInputLabel-formControl{
            z-index:2;
          }
          .MuiInputLabel-shrink{
            z-index:4;
          }
          &:after{
            content:"";
            height:48px;
            position:absolute;
            bottom:0px;
            left:0px;
            width:100%;
            border-radius:4px;
            background-color:#fff;
            z-index:1;
          }
          &.field-type-textarea{
            &:after{
              height:132px;
            }
          }
        }
        .form-btn{
          .btn{
            width:100%;
          }
        }
      }
      .input-item {
        width: 47%;
        .MuiFormControl-root {
          width: 100%;
        }
        @media screen and (max-width:640px){
          width:100%
        }
        &.info{
          position: relative;
        }
      }

      .MuiInput-underline:after,
      .MuiInput-underline:before{
        position: absolute;
        top: 0;
        left: 0;
        border: 1px solid #bdbdbd;
        border-radius:4px;
      }
      .MuiInput-underline:after{
        border-color:#64b65a;
      }
      .MuiFormLabel-root.Mui-focused{
        color:#64b65a;
      }
      .MuiInput-underline:hover:not(.Mui-disabled):before{
        border: 1px solid #bdbdbd;
        border-radius:4px;
      }
      .MuiInputBase-input{
        height: 48px;
        padding: 0 16px;
        line-height: 48px;
      }
      .MuiInputLabel-formControl{
        top:10px;
        left: 16px;

      }
      .MuiInputLabel-shrink{
        background-color: #fff;
        z-index: 1;
        padding: 0 2px;
      }
      .MuiLinearProgress-barColorPrimary{
        background-image: linear-gradient(259deg, #0fd856, #01a796, #01a697);
        background-color:transparent;
      }
      .field-type-textarea{
        width: 100%;
        .MuiInputBase-input{
          height: 109px;
          line-height: 100%;
          padding-top: 10px;
        }
      }

    }
`;
