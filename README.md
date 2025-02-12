# cadastro-listagem-produtos

API simples para cadastro e listagem de produtos. Ela oferece as funções **GET** para listar os produtos e **POST** para adicionar novos produtos.

## Passo a passo para rodar a aplicação

### 1. Instalar o Python

Baixe e instale o Python em: [https://www.python.org/downloads/](https://www.python.org/downloads/).

### 2. Clonar o repositório

Clone o repositório para sua máquina:

```bash
git clone https://github.com/LucasAndradeF/cadastro-listagem-produtos
```

### 3. Criar um ambiente virtual

Dentro da pasta do repositório, crie um ambiente virtual:

```bash
python -m venv venv
```

### 4. Ativar o ambiente virtual

- **Windows**:

```bash
venv\Scripts\activate
```

### 5. Instalar as dependências

Instale as dependências necessárias para rodar o projeto:

```bash
pip install -r requirements.txt
```

### 6. Executar a aplicação

Inicie o servidor da aplicação:

```bash
python app.py
```

Agora a API estará rodando em: [http://127.0.0.1:5001/produtos](http://127.0.0.1:5001/produtos)

## Rotas Disponíveis

- **GET /produtos**: Lista todos os produtos cadastrados.
- **POST /produtos**: Adiciona um novo produto.

  ```json
  {
    "nome": "Notebook",
    "descricao": "SSD 500gb, 16gb Ram, Win11",
    "valor": 2999.99,
    "disponivelVenda": false
  }
  ```

## Tecnologias utilizadas:

- **HTML5**
- **CSS3**
- **JavaScript**
- **Flask**
- **SQLite**
- **SQLAlchemy**
- **Python**
- **Bootstrap**
