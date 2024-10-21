import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router";
import { createContext, useMemo, useState } from "react";
import Notification from "./components/notification/Notification";
import { List, ListItem } from "@mui/material";

const UserContext = createContext({});
const NotificationContext = createContext({});
const ThemeContext = createContext({});

function App() {
  const [user, setUser] = useState({});
  const [darkTheme, setTheme] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const colors = useMemo(
    () => ({
      primary: !darkTheme ? "#f5f5f5" : "#333",
      secondary: !darkTheme ? "#d5d5d5" : "#444",
      text: !darkTheme ? "#000" : "#fff",
    }),
    [darkTheme]
  );

  const addMotification = (message) => {
    console.log("Adding notification", message, notifications);
    setNotifications([...notifications, message]);
  };

  return (
    <ThemeContext.Provider value={{ colors, setTheme }}>
      <NotificationContext.Provider value={{ addMotification }}>
        <UserContext.Provider value={{ user, setUser }}>
          <div style={{ color: colors.text }}>
            <RouterProvider router={router} />
            <div
              style={{
                position: "absolute",
                right: 0,
                top: 120,
                width: "20%",
                height: "50%",
                overflow: "scroll",
              }}
            >
              <List>
                {notifications.map((message) => {
                  return (
                    <ListItem key={message} style={{ padding: 0, margin: 0 }}>
                      <Notification message={message} />
                    </ListItem>
                  );
                })}
              </List>
            </div>
          </div>
        </UserContext.Provider>
      </NotificationContext.Provider>
    </ThemeContext.Provider>
  );
}

export { UserContext, NotificationContext, ThemeContext };
export default App;
