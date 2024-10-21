import { Switch } from "@mui/material";
import React, { useContext } from "react";
import { ThemeContext } from "../../App";

const Settings = () => {
  const { colors, setTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        padding: "8px 32px",
        backgroundColor: colors.secondary,
        color: colors.text,
        height: "100%",
      }}
    >
      <h2>User Preferenaces</h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h3>Dark Mode</h3>
        <Switch onChange={(e) => setTheme(e.target.checked)} />
      </div>
    </div>
  );
};

export default Settings;
