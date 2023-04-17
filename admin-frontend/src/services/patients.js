import axios from "axios";

const API = "http://localhost:8000/api";

class ApiService {
  constructor() {
    const token = window.localStorage.getItem("token");

    this.axiosInstance = axios.create({
      baseURL: API,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getPatients() {
    return this.axiosInstance
      .get("/patients")
      .then((response) => {
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

  getDoctors() {
    return this.axiosInstance
      .get("/doctors")
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
    return this.axiosInstance
      .post("/doctor", doctor)
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
    return this.axiosInstance
      .post("/activities", activity)
      .then((response) => {
        if (response.status === 201) {
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
    return this.axiosInstance
      .get("/activities")
      .then((response) => {
        if (response.status === 200) {
          return response.data;
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
    return this.axiosInstance
      .post("/addquestion", question)
      .then((response) => {
        if (response.status === 201) {
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
