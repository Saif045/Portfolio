import React from "react";
import { MobileHeader } from "./MobileHeader";
import { DesktopHeader } from "./DesktopHeader";

const Header = () => {
  return (
    <div>
      <MobileHeader />
      <DesktopHeader />
    </div>
  );
};

export default Header;
