import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useContext } from "react";
import "./Header.scss";
import { ThemeContext } from "../../App";

const Header = ({ open, setOpen, title }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <div
      id="app-header"
      style={{
        backgroundColor: colors.primary,
        color: colors.text,
      }}
    >
      <Button id="menu-btn" onClick={() => setOpen(!open)}>
        <MenuIcon sx={{ color: colors.text }} />
      </Button>
      <h1>{title || "My Dashboard"}</h1>
    </div>
  );
};

export default Header;
