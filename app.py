from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///produtos.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

CORS(app)


class Produto(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nomeProduto = db.Column(db.String(100), nullable=False)
    descricaoProduto = db.Column(db.String(200), nullable=True)
    valorProduto = db.Column(db.Float, nullable=False)
    disponivelVenda = db.Column(db.Boolean, nullable=False, default=True)

    def __repr__(self):
        return f'<Produto {self.nomeProduto}>'


@app.route('/produtos', methods=['POST'])
def adicionar_produto():
    data = request.get_json()
    novo_produto = Produto(nomeProduto=data['nome'],
                           descricaoProduto=data['descricao'],
                           valorProduto=data['valor'],
                           disponivelVenda=data.get('disponivelVenda', True))
    db.session.add(novo_produto)
    db.session.commit()
    return jsonify({'message': 'Produto criado com sucesso!'}), 201


@app.route('/produtos', methods=['GET'])
def listar_produtos():
    produtos = Produto.query.all()
    return jsonify([{'id': produto.id, 'nome': produto.nomeProduto, 'descricao': produto.descricaoProduto, 'valor': produto.valorProduto, 'disponivelVenda': produto.disponivelVenda} for produto in produtos])


if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=5001)
