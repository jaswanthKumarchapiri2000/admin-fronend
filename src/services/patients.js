// api.js

import axios from "axios";

const API = "http://localhost:8000/api";

class ApiService {
  getPatients() {
    return axios
      .get(`${API}/patients`)
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
    return axios
      .get(`${API}/doctors`)
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
    return axios
      .post(`${API}/doctor`, doctor)
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
    return axios
      .post(`${API}/activities`, activity)
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
    return axios
      .get(`${API}/activities`)
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
    return axios
      .post(`${API}/addquestion`, question)
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
