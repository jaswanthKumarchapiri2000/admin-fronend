import { FaUserMd, FaUserAlt } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import service from "../services/patients"

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

  const handleLogout = () => {
    // clear the token from local storage
    localStorage.removeItem("token");

    // navigate to the login page
    window.location.href = "/";
  }

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>Dashboard</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
            <CardContent>
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
          <Card className={classes.card}>
            <CardContent>
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
        <Button variant="contained" color="secondary" size="large" onClick={handleLogout} style={{ marginLeft: '10px' }}>
          Logout
        </Button>
        <Button component={Link} to="/question" variant="contained" color="primary" size="large" style={{ marginLeft: '10px' }}>
          Add Question
        </Button>
      </div>
    </div>
  );
};

export default Analyse;
