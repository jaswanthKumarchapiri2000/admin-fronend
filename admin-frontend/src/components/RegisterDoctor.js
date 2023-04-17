import React, { useState ,useEffect} from "react";
import { Button, TextInput, Select,Group } from "@mantine/core";
import service from "../services/patients";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [experience, setExpereince] = useState("");
  const [sex, setSex] = useState("");
  const [qualification, setQualification] = useState("");
  const [specialization, setSpecialization] = useState("");


//   useEffect(() => {
//     const sessionUser = window.localStorage.getItem('token')
//     if (!sessionUser){
//       window.location.href = "/";

//     }

//     }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const doctor = {
      firstName: firstName,
      lastName: lastName,
      experience:experience,
      dob: dob,
      sex: sex,
      qualification: qualification,
      specialization: specialization,
    };




    service.registerDoctor(doctor)
      .then(() => {
        window.location.href = "/analyse";
      })
      .catch((error) => {
        console.log(error.message);
        alert("Failed to register doctor. Please try again later.");
      });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Register a Doctor</h2>
      <form onSubmit={handleSubmit} style={{ width: "25rem" }}>
        <Group position="center">
          <TextInput
            required
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{ marginRight: "1rem" }}
          />
          <TextInput
            required
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Group>

        <Group position="center" style={{ marginTop: "1rem"  }}>

          <TextInput
            required
            type="date"
            placeholder=""
            value= {dob}
            onChange={(e) => setDob(e.target.value)}
            min={1}
            max={150}
            style={{ width: "11.5rem" }}
          />

         <TextInput
            required
            type="number"
            placeholder="experience"
            value={experience}
            onChange={(e) => setExpereince(e.target.value)}
            min={1}
            max={150}
            style={{ marginLeft: "0.9rem" , width: "11.5rem"}}
          />
        </Group>
        <Group position="center" style={{ marginTop: "1rem" }}>
          <Select
            required
            label="Sex"
            placeholder="Select"
            data={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "other", label: "Other" },
            ]}
            value={sex}
            onChange={(value) => setSex(value)}
            style={{ marginLeft: "1rem", marginRight: "1rem" }}
          />
          </Group>
        <Group position="center" style={{ marginTop: "1rem" }}>
          <TextInput
            required
            placeholder="Qualification"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            style={{ marginRight: "1rem" }}
          />
          <TextInput
            required
            placeholder="Specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
          />
        </Group>
        <Button
          type="submit"
          // variant="outline"
          color="blue"
          fullWidth
          placeholder="Register"

          style={{ marginTop: "2rem" }}
          >
            Register
          </Button>
          </form>
          </div>
  );
          };
export default Registration;
      
