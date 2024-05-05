import { myAxios } from "./helper";
/* NGO SIGNUP AND LOGIN*/
export const signup = (ngo) => {
  return myAxios
    .post("http://localhost:1212/api/v1/ngo/register", ngo)
    .then((response) => response.data);
};

export const login = (ngo) => {
  return myAxios
    .post("http://localhost:1212/api/v1/ngo/signin", ngo)
    .then((response) => response.data);
};

/* USER SIGNUP AND LOGIN */
export const userLogin = (user) => {
  return myAxios
    .post("http://localhost:8000/accounts/api/login/", user)
    .then((response) => response.data);
};

export const userSignup = (ngo) => {
  return myAxios
    .post("http://localhost:1212/api/v1/ngo/register", ngo)
    .then((response) => response.data);
};

/* VERIFICATION */
export const isVerified = (email) => {
  return myAxios.get("http://localhost:1212/api/v1/ngo/isEnabled", {
    params: { email },
  });
};
