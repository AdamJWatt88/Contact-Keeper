import axios from "axios";

const setAuthToken = (token) => {
  //we're checking if a token has been provided and if it has then we're setting the header key of 'x-auth-token' to the value of the token being passed in to this function
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } //if there is no token sent then we are deleting the header of 'x-auth-token'
  else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
