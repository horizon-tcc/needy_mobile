import React from "react";
import axios from "axios";

export const logIn = (email, senha) => {
  var result;

  return new Promise((resolve) => {
    axios({
      url: "http://needy-api.herokuapp.com/login",
      method: "POST",
      data: {
        email: email.toString(),
        senha: senha.toString(),
      },
    })
      .then((response) => {
        console.log(response.data.token);
        result = response.data.token;
        resolve(result);
      })
      .then((error) => {
        resolve(null);
      });
  });
};

export const getUser = (token) => {
  var user;
  return new Promise((resolve) => {
    axios({
      url: "http://needy-api.herokuapp.com/doador",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        user = response.data;
        resolve(user);
      })
      .then((error) => {
        console.log(error);
        resolve(null);
      });
  });
};
