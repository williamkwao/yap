import styled from 'styled-components'

export const YapHeader = styled.nav`
  background: transparent;
  margin-bottom: 1.45rem;
  display: flex;
  justify-content: space-between;
  padding: 26px 8px;

  h1 a {
    color: black;
    text-decoration: none;
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
      width: 198px;
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
      padding: 21px;
    }
  }
`
export const MobileNavDraw = styled.aside`
  right: 0;
  top: 0;
  background-color: #fcbc19;
  min-height: 100%;
  position: fixed;
  display: block;
  z-index: 1000;
  width: 0;
  overflow-x: hidden;
  transition: 0.5s;
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
  padding: '23px 18px 10px 5px',
  width: '270px',
}
