import { FaUserMd, FaUserAlt } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import service from "../services/patients"
import Badge from "@material-ui/core/Badge";
import './analyse.css';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));

const Analyse = () => {
  const classes = useStyles();
  const [numPatients, setNumPatients] = useState(0);
  const [numDoctors, setNumDoctors] = useState(0);

   
  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (!token){

      window.location.href = "/";

    }

    }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const patientsResponse = await service.getPatients();
        const doctorsResponse = await service.getDoctors();

        setNumPatients(patientsResponse.length);
        setNumDoctors(doctorsResponse.length);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

//   useEffect(() => {
//     const sessionUser = window.localStorage.getItem('token')
//     if (!sessionUser){
//       window.location.href = "/";

//     }

//     }, []);

  // const handleLogout = () => {
  //   // clear the token from local storage
  //   localStorage.removeItem("token");

  //   // navigate to the login page
  //   window.location.href = "/";
  // }

  return (
    <div className={classes.root} >
      {/* <Typography variant="h3" gutterBottom>Dashboard</Typography> */}
      <h4 className="h4 my-3 text-center text-primary">Admin Dashboard</h4>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Card className="card p-5 shadow-sm myCard">
            <Badge badgeContent={"Patient's"} color="primary">
                {""}
              </Badge>
            <CardContent className='my-3'>
              <Typography variant="h5" component="h2" gutterBottom>
                Number of Patients Registered
              </Typography>
              <Typography variant="h3" component="h3">
                {numPatients}
              </Typography>
            </CardContent>
            <div>
              <FaUserAlt size={64} color="#6c757d" />
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className="card p-5 shadow-sm myCard">
          <Badge badgeContent={"Doctor's"} color="primary">
                {""}
              </Badge>
            <CardContent  className='my-3'>
              <Typography variant="h5" component="h2" gutterBottom>
                Number of Doctors
              </Typography>
              <Typography variant="h3" component="h3">
                {numDoctors}
              </Typography>
            </CardContent>
            <div>
              <FaUserMd size={64} color="#6c757d" />
            </div>
          </Card>
        </Grid>
      </Grid>
      <div className="d-flex justify-content-center mt-5">
        <Button component={Link} to="/activity" variant="contained" color="primary" size="large">
          Add Activity
        </Button>
        
        <Button component={Link} to="/question" variant="contained" color="primary" size="large" style={{ marginLeft: '10px' }}>
          Add Question
        </Button>

        <Button component={Link} to="/register" variant="contained" color="primary" size="large" style={{ marginLeft: '10px' }}>
          Add Doctor
        </Button>

        {/* <Button variant="contained" color="secondary" size="large" onClick={handleLogout} style={{ marginLeft: '10px' }}>
          Logout
        </Button> */}

      
      </div>
    </div>
  );
};

export default Analyse;
