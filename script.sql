CREATE TABLE `Pessoas` (
  `id` int NOT NULL,
  `nome` varchar(255) NOT NULL,
  `idade` int DEFAULT NULL,
);


INSERT INTO Pessoas (id, Nome, idade) VALUES
    (1, 'João', 30),
    (2, 'Ana Oliveira', 28),
    (3, 'Pedro Santos', 40),
    (4, 'Luiza Costa', 22),
    (5, 'Carlos Souza', 35),
    (6, 'Maria Silva', 30);


Caminhos:

http://localhost:3010/consulta-dados

http://localhost:3010/liveness

http://localhost:3010/readiness



Para executar o contêiner da sua aplicação Node.js: 

-- docker run -d -p 3010:3000 --name atv4cloudcomputing-app vandoops/atv4cloudcomputing-app:1.0


Comando para executar o banco de dados MySQL usando Docker:

-- docker run -d --name atividadeaula4 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql:latest




Link Github:

https://github.com/vandoops/atv4cloudcomputing


Link Docker Hub:
https://hub.docker.com/repository/docker/vandoops/atv4cloudcomputing-db/general