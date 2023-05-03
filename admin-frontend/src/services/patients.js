import axios from "axios";

const API = "https://b717-103-156-19-229.ngrok-free.app";
let token = "";


class ApiService {
  constructor() {
    console.log(token)

    this.axiosInstance = axios.create({
      baseURL: API,
      headers: {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${token}`,
        'ngrok-skip-browser-warning': true,
      },
    });
  }


  async getPatients() {
    token=window.localStorage.getItem("token")
    console.log("token",token)
    return await axios
      .get(`${API}/patients/get-all`,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'ngrok-skip-browser-warning': true,
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

  async getAdminId(email) {
    console.log(email)
    token=window.localStorage.getItem("token")
    console.log("inside getadminid")
    return await axios.get(`${API}/users/${email}`,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'ngrok-skip-browser-warning': true,
    }
    }).then((response) => {
      console.log(response.data)
      const user = response.data.userId;
      return user;
    });
  }

  async getDoctors() {
    token=window.localStorage.getItem("token")
    console.log("token",token)
    return await axios
    .get(`${API}/doctors/get-all`, {
      headers: {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${token}`,
        'ngrok-skip-browser-warning': true,
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

  async registerDoctor(doctor) {
    token=window.localStorage.getItem("token")
    console.log(doctor)
    console.log(token);
    try {
      console.log(`${API}/users/add`);
        const response = await axios.post(`${API}/users/add`, doctor,{maxRedirects: 0,
          headers: {
            'Content-Type': "application/json",
            'Authorization': `Bearer ${token}`,
            'ngrok-skip-browser-warning': true
          }});
        console.log(response);
        return response.data;
      } catch (error) {
        console.error(error);
  }
    // const response = await axios
    //   .post(`${API}/users/add`, doctor,{
    //     headers: {
    //       'Content-Type': "application/json",
    //       'Authorization': `Bearer ${token}`,
    //       'ngrok-skip-browser-warning': true,
    //     },
    //   })
    //   .then((response) => { 
    //     if (response.status === 200) {
    //       console.log(response)
    //       return response.data;
    //     } else {
    //       throw new Error(
    //         `Failed to add doctors. Status code: ${response.status}`
    //       );
    //     }
    //   })
    //   .catch((error) => {
    //     throw new Error(`Failed to add doctors. ${error.message}`);
    //   });
       }
  


  async register_doctor_details(doctordetails) {
    token=window.localStorage.getItem("token")
    console.log("token",token)
    try{
    const response = await axios
      .post(`${API}/admin/register-doctor`, doctordetails,{
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Bearer ${token}`,
          'ngrok-skip-browser-warning': true,
        },
      })
      return response
    }
      catch(error){
        console.error(error);
      }
  }



  async addActivity(activity) {    
    token=window.localStorage.getItem("token")
    console.log("activity")
    return await axios
      .post(`${API}/item/create`, activity,{
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Bearer ${token}`,
          'ngrok-skip-browser-warning': true,
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

  async getActivities() {
    token=window.localStorage.getItem("token")
    console.log("token",token)
    return await axios
      .get(`${API}/activities`,{
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Bearer ${token}`,
          'ngrok-skip-browser-warning': true,
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

  async addQuestion(question) {
    token=window.localStorage.getItem("token");
    console.log(question);
    return await axios
      .post(`${API}/admin/add-question`, question,{
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Bearer ${token}`,
          'ngrok-skip-browser-warning': true,
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
