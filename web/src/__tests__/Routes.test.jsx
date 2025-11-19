import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DetalhesAluno from "../pages/DetalhesAluno";
import axios from "axios";

vi.mock("axios");

test("navega para página de detalhes quando o usuário clica no aluno", async () => {
  axios.get.mockResolvedValueOnce({
    data: [{ id: 1, nome: "Carlos", email: "carlos@email" }],
  });

  axios.get.mockResolvedValueOnce({
    data: {
      id: 1,
      nome: "Carlos",
      email: "carlos@email",
      phone: "98888-1111",
      curso: "JavaScript"
    },
  });

  render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aluno/:id" element={<DetalhesAluno />} />
      </Routes>
    </MemoryRouter>
  );

  const link = await screen.findByText("Carlos");
  await userEvent.click(link);

  expect(await screen.findByText("JavaScript")).toBeInTheDocument();
});
