import React from "react";
import LogoContainer from "./LogoContainer";
import Searchbox from "./Searchbox";
import NewButton from "./NewButton";

export default function Header() {
  return (
    <nav className="mt-4 mb-4">
      <div className="d-flex align-items-center justify-content-between">
        <LogoContainer />
        <Searchbox />
        <NewButton />
      </div>
    </nav>
  );
}
