import React, { useEffect, useState } from "react";
import alunosService from "../api/alunosService";
import { Link } from "react-router-dom";

export default function Home() {
  const [alunos, setAlunos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    alunosService.listar()
      .then(response => {
        setAlunos(response.data);
        setCarregando(false);
      })
      .catch(error => {
        console.error("Erro ao carregar alunos:", error);
        setCarregando(false);
      });
  }, []);

  if (carregando) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h2 className="mb-4">Lista de Alunos</h2>

      <div className="list-group">
        {alunos.map((aluno) => (
          <div 
            key={aluno.id} 
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{aluno.nome}</strong><br />
              <small>{aluno.curso ?? "Curso não informado"}</small>
            </div>

            <Link 
              to={`/alunos/${aluno.id}`} 
              className="btn btn-primary btn-sm"
            >
              Ver detalhes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
