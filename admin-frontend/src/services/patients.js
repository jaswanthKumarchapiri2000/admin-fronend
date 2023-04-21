import axios from "axios";

const API = "https://1b10-119-161-98-68.ngrok-free.app";
let token = "";


class ApiService {
  constructor() {
    console.log(token)

    this.axiosInstance = axios.create({
      baseURL: API,
      headers: {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${token}`,
      },
    });
  }


  getPatients() {
    token=window.localStorage.getItem("token")
    console.log("token",token)
    return axios
      .get(`${API}/patients/get-all`,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
      })
  
      .then((response) => {
        console.log(response)
        if (response.status === 200) {
          return response.data;
        } else {
          throw new Error(
            `Failed to fetch patients. Status code: ${response.status}`
          );
        }
      })
      .catch((error) => {
        throw new Error(`Failed to fetch patients. ${error.message}`);
      });
  }

  getAdminId(email) {
    token=window.localStorage.getItem("token");
    console.log("inside getadminid")
    return axios.get(`${API}/users/${email}`,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
    }).then((response) => {
      console.log(response.data)
      const user = response.data.response.userId;
      return user;
    });
  }

  getDoctors() {
    token=window.localStorage.getItem("token");
    return axios
    .get(`${API}/doctors/get-all`, {
      headers: {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        } else {
          throw new Error(
            `Failed to fetch doctors. Status code: ${response.status}`
          );
        }
      })
      .catch((error) => {
        throw new Error(`Failed to fetch doctors. ${error.message}`);
      });
  }

  registerDoctor(doctor) {
    token=window.localStorage.getItem("token");
    return axios
      .post(`${API}/users/add`, doctor,{
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        } else {
          throw new Error(
            `Failed to register doctor. Status code: ${response.status}`
          );
        }
      })
      .catch((error) => {
        throw new Error(`Failed to register doctor. ${error.message}`);
      });
  }


  register_doctor_details(doctordetails) {
    token=window.localStorage.getItem("token");
    return axios
      .post(`${API}/admin/register-doctor`, doctordetails,{
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        } else {
          throw new Error(
            `Failed to register doctor. Status code: ${response.status}`
          );
        }
      })
      .catch((error) => {
        throw new Error(`Failed to register doctor. ${error.message}`);
      });
  }



  addActivity(activity) {
    console.log("inside add activity")
    return axios
      .post(`${API}/item/create`, activity,{
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        } else {
          throw new Error(
            `Failed to add activity. Status code: ${response.status}`
          );
        }
      })
      .catch((error) => {
        throw new Error(`Failed to add activity. ${error.message}`);
      });
  }

  getActivities() {
    return axios
      .get(`${API}/activities`,{
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          return response;
        } else {
          throw new Error(
            `Failed to fetch activities. Status code: ${response.status}`
          );
        }
      })
      .catch((error) => {
        throw new Error(`Failed to fetch activities. ${error.message}`);
      });
  }

  addQuestion(question) {
    console.log(question);
    return axios
      .post(`${API}/admin/add-question`, question,{
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        } else {
          throw new Error(
            `Failed to add question. Status code: ${response.status}`
          );
        }
      })
      .catch((error) => {
        throw new Error(`Failed to add question. ${error.message}`);
      });
  }
}

export default new ApiService();
