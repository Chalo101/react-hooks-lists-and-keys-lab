import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    <a href ="#home" key={links}>{links}</a>
    </nav>;
}

export default NavBar;
