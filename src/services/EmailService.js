import axios from 'axios'
const REST_API_BASE_URL = "http://localhost:8080/email/sendmail";

export const sendMail = (email) => axios.post(REST_API_BASE_URL, email);