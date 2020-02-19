import axios from "axios";

export const SESSION_SET = (state, response) => {
  state.user = response.data.user;
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${response.data.accessToken}`;
};
