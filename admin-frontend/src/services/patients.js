import axios from "axios";

const API = "";

class service {
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
}

export default new service();
