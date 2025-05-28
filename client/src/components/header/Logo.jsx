import React from "react";
import { Link } from "react-router-dom";

const Logo = () => (
  <Link to="/" className="text-2xl font-extrabold text-primary">
    Career<span className="text-accent">Loop</span>
  </Link>
);

export default Logo;
