require("dotenv").config(); // Carregar variáveis de ambiente do .env
const express = require("express"); // Importar o Express
const sequelize = require("./config/database"); // Importar a configuração do Sequelize

// Criar a aplicação Express
const app = express();

// Middleware para parse de JSON no corpo das requisições
app.use(express.json());

// Rota básica para testar o servidor
app.get("/", (req, res) => {
  res.send("Servidor está funcionando!");
});

// Testar conexão com o banco de dados
sequelize
  .authenticate()
  .then(() => console.log("Conexão com o banco de dados bem-sucedida!"))
  .catch((err) => console.error("Erro ao conectar ao banco de dados:", err));

// Definir porta e iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
