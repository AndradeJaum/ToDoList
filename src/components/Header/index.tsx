import Logo from "../../images/Logo.svg";
import React from "react";

export default function Header() {
  return (
    <header className="bg-gray700 w-full py-20">
      <img src={Logo} className="m-auto"/>
    </header>
  );
}
