import React, { useState, useEffect } from "react";
import { Button, TextInput, Select, Group } from "@mantine/core";
import service from "../services/patients";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(0);
  const [experience, setExpereince] = useState("");
  const [gender, setGender] = useState("");
  const [qualification, setQualification] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [doctorId, setDoctorId] = useState();
  const [adminId, setAdminId] = useState(0);
  const [admin_email, setAdminEmail] = useState("default email");


  
  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (!token){

      window.location.href = "/";

    }

    }, []);

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    console.log("stored email from LS = " + storedEmail);
    setAdminEmail(storedEmail);
    
    async function fetchData() {
      const response = await service.getAdminId(storedEmail);
      console.log(response);
      setAdminId(response);
    }
  
    fetchData();
    console.log(admin_email);
  }, []);
  


  // useEffect(() => {
  //   const storedEmail = localStorage.getItem("email");
  //   console.log("stored email from LS = " + storedEmail);
  //   setAdminEmail(storedEmail);
    

  //   async function fetchData() {
  //     const response = await service.getAdminId(admin_email);
  //     console.log(response);
  //     setAdminId(response);
  //   }

  //   fetchData();
  //   console.log(admin_email);
  // }, []);

  //   useEffect(() => {
  //     const sessionUser = window.localStorage.getItem('token')
  //     if (!sessionUser){
  //       window.location.href = "/";

  //     }

  //     }, []);

  async function handleSubmit(e) {
    console.log(adminId)
    let temp = dob.toString();
    temp = temp.slice(8, 10) + "/" + temp.slice(5, 7) + "/" + temp.slice(0, 4);
    setDob(temp);
    console.log(dob);
    e.preventDefault();
    const doctordemo = {
      email: email,
      password: password,
      userRole: {
        roleId: 2,
      },
      demographics: {
        userId: 0,
        firstName: firstName,
        lastName: lastName,
        dob: temp,
        age: age,
        gender: gender,
      },
    };

    console.log(doctordemo)

    const response = await service.registerDoctor(doctordemo)
    let doctor_id= response.userId
    
    console.log(response.userId)
    setDoctorId(response.userId);
    console.log(doctorId);
    
      const doctordetails = {
        doctorId: doctor_id,
        admin: {
          adminId: adminId,
        },
        doctorDetails: {
          doctorDetailsId: 0,
         
          experience: parseInt(experience),
          qualification: qualification,
          specialization: specialization,
        },
      };
      console.log(doctordetails);
      const resp = service.register_doctor_details(doctordetails)
        window.location.href = "/analyse";
      

    


  }


  return (
    <div className="activity-form-container m-5 mx-auto text-center" style={{marginTop: "5rem"}}>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // marginTop: "2rem",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Register the Doctor
      </h2>
      <form onSubmit={handleSubmit} style={{ width: "25rem" }}>
        <Group position="center">
          <TextInput
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginRight: "1rem" }}
          />
          <TextInput
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </Group>

        <Group position="center" style={{ marginTop: "1rem" }}>
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

        <Group position="center" style={{ marginTop: "1rem" }}>
          <TextInput
            required
            type="date"
            placeholder=""
            label=""
            value={dob}
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
            style={{ marginLeft: "0.9rem", width: "11.5rem" }}
          />
        </Group>

        <Group position="center" style={{ marginTop: "1rem" }}>
          {/* <TextInput
              required
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              min={1}
              max={150}
              style={{ marginTop:"1.8rem" ,width: "11.5rem"}}
            /> */}

          <Select
            required
            label="Sex"
            placeholder="Select"
            data={[
              { value: "M", label: "Male" },
              { value: "F", label: "Female" },
              { value: "O", label: "Other" },
            ]}
            value={gender}
            onChange={(value) => setGender(value)}
            style={{ marginLeft: "1rem", marginRight: "0rem" }}
          />
        </Group>

        <Group position="center" style={{ marginTop: "1.5rem" }}>
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
    </div>
  );
};
export default Registration;
