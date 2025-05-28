import React from "react";
import { NavLink } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Menu, LogOut } from "lucide-react";

const MobileMenu = ({ user, handleLogout }) => (
  <div className="relative block lg:hidden">
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-foreground">
          <Menu className="w-6 h-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        align="end"
        className="w-48 z-50 bg-popover text-popover-foreground border border-border"
      >
        <DropdownMenuItem asChild>
          <NavLink to="/" className="py-1.5 text-base">
            Home
          </NavLink>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <NavLink to="/jobs" className="py-1.5 text-base">
            All Jobs
          </NavLink>
        </DropdownMenuItem>
        {user.isAuthenticated && (
          <>
            <DropdownMenuItem asChild>
              <NavLink to="/application/me" className="py-1.5 text-base">
                My Applications
              </NavLink>
            </DropdownMenuItem>
            {user.role === "employer" && (
              <>
                <DropdownMenuItem asChild>
                  <NavLink to="/add-jobs" className="py-1.5 text-base">
                    Add Job
                  </NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <NavLink to="/my-jobs" className="py-1.5 text-base">
                    My Job Posts
                  </NavLink>
                </DropdownMenuItem>
              </>
            )}
            <DropdownMenuItem asChild>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 w-full text-destructive py-1.5 text-base"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);

export default MobileMenu;
