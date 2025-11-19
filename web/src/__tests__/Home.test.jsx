import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

vi.mock("axios");

describe("Página Home", () => {
  test("renderiza a lista de alunos", async () => {
    axios.get.mockResolvedValue({
      data: [
        { id: 1, nome: "Ana", email: "ana@email" },
        { id: 2, nome: "Pedro", email: "pedro@email" },
      ],
    });

    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(await screen.findByText("Ana")).toBeInTheDocument();
    expect(await screen.findByText("Pedro")).toBeInTheDocument();
  });

  test("mostra mensagem de carregamento", () => {
    axios.get.mockResolvedValue({ data: [] });

    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByText("Carregando...")).toBeInTheDocument();
  });
});
