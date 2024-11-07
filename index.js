const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cadastro de Produto</title>
        <style>
            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #f093fb, #f5576c);
                color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                animation: fadeIn 1s ease-i
            }

            .container {
                background-color: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(10px);
                padding: 30px;
                border-radius: 15px;
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
                width: 100%;
                max-width: 400px;
                transition: transform 0.3s ease;
            }

            .container:hover {
                transform: translateY(-10px);
            }

            h2 {
                text-align: center;
                color: #fff;
                margin-bottom: 20px;
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            }

            .form-group {
                margin-bottom: 20px;
            }

            label {
                display: block;
                font-weight: bold;
                margin-bottom: 5px;
                color: #fefefe;
            }

            input[type="text"],
            input[type="number"],
            input[type="date"],
            textarea {
                width: 100%;
                padding: 10px;
                border: none;
                border-radius: 5px;
                font-size: 14px;
                transition: all 0.3s ease;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }

            input:focus,
            textarea:focus {
                outline: none;
                transform: scale(1.05);
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            }

            .btn {
                width: 100%;
                background-color: #ff6f61;
                color: white;
                border: none;
                padding: 12px;
                font-size: 16px;
                cursor: pointer;
                border-radius: 5px;
                transition: background-color 0.3s, transform 0.3s;
            }

            .btn:hover {
                background-color: #ff4757;
                transform: scale(1.05);
            }

            textarea {
                resize: vertical;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h2>Cadastro de Produto</h2>
            <form action="/submit" method="post">
                <div class="form-group">
                    <label for="nome">Nome do Produto:</label>
                    <input type="text" id="nome" name="nome" required>
                </div>
                <div class="form-group">
                    <label for="descricao">Descrição:</label>
                    <textarea id="descricao" name="descricao" rows="3" required></textarea>
                </div>
                <div class="form-group">
                    <label for="preco">Preço:</label>
                    <input type="number" id="preco" name="preco" step="0.01" required>
                </div>
                <div class="form-group">
                    <label for="data">Data de Cadastro:</label>
                    <input type="date" id="data" name="data" required>
                </div>
                <button type="submit" class="btn">Cadastrar Produto</button>
            </form>
        </div>
    </body>
    </html>
  `);
});

app.post('/submit', (req, res) => {
  const { nome, descricao, preco, data } = req.body;
  console.log(`Nome: ${nome}`);
  console.log(`Descrição: ${descricao}`);
  console.log(`Preço: ${preco}`);
  console.log(`Data de Cadastro: ${data}`);

  res.send(`
    <h1>Produto Cadastrado!</h1>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Descrição:</strong> ${descricao}</p>
    <p><strong>Preço:</strong> ${preco}</p>
    <p><strong>Data de Cadastro:</strong> ${data}</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
