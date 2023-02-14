## :man_technologist: Habilidades desenvolvidas - Skills developed
* MongoDB
* Utilização do Mongoose (ODM) para trabalhar com o banco de dados MongoDB
* POO
* Contrução de uma API CRUD utilizando dos preceitos de SOLID
* Testes unitários com: Mocha, Chai e Sinon

## 🛠️ Ferramentas Utilizadas - Tools Used

* MongoDB
* Mongoose.js
* TypeScript
* Node.js
* Express.js
* Mocha.js
* Chai.js
* Sinon.js
* Docker
* OPP
* SOLID

## ⚙️ Como Executar

É necessario ter o Docker instalado.

1. Clone o repositório em uma pasta de preferência

```
git clone git@github.com:brandao-rafael/car-shop.git
```

2. Entre na pasta raíz do projeto, e instale todas as dependências

```
npm install
```

3. Para rodar o projeto é necessario executar o comando abaixo na raiz do projeto. Isso fará com que os containers docker sejam orquestrados e a aplicação esteja disponível. Esse comando deve ser executado via terminal dentro do diretório onde está o arquivo docker-compose.yml.

```
docker-compose up -d
```
4. Para rodar o servidor com o docker, basta acessar o terminal do container car_shop e rodar o comando abaixo e utilizar o insomnia, postman ou algum software de sua preferencia

```
npm run dev
```

5. Para testar o projeto use o seguinte script no terminal do container car_shop

```
npm run test:coverage
```

## Requisitos Técnicos:
* Crie a rota /cars onde seja possível cadastrar um carro
* Crie o endpoint para listar carros
* Escreva testes para cobrir 30% da camada de Service
* Crie a rota /cars/:id onde seja possível atualizar um carro por ID
* Crie a rota /motorcycles onde seja possível cadastrar uma moto
* Escreva testes para cobrir 60% da camada de Service
* Crie a rota /motorcycles onde seja possível listar motos
* Crie a rota /motorcycles/:id onde seja possível atualizar uma moto por ID
* Escreva testes para cobrir 80% da camada de Service
* Crie a rota /cars/:id onde seja possível excluir um carro por ID
* Crie a rota /motorcycles/:id onde seja possível excluir uma moto por ID
