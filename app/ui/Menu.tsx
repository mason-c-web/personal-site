"use client";
import Data from "./data";
import { MenuItem } from "./MenuItem";

export function Menu() {
  const getMenuItems = Data.userData.map((item, index) => {
    return <MenuItem title={item.title} index={index} />;
  });

  return (
    <div className="navbar bg-base-100  custom-menu">
      {/* menu for moblie screens */}
      <div className="navbar-start" />

      {/* menu for desktop screens */}

      <div className="navbar-center  lg:flex">
        <ul className="menu menu-horizontal px-1">{getMenuItems}</ul>
      </div>
      <div className="navbar-end" />
    </div>
  );
}
