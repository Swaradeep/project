import React, { useContext } from "react";
import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Header from "../header/Header";
import PersonIcon from "@mui/icons-material/Person";
import logo from "../../assets/logo.png";
import SettingsIcon from "@mui/icons-material/Settings";
import logo_mini from "../../assets/logo-mini.png";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Navigation.css";
import { ThemeContext } from "../../App";

const drawerItems = [
  { name: "Dashboard", icon: <HomeIcon />, path: "/dashboard" },
  { name: "Profile", icon: <PersonIcon />, path: "/profile" },
  { name: "Settings", icon: <SettingsIcon />, path: "/settings" },
  { name: "Logout", icon: <LogoutIcon />, path: "/logout" },
];

const Navigator = (props) => {
  const [open, setOpen] = React.useState(true);
  const { colors } = useContext(ThemeContext);

  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <div
        id="app-navigator"
        style={{
          backgroundColor: colors.primary,
          width: open ? "250px" : "64px",
        }}
      >
        <List style={{ width: "100%" }}>
          <div
            style={{
              fontSize: "24px",
              height: "70px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "10px",
            }}
          >
            <img src={open ? logo : logo_mini} height={"70%"} alt="Logo" />
          </div>
          <Divider />
          {drawerItems.map((item) => (
            <ListItemButton key={item.name} onClick={() => navigate(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </div>
      <div style={{ width: "100%" }}>
        <Header setOpen={setOpen} open={open} />
        {props.children}
      </div>
    </div>
  );
};

export default Navigator;
