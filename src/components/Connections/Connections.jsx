import React, { useEffect, useState } from "react";
import {
  createConnection,
  getConnections,
  getRecomendedConnections,
} from "../../services/API";
import {
  Button,
  List,
  ListItem,
  ListItemAvatar,
  SpeedDialIcon,
} from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import avatar from "../../assets/avatar.png";
import "./Connections.scss";
import { useSelector } from "react-redux";

const Connections = () => {
  const user = useSelector((state) => state.user);
  const [connections, setConnections] = useState([]);
  const [recomendations, setRecomendations] = useState([]);

  useEffect(() => {
    getConnectionList();
    getConnectionRecommendations();
  }, []);

  const getConnectionList = async () => {
    try {
      const data = await getConnections(user.email);
      setConnections(data);
    } catch (error) {
      console.log("Error getting connections", error);
    }
  };

  const getConnectionRecommendations = async () => {
    try {
      const data = await getRecomendedConnections(user.email);
      setRecomendations(data);
    } catch (error) {
      console.log("Error getting connections", error);
    }
  };

  const handleAddConnection = async (email) => {
    console.log("Adding connection", email);
    try {
      const data = await createConnection({
        email: user.email,
        connectionEmail: email,
      });
      console.log("Connection added", data);
      setConnections([...connections, data]);
    } catch (error) {
      console.log("Error adding connection", error);
    }
  };

  return (
    <div>
      <h2>Friends</h2>
      <List id="list-root">
        {connections.map((u) => (
          <ListItem key={u.id} className="con-item">
            <ListItemAvatar className="con-item-avatar">
              <img
                width={64}
                src={u.photo_url || avatar}
                alt={u.fname || u.email}
              />
            </ListItemAvatar>
            <div className="con-item-name">{u.fname || u.email}</div>
            <MessageIcon color="white" />
          </ListItem>
        ))}
      </List>
      <h2>Recomendations</h2>
      <List id="list-root">
        {recomendations.map((u) => (
          <ListItem key={u.id} className="rec-item">
            <ListItemAvatar className="rec-item-avatar">
              <img
                width={64}
                src={u.photo_url || avatar}
                alt={u.fname || u.email}
              />
            </ListItemAvatar>
            <div className="rec-item-name">{u.fname || u.email}</div>
            <Button
              className="rec-item-add"
              onClick={() => handleAddConnection(u.email)}
            >
              <SpeedDialIcon /> Add
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Connections;
