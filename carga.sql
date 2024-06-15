CREATE TABLE IF NOT EXISTS Produtos (
  id INT,
  nome VARCHAR(255) NOT NULL,
  preco DECIMAL(10, 2) NOT NULL,
  descricao TEXT
);

-- Inserção de dados na tabela Produtos
INSERT INTO Produtos (id, nome, preco, descricao) VALUES
  (1, 'Produto A', 100.00, 'Descrição do Produto A'),
  (2, 'Produto B', 150.50, 'Descrição do Produto B'),
  (3, 'Produto C', 80.00, 'Descrição do Produto C'),
  (4, 'Produto D', 200.00, 'Descrição do Produto D');
