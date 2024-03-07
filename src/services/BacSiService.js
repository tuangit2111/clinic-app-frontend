import axios from 'axios';

const REST_API_BASE_URL_BS = "http://localhost:8080/bs";
const REST_API_BASE_URL_BS2 = "http://localhost:8080/bs/all";
const REST_API_BASE_URL_BS3 = "http://localhost:8080/bs/getbyidv2";
export const listBacSi = (id) => axios.get(`${REST_API_BASE_URL_BS}?id=${id}`);
export const listAllBacSi = (page) => axios.get(`${REST_API_BASE_URL_BS2}?page=${page}`);
export const listBacSiById = (id, page) => axios.get(`${REST_API_BASE_URL_BS3}?id=${id}&page=${page}`);