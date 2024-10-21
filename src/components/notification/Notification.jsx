import { Alert, AlertTitle } from "@mui/material";
import React, { useEffect } from "react";

const Notification = ({ message }) => {
  const [open, setOpen] = React.useState(true);
  const [remove, setRemove] = React.useState(false);

  useEffect(() => {
    !open &&
      setTimeout(() => {
        setRemove(true);
      }, 500);
  }, [open]);

  return (
    !remove && (
      <Alert
        style={{
          margin: open ? 10 : 0,
          opacity: open ? 1 : 0,
          height: open ? "100%" : 0,
          justifyContent: "center",
          transition: "all 0.3s ease-in",
        }}
        onClose={() => setOpen(false)}
        severity="warning"
      >
        <AlertTitle>New Notification</AlertTitle>
        {message}
      </Alert>
    )
  );
};

export default Notification;
