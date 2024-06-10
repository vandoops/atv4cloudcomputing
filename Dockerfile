# Definindo a imagem base
FROM node:latest

# Criando o diretório de trabalho dentro do contêiner
WORKDIR /app/atv4cloudcomputing

# Copiando o package.json e package-lock.json (se existir)
COPY package.json package-lock.json ./

# Instalando dependências
RUN npm install

# Copiando os arquivos do diretório local para o diretório de trabalho no contêiner
COPY . .

# Expondo a porta que a aplicação vai rodar
EXPOSE 3000

# Comando para iniciar sua aplicação
CMD ["npm", "start"]
