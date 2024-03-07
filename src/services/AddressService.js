import axios from 'axios';

const REST_API_BASE_URL = "https://vapi.vnappmob.com/api/province";

export const listProvince = () => axios.get(REST_API_BASE_URL);
export const listHuyen = (id) => axios.get(`https://vapi.vnappmob.com/api/province/district/${id}`);
export const listXa = (id) => axios.get(`https://vapi.vnappmob.com/api/province/ward/${id}`) 