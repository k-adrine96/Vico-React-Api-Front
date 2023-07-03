import axios from 'axios';
import { useState } from 'react';

const raitingParams = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const doLogin = async data => {
  // return axios({
  //   method: 'get',
  //   url: 'https://127.0.0.1:8000/api/login_check',
  //   data,
  // }).then(data => data.json());
  // TODO remove the default values when api is ready
  return { token: "asdasdasd", id: 1 }
}

const getProjectListByClientID = async ({token, clientId}) => {
  // return axios({
  //   method: 'get',
  //   url: `https://127.0.0.1:8000/api/projects`,
  //   data: { token, clientId },
  // }).then(data => data.json());

  const projects = [
    {
      title: "First project",
      id: 1
    },
    {
      title: "Second project",
      id: 2
    },
    {
      title: "Third project",
      id: 3
    },
    {
      title: "Forth project",
      id: 4
    }
  ];
  return projects;
}

const getProjectById = async ({token, id}) => {
  // return axios({
  //   method: 'get',
  //   url: `https://127.0.0.1:8000/api/projects/${id}`,
  //   data: {token},
  // }).then(data => data.json());
  return {
    project: {
      id: 1,
      title: "some project",
    },
    vico: {id: 1, name: "Circle Design"},
    raiting: {
      id: 1,
      review_text: "feedback",
      money_value_rate: 3,
      work_quality_rate: 1,
      communication_rate: 4,
      overall_satisfication_rate: 3,
      project_id: 1,
    }
  }
}

export { doLogin, getProjectListByClientID, getProjectById, raitingParams };