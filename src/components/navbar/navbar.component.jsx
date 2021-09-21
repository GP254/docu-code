import React from "react";
import Link from "next/link";

import { StyledNavbar, Logo } from "./navbar.styles";

const constants = {
  LOGO_NAME: "DocuCode"
};

const NavbarComponent = () => (
  <StyledNavbar>
    <Link href="/">
      <Logo>{constants.LOGO_NAME}</Logo>
    </Link>
  </StyledNavbar>
);

export default NavbarComponent;
