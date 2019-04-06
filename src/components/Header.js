import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <h1>Expensify</h1>
    <NavLink to="/" exact={true} activeClassName="is-active">
      Home
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Create Expense
    </NavLink>
  </div>
);

export default Header;
