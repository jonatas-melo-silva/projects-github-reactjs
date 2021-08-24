/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

axios.defaults.timeout = 120000;

const api = axios.create({
  baseURL: 'https://api.github.com',
});

const get = (path) => api.get(path);

export {
  get,
};
