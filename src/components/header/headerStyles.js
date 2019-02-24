import styled from 'styled-components'

export const YapHeader = styled.nav`
  background: transparent;
  margin-bottom: 0.2rem;
  display: flex;
  justify-content: space-between;
  padding: 26px 8px;

  h1 a {
    color: #000;
    text-decoration: none;
  }

  a {
    color: #000;
  }
  #logo {
    width: 140px;
    margin-bottom: 0px;
  }

  li,
  ul {
    display: none;
    vertical-align: middle;
  }

  #nav-toggle {
    width: 32px;
    margin: auto 10px;
  }

  #mobile-nav-draw {
    position: fixed;
    right: 0;
    background-color: #fcbc19;
    min-height: 100%;
    li {
      display: block;
    }
  }

  /* Dextop Styles */
  @media (min-width: 992px) {
    #logo {
      width: 170px;
    }
    #nav-toggle {
      display: none;
    }
    li,
    ul {
      display: inline-block;
      vertical-align: middle;
    }
    ul {
      margin: auto;
      margin-right: 10px;
    }
    li {
      font-weight: bold;
      :hover {
        color: #fcbc19;
        text-decoration: underline;
        cursor: pointer;
      }
      padding: 21px;
    }
    a li {
    }
  }
`
export const MobileNavDraw = styled.aside`
  right: 0;
  top: 0;
  background-color: #fcbc19;
  position: fixed;
  visibility: hidden;
  z-index: 1000;
  width: 0;
  height: 0px;
  min-height: 0px;
  overflow-x: hidden;
  transition: padding 5s ease-out;
  transition: 0.5s;
  border-bottom-left-radius: 410px;
  border-top-left-radius: 10px;
  padding-bottom: 100px !important;
  padding-right: 0px;
  /* padding: 23px 18px 10px 5px; */
  .social-icons {
    text-align: right;
    .logo-div {
      svg {
        :hover path {
          fill: #fff !important;
        }
      }
    }
  }

  button {
    :focus {
      border: none;
      outline: 0;
    }

    background: none;
    border: none;
    img {
      width: 30px;
      margin: 0px;
    }
  }

  li {
    text-align: right;
    display: block;
    font-size: 20px;
    margin-bottom: 25px;

    :hover {
      color: #fff;
    }
  }

  @media (min-width: 992px) {
    display: none;
  }
`
export const NoStyleButton = styled.button`
  :focus {
    border: none;
    outline: 0;
  }

  background: none;
  border: none;
`
export const openDrawerStyle = {
  width: '355px',
  minHeight: '75%',
  paddingRight: '18px',
  visibility: 'visible',
}
