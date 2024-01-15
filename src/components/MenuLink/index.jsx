import {NavLink } from "react-router-dom";
import "./MenuLink.scss"
export default function MenuLink({children, to}) {
    return (
      <>
        <NavLink to={to}>
          {children}
        </NavLink>
      </>
    );
  }