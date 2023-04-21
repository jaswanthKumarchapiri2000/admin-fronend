import React, { useState ,useEffect} from "react";
import { Button, TextInput, Select,Group } from "@mantine/core";
import service from "../services/patients";

const Registration = () => {
  const [email, setEmail] =useState("");
  const [password,setpassword] =useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] =useState(0);
  const [experience, setExpereince] = useState("");
  const [gender, setGender] = useState("");
  const [qualification, setQualification] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [doctorId, setDoctorId] =useState("") ;
  const [adminId, setAdminId] = useState(0);
  const [admin_email, setAdminEmail] = useState("");


  useEffect(() => {
    service.getAdminId(admin_email)
      .then((response) => {
        setAdminId(response);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [admin_email]);

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    setAdminEmail(storedEmail);
    console.log(admin_email);
  }, []);


//   useEffect(() => {
//     const sessionUser = window.localStorage.getItem('token')
//     if (!sessionUser){
//       window.location.href = "/";

//     }

//     }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const doctordemo = {
      email : email,
      password : password,
      userRole : {
        roleId : 3
      },
      demographics : {
        userId : 0,
        firstName: firstName,
        lastName: lastName,
        // experience:experience,
        dob: dob,
        age: age,
        gender: gender,
        // qualification: qualification,
        // specialization: specialization,
    }
  };


    service.registerDoctor(doctordemo)
      .then((response) => {
        setDoctorId(response.userId)
        window.location.href = "/analyse";
      })
      .catch((error) => {
        console.log(error.message);
        alert("Failed to register doctor. Please try again later.");
      });


      const doctordetails = {
        doctorId : doctorId,
        admin : {
          adminId : adminId
        },
        doctorDetails : {
          doctorDetailsId : 0,
          experience:experience,
          qualification: qualification,
          specialization: specialization,
      }
    };


    service.register_doctor_details(doctordetails)
      .then(() => {
        window.location.href = "/analyse";
      })
      .catch((error) => {
        console.error(error.message);
        alert("Failed to add the Doctor. Please try again later.");

      });




  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Register the Doctor</h2>
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


        <Group position="center"  style={{ marginTop: "1rem"  }}>
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
            style={{ marginLeft: "1rem", marginRight: "0rem"}}
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
  );
          };
export default Registration;
      
