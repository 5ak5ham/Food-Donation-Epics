import { myAxios } from "./helper";

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

export const isVerified = (email) => {
  return myAxios.get("http://localhost:1212/api/v1/ngo/isEnabled", {
    params: { email },
  });
};
