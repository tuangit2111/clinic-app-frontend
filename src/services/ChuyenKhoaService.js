import axios from 'axios'
const REST_API_BASE_URL = "http://localhost:8080/api/chuyenkhoa";
const REST_API_BASE_URL2 = "http://localhost:8080/api/findname";
export const listChuyenKhoa = () => axios.get(REST_API_BASE_URL);
export const nameCK = (id) => axios.get(`${REST_API_BASE_URL2}?id=${id}`);