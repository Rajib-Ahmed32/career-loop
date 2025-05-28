import React from "react";
import { NavLink } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "../ui/navigation-menu";

const DesktopNav = ({ user }) => (
  <NavigationMenu className="hidden lg:block">
    <NavigationMenuList className="flex gap-6 text-base text-foreground font-medium">
      <NavigationMenuItem>
        <NavLink
          to="/"
          className="hover:text-primary transition-colors duration-200"
        >
          Home
        </NavLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavLink
          to="/jobs"
          className="hover:text-primary transition-colors duration-200"
        >
          All Jobs
        </NavLink>
      </NavigationMenuItem>
      {user.isAuthenticated && (
        <>
          <NavigationMenuItem>
            <NavLink
              to="/application/me"
              className="hover:text-primary transition-colors duration-200"
            >
              My Applications
            </NavLink>
          </NavigationMenuItem>
          {user.role === "employer" && (
            <>
              <NavigationMenuItem>
                <NavLink
                  to="/add-jobs"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Add Job
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink
                  to="/my-jobs"
                  className="hover:text-primary transition-colors duration-200"
                >
                  My Job Posts
                </NavLink>
              </NavigationMenuItem>
            </>
          )}
        </>
      )}
    </NavigationMenuList>
  </NavigationMenu>
);

export default DesktopNav;
