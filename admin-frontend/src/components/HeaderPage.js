import React from "react";
import {  useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
    color: "#000",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    marginLeft: "20px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  button: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

const handleLogout = () => {
  // clear the token from local storage
  localStorage.removeItem("token");

  // navigate to the login page
  window.location.href = "/";
};

const Jumpto = () => {
  window.location.href = "/homepage";

}

function HeaderPage() {
  const classes = useStyles();
  
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Better U Application
        </Typography>
        {localStorage.getItem("token") && (
          <>
            <Button color="inherit" className={classes.button}>
              Home
            </Button>
            <Button
              color="inherit"
              onClick={Jumpto}
              className={classes.button}
            >
              About
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={handleLogout}
              style={{ marginLeft: "10px" }}
            >
              Logout
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default HeaderPage;
