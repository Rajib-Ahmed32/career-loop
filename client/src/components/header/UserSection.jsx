import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import MobileMenu from "./MobileMenu";

const UserSection = ({ user, handleLogout }) => {
  if (!user.isAuthenticated) {
    return (
      <>
        <NavLink to="/login">
          <Button variant="outline" className="border-border text-foreground">
            Login
          </Button>
        </NavLink>
        <NavLink to="/register">
          <Button className="bg-primary text-primary-foreground">
            Register
          </Button>
        </NavLink>
      </>
    );
  }

  return (
    <>
      <div className="flex items-center gap-3">
        <Avatar className="w-9 h-9">
          <AvatarImage src={user.photoURL} alt="user" />
          <AvatarFallback className="bg-muted text-muted-foreground">
            {user.name[0]}
          </AvatarFallback>
        </Avatar>
        <span className="text-base font-semibold text-foreground">
          {user.name}
        </span>
        <Button
          className="hidden lg:flex items-center gap-1 bg-destructive text-destructive-foreground"
          onClick={handleLogout}
        >
          <span className="text-sm font-medium">Logout</span>
        </Button>
      </div>

      <MobileMenu user={user} handleLogout={handleLogout} />
    </>
  );
};

export default UserSection;
