import { useState,useEffect } from "react";
import { Input, Textarea, Button, Paper, Grid, Col } from "@mantine/core";
import ApiService from "../services/patients";

function ActivityForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    ApiService.addActivity({
      type: "Activity",
      admin: {
        adminId: 1
      },
      activity: {
        name: name,
        description: description,
      }
    })
      .then(() => {
        window.location.href = "/analyze";
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <Grid
      style={{ marginTop: "50px"  ,width:"20 px" }}
      cols={[{ xs: 12, sm: 8, md: 6, lg: 4, xl: 3 }]}
      justify="center"
    >
      <Col>
        <Paper padding="lg" shadow="lg">
          <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
            Add an Activity
          </h1>
          <form onSubmit={handleSubmit}>
            <Textarea
              label="Activity Name"
              placeholder="Enter activity name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ marginBottom: "20px" }}
            />
            <Textarea
              label="Activity Description"
              placeholder="Enter activity description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ marginBottom: "20px", width: "100%", resize: "none" }}
              // size="lg"
            />
            <Button
              type="submit"
              fullWidth
              variant="gradient"
              color="purple"
            >
              Add Activity
            </Button>
          </form>
        </Paper>
      </Col>
    </Grid>
  );
}

export default ActivityForm;
