import React from "react";
import Logo from "../header/Logo";
import DesktopNav from "../header/DesktopNav";
import UserSection from "../header/UserSection";

const user = {
  isAuthenticated: true,
  name: "Rajib",
  photoURL: "https://i.pravatar.cc/300",
  role: "employer",
};

const Header = () => {
  const handleLogout = () => {
    console.log("Logout logic goes here");
  };

  return (
    <header className="shadow-sm font-poppins border-b border-border bg-background">
      <div className="container min-h-[70px] md:min-h-[80px] mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <DesktopNav user={user} />
        <UserSection user={user} handleLogout={handleLogout} />
      </div>
    </header>
  );
};

export default Header;
