import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

vi.mock("axios");

test("lida com erro da API", async () => {
  axios.get.mockRejectedValue(new Error("Erro 500"));

  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  expect(screen.getByText("Carregando...")).toBeInTheDocument();
});
