import React from "react";
import axios from "axios";

export const logIn = (email, senha) => {
  var result;

  return new Promise((resolve, reject) => {
    axios({
      url: "http://needy-api.herokuapp.com/login",
      method: "POST",
      data: {
        email: email.toString(),
        senha: senha.toString(),
      },
    })
      .then((response) => {
        result = response.data.token;
        resolve(result);
      })
      .catch((error) => {
        resolve(null);
        reject(error);
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
      .catch((error) => {
        console.log(error);
      });
  });
};

export const getResponsavel = (token) => {
  var responsavel;
  return new Promise((resolve) => {
    axios({
      url: "http://needy-api.herokuapp.com/responsavel",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        responsavel = response.data;
        resolve(responsavel);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

