import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import DetalhesAluno from "../pages/DetalhesAluno";
import axios from "axios";

vi.mock("axios");

describe("Página de detalhes", () => {
  test("exibe as informações do aluno", async () => {
    axios.get.mockResolvedValue({
      data: {
        id: 10,
        nome: "Lucas",
        email: "lucas@email",
        phone: "99999-9999",
        curso: "React"
      },
    });

    render(
      <MemoryRouter initialEntries={["/aluno/10"]}>
        <Routes>
          <Route path="/aluno/:id" element={<DetalhesAluno />} />
        </Routes>
      </MemoryRouter>
    );

    expect(await screen.findByText("Lucas")).toBeInTheDocument();
    expect(await screen.findByText(/React/)).toBeInTheDocument();
  });
});
