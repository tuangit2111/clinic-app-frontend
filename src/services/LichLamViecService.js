import axios from "axios";
const REST_API_BASE_URL = 'http://localhost:8080/llv/add';
const REST_API_BASE_URL2 = 'http://localhost:8080/llv/findbs';
const REST_API_BASE_URL3 = 'http://localhost:8080/llv/findnlv';
export const createLichLamViec = (lichLamViec) => axios.post(REST_API_BASE_URL, lichLamViec);
export const findBS = (idCK, ngaylamviec) => axios.get(`${REST_API_BASE_URL2}?id=${idCK}&ngaylamviec=${ngaylamviec}`);
export const findNLV = (id) => axios.get(`${REST_API_BASE_URL3}?id=${id}`);