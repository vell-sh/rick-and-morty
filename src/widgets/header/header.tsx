import { LogoIcon, LightThemeIcon } from "@icons";

import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper container">
        <a className="header__logo" href="#">
          <LogoIcon />
        </a>
        <div className="header__button-wrapper">
          <button disabled className="header__button">
            <LightThemeIcon />
          </button>
          <button disabled className="header__button">
            <span className="header__lang">РУ</span>
          </button>
        </div>
      </div>
    </header>
  );
};
