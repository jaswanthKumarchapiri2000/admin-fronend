import { useState, useEffect } from "react";
import { Button, Paper, Grid, Col, Select, Input, Textarea } from "@mantine/core";
import ApiService from "../services/patients";

function QuestionForm() {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [activity, setActivity] = useState(0);
  const [activities, setActivities] = useState([]);

  // useEffect(() => {
  //   ApiService.getActivities()
  //     .then((response) => {
  //       setActivities(response.data.response);
  //     })
  //     .catch((error) => {
  //       console.error(error.message);
  //     });
  // }, []);

  const handleChange = (event) => {
    setActivity(event.target.value);
  };

  useEffect(() => {
    // Dummy data
    const dummyData = [
      {  activityId: 6,
        name: "Self Evaluation : Anxiety",
        description: "Questionnaire exercise to evaluate traits of anxiety.",
      },
      {activityId: 7,
      name: "Sleeping Habits",
      description: "Questionnaire exercise to evaluate sleeping habits",
    },
    {activityId: 8,
      name: "Depression",
      description: "Questionnaire exercise to learn about depression",
     },
    ];
    setActivities(dummyData);
  }, []);
   
  // useEffect(()=> {
  //   console.log(activity)
  //   console.log(activities)




  // },[activity,activities]
  // );

  console.log(activity)

  const handleSubmit = (e) => {
    e.preventDefault();

    const newQuestion = {
      question: question,
      options: {
        1: option1,
        2: option2,
        3: option3,
        4: option4,
      },
      activity: {
        activityId: activity,
      },
    };
     
 
    ApiService.addQuestion(newQuestion)
      .then(() => {
        window.location.href = "/analyze";
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <Grid
      style={{ marginTop: "50px", maxWidth: "600px", margin: "0 auto" }}
      cols={[{ xs: 12, sm: 8, md: 6, lg: 4, xl: 3 }]}
      justify="center"
    >
      <Col>
        <Paper padding="lg" shadow="lg">
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
            Add Question
          </h1>
          <form onSubmit={handleSubmit}>
            <Textarea
              label="Question"
              placeholder="Enter your question"
              required
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              style={{ marginBottom: "20px" }}
              size="lg"
            />
            <Input
              label="Option 1"
              placeholder="Enter option 1"
              required
              value={option1}
              onChange={(e) => setOption1(e.target.value)}
              style={{ marginBottom: "10px" }}
              size="lg"
            />
            <Input
              label="Option 2"
              placeholder="Enter option 2"
              required
              value={option2}
              onChange={(e) => setOption2(e.target.value)}
              style={{ marginBottom: "10px" }}
              size="lg"
            />
            <Input
              label="Option 3"
              placeholder="Enter option 3"
              required
              value={option3}
              onChange={(e) => setOption3(e.target.value)}
              style={{ marginBottom: "10px" }}
              size="lg"
            />
            <Input
              label="Option 4"
              placeholder="Enter option 4"
              required
              value={option4}
              onChange={(e) => setOption4(e.target.value)}
              style={{ marginBottom: "10px" }}
              size="lg"
            />
            {/* { 
            (activities !== undefined) && 
            <Select 
            label="Activity"
            placeholder="Select activity"
            size="lg"
            required
            data={activities.map((activity) => {
              return {
                value: JSON.stringify(activity.activityId),
                label: activity.name,
              };
            })}
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            style={{ marginBottom: "20px" }}
          />
            } */}
            

          <select value={activity} 
          style={{ marginBottom: "10px" ,width :"100%", padding: "10px",borderWidth: "0.1px !important"}}

           onChange={(e) => setActivity(e.target.value)}>
           <option value="0" disabled>Select an activity</option>
           {activities.map((activity) => (
              <option key={activity.activityId} value={activity.activityId}
              style={{borderWidth: "0.1px !important"}}
              >
                {activity.name}
              </option>
            ))}

          </select> 


            <Button type="submit" fullWidth variant="gradient" color="purple">
              Add Question
            </Button>
          </form>
        </Paper>
      </Col>
    </Grid>
  );
// console.log(activity)
            };
        
export default QuestionForm;

