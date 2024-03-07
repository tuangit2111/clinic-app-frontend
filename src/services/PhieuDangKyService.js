import axios from "axios";
const REST_API_BASE_URL = 'http://localhost:8080/phieudangky/add';
const REST_API_BASE_URL2 = 'http://localhost:8080/phieudangky/getall';
const REST_API_BASE_URL3 = 'http://localhost:8080/phieudangky/gettgk';
const REST_API_BASE_URL4 = 'http://localhost:8080/phieudangky/getbytgk';
export const createPhieuDangKy = (phieuDangKy) => axios.post(REST_API_BASE_URL, phieuDangKy);
export const listPhieuDangKy = () => axios.get(REST_API_BASE_URL2);
export const listThoiGianKham = () => axios.get(REST_API_BASE_URL3);
export const listByThoiGianKham = (thoigiankham) => axios.get(`${REST_API_BASE_URL4}?thoigiankham=${thoigiankham}`);