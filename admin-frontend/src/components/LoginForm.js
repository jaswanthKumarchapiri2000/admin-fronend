import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Alert } from "@material-ui/lab";
import "./loginform.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  textField: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%", // modified to make the textfield span the full width
    },
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [email1, setemail] = useState("");
  const [password1, setpassword] = useState("");
  const [popupStyle, setPopupStyle] = useState("hide");

  const handleSubmit = async (event) => {
    console.log(email1);
    console.log(password1);
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://1b10-119-161-98-68.ngrok-free.app/auth/login",
      
        { email : email1,
           password :password1
           }
      );
      console.log(response.status);
      console.log(response);
      if (response.status === 200) {
        console.log("inside the fuction")
        localStorage.setItem("token", response.data.token); // added to store token in local storage
        localStorage.setItem("email", email1); // added to store email in local storage

        navigate("/analyse");
      } else {
        setPopupStyle("login-popup");
      }
    } catch (error) {
      setPopupStyle("login-popup");
    }
  };

  return (
    <div className="loginPage">
      <section className="vh-100 loginSection">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong">
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Login</h3>
                  <form onSubmit={handleSubmit} className={classes.textField}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      type="email"
                      value={email1}
                      onChange={(e) => setemail(e.target.value)}
                      autoCapitalize="none"
                      required
                    />

                    <TextField
                      label="Password"
                      variant="outlined"
                      type="password"
                      value={password1}
                      onChange={(e) => setpassword(e.target.value)}
                      autoCapitalize="none"
                      required
                    />

                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      size="medium"
                      className={classes.formControl}
                    >
                      Login
                    </Button>
                  </form>
                  {popupStyle === "login-popup" && (
                    <Alert severity="error" className={popupStyle}>
                      Invalid login credentials.
                    </Alert>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginForm;
