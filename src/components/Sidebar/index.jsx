import React from "react";
import { AiOutlineMenu, AiOutlineHome } from "react-icons/ai";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { NavWrapper } from "./styled";

const Sidebar = () => {
  return (
    <NavWrapper>
      <AiOutlineMenu />
      <ul>
        <li>
          <a href="/">
            <AiOutlineHome />
            <p>Home</p>
          </a>
        </li>
        <li>
          <a href="/">
            <BsFillFileEarmarkPersonFill />
            <p>About</p>
          </a>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Sidebar;
