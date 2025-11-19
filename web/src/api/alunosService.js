import apiClient from "./apiClient";

const alunosService = {
  listar: () => apiClient.get("/alunos"),
  buscarPorId: (id) => apiClient.get(`/alunos/${id}`)
};

export default alunosService;
