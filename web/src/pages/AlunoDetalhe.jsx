import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import alunosService from "../api/alunosService";

export default function AlunoDetalhe() {
  const { id } = useParams();
  const [aluno, setAluno] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    alunosService.buscarPorId(id)
      .then(response => {
        setAluno(response.data);
        setCarregando(false);
      })
      .catch(error => {
        setErro("Aluno não encontrado");
        setCarregando(false);
      });
  }, [id]);

  if (carregando) {
    return <p>Carregando...</p>;
  }

  if (erro) {
    return <p style={{ color: "red" }}>{erro}</p>;
  }

  return (
    <div>
      <h2>Detalhes do Aluno</h2>

      <div className="card mt-3">
        <div className="card-body">
          <h4>{aluno.nome}</h4>
          <p><strong>Curso:</strong> {aluno.curso ?? "Não informado"}</p>
          <p><strong>Turma:</strong> {aluno.turma ?? "Não informado"}</p>
          <p><strong>Matrícula:</strong> {aluno.matricula ?? "Não informada"}</p>
        </div>
      </div>
    </div>
  );
}
