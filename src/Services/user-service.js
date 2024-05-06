import { myAxios } from "./helper";
/* NGO SIGNUP AND LOGIN*/
export const signup = (user) => {
  return myAxios
    .post("http://localhost:8000/accounts/api/register-organization/", user)
    .then((response) => response.data);
};

export const login = (user) => {
  return myAxios
    .post("http://localhost:8000/accounts/api/login-organization/", user)
    .then((response) => response.data);
};

/* USER SIGNUP AND LOGIN */
export const userLogin = (user) => {
  return myAxios
    .post("http://localhost:8000/accounts/api/login/", user)
    .then((response) => response.data);
};

export const userSignup = (user) => {
  return myAxios
    .post("http://localhost:8000/accounts/api/register-user/", user)
    .then((response) => response.data);
};

/* VERIFICATION */
export const isVerified = (email) => {
  return myAxios.get("http://localhost:8000/accounts/api/check-user-active/", {
    params: { email },
  });
};
