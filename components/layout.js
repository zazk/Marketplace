import Head from 'next/head';
import Header from './Header';
export default ({ bodyclass, dashboard, children, title = 'This is the default title' }) => {
  const UrlFont = '../static/assets/fonts/';
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700,700i|Work+Sans:400,600,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={`cnt-wrapper ${bodyclass}`}>
        {!dashboard && <Header />}
        {children}

        <footer />
      </div>
      <style jsx global>
        {`
        @font-face {
          font-family: 'CircularStd-Book';
          src: url('${UrlFont}CircularStd-Book.eot');
          src: url('${UrlFont}CircularStd-Book.eot?#iefix') format('embedded-opentype'),
              url('${UrlFont}CircularStd-Book.svg#CircularStd-Book') format('svg'),
              url('${UrlFont}CircularStd-Book.ttf') format('truetype'),
              url('${UrlFont}CircularStd-Book.woff') format('woff'),
              url('${UrlFont}CircularStd-Book.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: 'CircularStd-Bold';
          src: url('${UrlFont}CircularStd-Bold.eot');
          src: url('${UrlFont}CircularStd-Bold.eot?#iefix') format('embedded-opentype'),
              url('${UrlFont}CircularStd-Bold.svg#CircularStd-Bold') format('svg'),
              url('${UrlFont}CircularStd-Bold.ttf') format('truetype'),
              url('${UrlFont}CircularStd-Bold.woff') format('woff'),
              url('${UrlFont}CircularStd-Bold.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
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
        button:focus, select:focus, input:focus{
          outline:none
        }
        body{
          margin:0px;
          font-family: 'Lato', sans-serif;
          font-weight: 400;
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
          span{
            position: relative;
            z-index: 2;
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
          &:hover {
            &:after{
             opacity: 0;
            }
            &:before{
              opacity: 1;
            }

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
      `}
      </style>
    </div>
  );
};
