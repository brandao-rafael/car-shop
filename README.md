<details>
  <summary>:us: English</summary>
  <h1>Car Shop</h1>

  ## :man_technologist: Developed Skills
  * MongoDB
  * Use of Mongoose (ODM) to work with MongoDB database
  * OOP (Object-Oriented Programming)
  * Building a CRUD API using SOLID principles
  * Unit testing with Mocha, Chai, and Sinon

  ## 🛠️ Tools Used
  * MongoDB
  * Mongoose.js
  * TypeScript
  * Node.js
  * Express.js
  * Docker
  * OOP (Object-Oriented Programming)
  * SOLID

## Description
Car Shop is a powerful backend web application designed specifically for managing car and motorcycle inventory. It provides a comprehensive set of features and functionalities to handle various aspects of inventory management efficiently.

Built with modern technologies such as Node.js, Express.js, and MongoDB, Car Shop offers a reliable and scalable backend infrastructure. It leverages the robustness of MongoDB as the database, allowing for seamless storage and retrieval of car and motorcycle data.

With Car Shop, users can perform essential CRUD (Create, Read, Update, Delete) operations on car and motorcycle records. It provides intuitive and secure API endpoints that enable easy retrieval of vehicle information, addition of new vehicles, updates to existing records, and removal of outdated entries.

The application follows the principles of Object-Oriented Programming (OOP) to ensure a clean and modular codebase. It adheres to the SOLID principles, promoting code reusability, maintainability, and extensibility. This design approach allows for easy integration of new features or modifications in the future.

Car Shop places great emphasis on the reliability and stability of the backend system. It includes a comprehensive suite of unit tests implemented using industry-standard testing frameworks such as Mocha, Chai, and Sinon. These tests cover critical components of the application, ensuring robustness and reducing the likelihood of bugs or errors.

To simplify the deployment process, Car Shop provides Docker integration. With a straightforward setup using Docker, developers can easily configure and launch the application, ensuring consistent environments across different deployments.

Overall, Car Shop is a feature-rich backend web application that offers seamless car and motorcycle inventory management. Its advanced technologies, adherence to best practices, and comprehensive testing make it a reliable and efficient solution for businesses or organizations in need of a powerful backend system for managing their vehicle inventory.

## ⚙️ How to Run
Docker must be installed.

1. Clone the repository to a preferred directory

```
  git clone git@github.com:brandao-rafael/car-shop.git
```

2. Navigate to the project's root folder and install all dependencies

```
npm install
```

3. To run the project, execute the following command in the project's root directory. This will orchestrate the Docker containers and make the application available. This command should be run in the terminal within the directory where the docker-compose.yml file is located.

```
docker-compose up -d
```

4. To run the server with Docker, access the terminal of the car_shop container and execute the following command. Then, use Insomnia, Postman, or any preferred software to interact with the API.

```
npm run dev
```

5. To test the project, use the following script in the terminal of the car_shop container.

```
npm run test:mocha
```

</details>

<details>
  <summary>:brazil: Português</summary>
  <h1>Car Shop</h1>

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
  * Docker
  * POO
  * SOLID

  # Description
Car Shop é um poderoso aplicativo web backend desenvolvido especificamente para gerenciar o inventário de carros e motocicletas. Ele oferece um conjunto abrangente de recursos e funcionalidades para lidar com vários aspectos de gerenciamento de inventário de forma eficiente.

Construído com tecnologias modernas como Node.js, Express.js e MongoDB, o Car Shop oferece uma infraestrutura backend confiável e escalável. Ele aproveita a robustez do MongoDB como banco de dados, permitindo o armazenamento e recuperação de dados de carros e motocicletas de forma transparente.

Com o Car Shop, os usuários podem realizar operações essenciais de CRUD (Criar, Ler, Atualizar, Excluir) em registros de carros e motocicletas. Ele fornece endpoints de API intuitivos e seguros que permitem a fácil recuperação de informações de veículos, adição de novos veículos, atualizações em registros existentes e remoção de entradas desatualizadas.

O aplicativo segue os princípios da Programação Orientada a Objetos (POO) para garantir um código limpo e modular. Ele adere aos princípios SOLID, promovendo a reutilização, manutenibilidade e extensibilidade do código. Essa abordagem de design permite a integração fácil de novos recursos ou modificações no futuro.

O Car Shop dá grande importância à confiabilidade e estabilidade do sistema backend. Ele inclui uma suíte abrangente de testes unitários implementados com frameworks de teste padrão do setor, como Mocha, Chai e Sinon. Esses testes abrangem componentes críticos do aplicativo, garantindo robustez e reduzindo a probabilidade de bugs ou erros.

Para simplificar o processo de implantação, o Car Shop oferece integração com o Docker. Com uma configuração simples usando o Docker, os desenvolvedores podem facilmente configurar e lançar o aplicativo, garantindo ambientes consistentes em diferentes implantações.

Em resumo, o Car Shop é um aplicativo web backend rico em recursos que oferece um gerenciamento de inventário de carros e motocicletas perfeito. Suas tecnologias avançadas, aderência às melhores práticas e testes abrangentes o tornam uma solução confiável e eficiente para empresas ou organizações que precisam de um sistema backend poderoso para gerenciar seu inventário de veículos.

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
  npm run test:mocha
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
</details>
