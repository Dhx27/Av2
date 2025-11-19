import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://proweb.leoproti.com.br"
});

export default apiClient;
