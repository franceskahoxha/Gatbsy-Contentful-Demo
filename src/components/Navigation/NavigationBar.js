import React from "react";
import "./_navigation.scss";
function NavigationBar(props) {
  const { id, navTest, navLogo, navPages } = props;
  return (
    <nav role="navigation" className="container" aria-label="Main">
      <a href="https://www.npmjs.com/package/gatsby" className="logoLink">
        <img src={navLogo} alt="innvis" />
      </a>
      <ul className="navigation">
        <li className="navigationItem">
          <a
            href="https://www.npmjs.com/package/gatsby"
            activeClassName="active"
          >
            {navPages}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
