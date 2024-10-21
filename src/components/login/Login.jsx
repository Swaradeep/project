import {
  Alert,
  Button,
  FormControl,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { doLogin, doSignUp } from "../../services/API";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { setUser } from "../../services/redux/slices/userSlice";
import { useDispatch } from "react-redux";

const Login = ({ page }) => {
  const [tab, setTab] = useState(page);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setErrorMessage] = useState("");

  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!email) {
      setErrorMessage("Email is required");
      return;
    } else if (!password) {
      setErrorMessage("Password is required");
      return;
    }

    // TODO: Hash the password before sending it to the server
    const data = {
      email,
      password,
    };

    doLogin(data)
      .then((data) => {
        console.log("Login successful", data);
        const { token, lastLogin } = data;
        localStorage.setItem("token", token);
        localStorage.setItem("lastLogin", lastLogin);
        dispatch(setUser(data));
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log("Login failed", error);
        setErrorMessage("Invalid username or password");
      });
  };

  const handleSignUp = () => {
    if (!newEmail) {
      setErrorMessage("Email is required");
      return;
    }
    if (!newPassword) {
      setErrorMessage("Password is required");
      return;
    }
    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    const data = {
      email: newEmail,
      password: newPassword,
    };

    doSignUp(data)
      .then((data) => {
        console.log("Signup successful", data);
        const { token, lastLogin } = data;
        localStorage.setItem("token", token);
        localStorage.setItem("lastLogin", lastLogin);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log("Signup failed", error);
        setErrorMessage("Signup failed", error);
      });
  };

  return (
    <div>
      <Tabs value={tab} onChange={(_, v) => setTab(v)} centered>
        <Tab label="Login" value="login" />
        <Tab label="Sign Up" value="signup" />
      </Tabs>
      {tab === "login" ? (
        <div id="login-form-root">
          <FormControl
            onChange={() => setErrorMessage("")}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              width: "90%",
              maxWidth: 400,
            }}
          >
            <h1>Login</h1>
            <TextField
              label="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              variant="outlined"
            />
            <TextField
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <Button
              onClick={handleSubmit}
              variant="contained"
              style={{ borderRadius: 24 }}
            >
              Login
            </Button>
            {message && (
              <Alert severity="error" style={{ borderRadius: 24 }}>
                {message}
              </Alert>
            )}
          </FormControl>
        </div>
      ) : (
        <div id="login-form-root">
          <FormControl
            onChange={() => setErrorMessage("")}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              width: "90%",
              maxWidth: 400,
            }}
          >
            <h1>Signup</h1>
            <TextField
              label="Email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <TextField
              label="Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <TextField
              label="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button onClick={handleSignUp} variant="contained">
              Sign Up
            </Button>
            {message && (
              <Alert severity="error" style={{ borderRadius: 24 }}>
                {message}
              </Alert>
            )}
          </FormControl>
        </div>
      )}
    </div>
  );
};

export default Login;
