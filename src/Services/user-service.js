import { myAxios } from "./helper";
/* NGO SIGNUP AND LOGIN*/
export const signup = (ngo) => {
  return myAxios
    .post("http://localhost:1212/api/v1/ngo/register", ngo)
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
