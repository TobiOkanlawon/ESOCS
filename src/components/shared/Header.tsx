import React from "react";
import Button from "./Button";
import { PresentIcon } from "../icons";
import Link from "./HeaderLink";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <img alt="Logo" src="../images/logo.png" />
          <p>The Eternal Sacred Order of The Cherubim & Seraphim</p>
        </ul>
        <ul>
          <li>
            <Link title="About us" href="" />
          </li>
          <li>
            <Link title="About us" href="" />
          </li>
          <li>
            <Link title="About us" href="" />
          </li>
          <li>
            <Link title="About us" href="" />
          </li>
          <li id="header-link-special">
            <Button
              logo={<PresentIcon />}
              title="Giving"
              logoPosition="left"
              size="sm"
              type="primary"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
