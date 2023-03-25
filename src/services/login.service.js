import axios from "axios"

const API_URL = "https://simple-nodejs-app-test.herokuapp.com/"

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.user) {
        localStorage.setItem("userToken", response.data.user.stsTokenManager.accessToken);
      }
      return response.data;
    },
    (error) => {
        console.log(error)
    })
};

const AuthService = {
  login
}

export default AuthService;