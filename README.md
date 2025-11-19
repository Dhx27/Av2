Sistema de Alunos – AV2

Estudo de caso abordando Web e Mobile para listar, visualizar e cadastrar alunos, utilizando uma API REST centralizada.

🌐 Web
Tecnologias utilizadas

Vite

React

React Bootstrap

React Router DOM

Axios

Vitest

React Testing Library

Funcionalidades

Navegação entre rotas

Página inicial com listagem de alunos

Página de detalhes do aluno

Consumo completo da API REST

Testes automatizados (componentes + rotas + chamadas de API)

Rotas
Rota	Descrição
/	Lista todos os alunos
/alunos/:id	Página de detalhes do aluno selecionado
📱 Mobile
Tecnologias utilizadas

React Native

Expo

React Navigation

Axios

Funcionalidades

Tela inicial de navegação

Listagem de alunos

Visualização de detalhes

Cadastro de novos alunos

Consumo da mesma API utilizada no projeto web

Rotas
Tela	Descrição
HomeScreen	Tela inicial
AlunoScreen	Listagem de alunos
CadastrarAlunoScreen	Cadastro de novo aluno
DetalhesScreen	Detalhes e edição
🛠 API REST
Base URL
https://proweb.leoproti.com.br/alunos

Endpoints
Método	Endpoint	Descrição
GET	/alunos	Lista todos os alunos
POST	/alunos	Cadastra um novo aluno
PUT	/alunos/:id	Atualiza um aluno existente
GET	/alunos/:id	Retorna detalhes do aluno
📚 Documentações úteis

React: https://react.dev/

React Router DOM: https://reactrouter.com/

Axios: https://axios-http.com/

Vite: https://vitejs.dev/

React Testing Library: https://testing-library.com/

Vitest: https://vitest.dev/

React Native: https://reactnative.dev/

Expo: https://expo.dev/
