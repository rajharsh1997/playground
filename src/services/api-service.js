import React, { useState, useEffect, useContext } from "react";
//import axios from "axios";
//import { Context } from "../../context";

export async function getUserInfo(username) {
    const url = `https://api.github.com/users/${username}`;
      return fetch(url, {
      method: 'GET',
      headers: new Headers({
        'content-type':'application/json',
       })
    })
      .then(x => x.json());
  }

  export async function getUserRepo(repoUrl) {
    const url = repoUrl;
      return fetch(url, {
      method: 'GET',
      headers: new Headers({
        'content-type':'application/json',
       })
    })
      .then(x => x.json());
  }

  export async function followersInfo(follower_url) {
    const url = follower_url;
      return fetch(url, {
      method: 'GET',
      headers: new Headers({
        'content-type':'application/json',
       })
    })
      .then(x => x.json());
  }