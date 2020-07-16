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
        reject('deu erro ao tentar fazer o login ' + error);
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
        console.log('deu erro no getUser' + error);
      });
  });
};

export const getResponsavel = (token) => {
  var responsavel;
  return new Promise((resolve, reject) => {
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
        console.log('deu erro no responsável ' + error);
        reject(error);
      });
  });
};

export const updatePassword = (newPassord, token) => {
  var doador;
  return new Promise((resolve, rejection) => {
    axios({
      url: "http://needy-api.herokuapp.com/doador",
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        novaSenha: newPassord.toString()
      }
    })
      .then((response) => {
        doador = response.data;
        resolve(doador);
      })
      .catch((error) => {
        console.log('deu erro ao redefinir senha ' + error);
        rejection(error);
      });
  })
}

