import React from "react";
import Button from "./Button";
import { PresentIcon } from "../icons";
import HeaderLink from "./HeaderLink";
import "./header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <img alt="logo" src="../../images/logo.png" />
          <p>The Eternal Sacred Order of The Cherubim & Seraphim</p>
        </ul>
        <ul>
          <li>
            <HeaderLink title="About us" href="/" />
          </li>
          <li>
            <HeaderLink title="About us" href="/" />
          </li>
          <li>
            <HeaderLink title="About us" href="/" />
          </li>
          <li>
            <HeaderLink title="About us" href="/" />
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
