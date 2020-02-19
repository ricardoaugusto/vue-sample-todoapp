import axios from "axios";

export const register = ({ commit }, credentials) => {
  return new Promise((resolve, reject) => {
    axios
      .post("auth/register", credentials)
      .then(response => {
        commit("SESSION_SET", response.data);
        resolve(response);
      })
      .catch(err => {
        reject(err);
      });
  });
};
