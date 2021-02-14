import React from "react";
import styled from "styled-components";

const StayledHeader = styled.nav`
  & .nav-wrapper {
    background-color: #070e27 !important;
  }
`;

const Header: React.FC = () => {
  return (
    <StayledHeader>
      <nav className="nav-wrapper">
        <a href="#" className="brand-logo">
          Crehana
        </a>
      </nav>
    </StayledHeader>
  );
};

export default Header;
