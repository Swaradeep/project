import React, { useContext } from "react";
import { NotificationContext, ThemeContext } from "../../App";
import "./Dashboard.css";
import Connections from "../Connections/Connections";
import socket from "../../services/socket";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { addMotification } = useContext(NotificationContext);
  const { colors } = useContext(ThemeContext);
  const user = useSelector((state) => state.user);

  socket.onmessage = (event) => {
    addMotification(event.data);
  };

  return (
    <div
      className="dash-root"
      style={{
        color: colors.text,
        backgroundColor: colors.secondary,
      }}
    >
      <div id="last-login">
        Last Logged in at: {new Date(user.last_login).toString()}
      </div>
      <h1>Welcome {user.email}</h1>
      <Connections />
    </div>
  );
};

export default Dashboard;
