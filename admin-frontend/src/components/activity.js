import { useState, useEffect } from "react";
import { Input, Textarea, Button } from "@mantine/core";
import ApiService from "../services/patients";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRunning } from "@fortawesome/free-solid-svg-icons";
import "./activity.css";

function ActivityForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [adminId, setAdminId] = useState(0);
  const [email, setEmail] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

   
  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (!token){
      window.location.href = "/";
    }

    }, []);

  useEffect(() => {
    ApiService.getAdminId(email)
      .then((response) => {
        setAdminId(response);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [email]);

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    setEmail(storedEmail);
  }, []);

  useEffect(() => {
    if (name.trim() !== "" && description.trim() !== "") {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [name, description]);

  const handleSubmit = (e) => {
    e.preventDefault();
    ApiService.addActivity({
      type: "Activity",
      admin: {
        adminId: adminId,
      },
      activity: {
        name: name,
        description: description,
      },
    })
      .then(() => {
        window.location.href = "/analyse";
      })
      .catch((error) => {
        console.error(error.message);
        alert("Failed to add the activity. Please try again later.");
      });
  };

  return (
    <div className="activity-form-container m-5 mx-auto text-center" style={{marginTop: "5rem"}}>
      <div className="activity-form">
        <div className="activity-icon-container">
          <FontAwesomeIcon icon={faRunning} size="5x" color="#7B16FF" />
        </div>
        <h1 className="activity-title">Add an Activity</h1>
        <form onSubmit={handleSubmit}>
          <div className="activity-inputs-container">
            <Input
              label="Activity Name"
              placeholder="Enter activity name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="activity-input"
            />
            <Textarea
              label="Activity Description"
              placeholder="Enter activity description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="activity-input"
              style={{ resize: "none"}}
            />
            <Button
            type="submit"
            fullWidth
            className="activity-button btn btn-primary"
          >
            Add Activity
          </Button>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default ActivityForm;
