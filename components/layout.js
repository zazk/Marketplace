import Head from 'next/head';
import Header from './Header';

export default ({ children, title = 'This is the default title' }) => {
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
      <div className="cnt-wrapper">
        <Header />

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
        body{
          margin:0px;
          font-family: 'Lato', sans-serif;
          font-weight: 400;
          -webkit-font-smoothing: antialiased;
          -webkit-tap-highlight-color: transparent;
        }
        .tab-feature-item {
          width: 50%;
          margin-bottom: 20px;
          @media screen and (max-width: 480px) {
            width: 100%;
          }
        }
        .sidebar-title {
          color: rgba(0, 0, 0, 0.3);
          font-size: 13px;
          margin-bottom: 10px;
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
          background-color: #17b363;
          color: #fff;
          height: 50px;
          width: 196px;
          border:none;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-family: 'Lato', sans-serif;
          font-weight: 700;
          transition: all 0.3s;
          padding: 0;
          text-decoration: none;
          cursor: pointer;
          border:none;
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
            opacity: 0.5;
          }
        }
        .content {
          max-width: 1024px;
          width: 94%;
          box-sizing: border-box;
          margin: auto;
          color: #363636;
          text-align: left;
          font-size: 14px;
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
      `}
      </style>
    </div>
  );
};
