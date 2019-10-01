import { createGlobalStyle } from 'styled-components/macro';
export const AuthLogin = createGlobalStyle`

.auth0-lock.auth0-lock .auth0-lock-header-welcome{
  background-color: #fff;
  padding: 10px 0;
  &:before{
    content: "";
    background-image: url('/static/assets/images/logo-pachama.svg');
    display: block;
    margin: 0 auto;
    width: 132px;
    height: 33px;
    background-size: 100%;
  }

}
.auth0-lock.auth0-lock .auth0-lock-header{
  padding: 0 !important;
}
.auth0-lock.auth0-lock .auth0-lock-header-logo{
    display:none !important;
}
.auth0-lock.auth0-lock .auth0-lock-name{
  display: none !important;
}

/* overlay */
/* .auth0-lock.auth0-lock.auth0-lock-opened .auth0-lock-overlay{
  opacity: 0.6 !important;
}
.auth0-lock.auth0-lock .auth0-lock-overlay{
  background:#fff !important;
} */

.auth0-lock.auth0-lock.auth0-lock-opened .auth0-lock-widget{
  box-shadow: 0 10px 34px 0 rgba(7,93,108,.14) !important;
  border: 1px solid #01a796;
}
.auth0-lock.auth0-lock .auth0-lock-form{
  padding-top: 40px !important;
}
.auth0-lock.auth0-lock .auth0-lock-cred-pane-internal-wrapper{
  padding-bottom: 20px;
}
/* button close */
.auth0-lock.auth0-lock svg{
  width: 15px;
}

.auth0-lock.auth0-lock .auth0-lock-close-button,
.auth0-lock.auth0-lock .auth0-lock-back-button{
  box-shadow: inherit !important;
  top:5px !important;
  right: 10px !important ;
  background:none !important;
  border:none !important;
  margin: 16px;
}

.auth0-lock.auth0-lock .auth0-lock-submit{
  height: 50px;
  width: 196px !important;
  padding: 0 !important;
  margin: 0 auto;
  border:none !important;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  padding: 0;
  text-decoration: none;
  cursor: pointer;
  border:none;
  overflow: hidden !important;
  border-radius:5px !important;
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

  @media screen and (max-width: 480px) {
    margin-bottom: 16px
  }

}
`;
