import { experienceItemProps } from "../components/experienceItem";

type experienceList = experienceItemProps[];

const experiences: experienceList = [
  {
    project: "WYB - With Your Blessing",
    months: 6,
    start: {
      month: 3,
      year: 2023
    },
    // description: `
    // Neste projeto fiz o uso de Next.js e Express.js usando PostgreSQL (database) para montar o site para o jogo específico em que o cliente (frontend)
    // se comunicava com o servidor (backend) para buscar informações do jogador e etc. para mostrar no site e poder fazer pagamentos para
    // recebimento de dinheiro próprio do jogo.
    // `,
    /// Shortened description to fit better
    description: `
      In this project I've used Next.js and Express.js along with PostgreSQL as the database to build a website for a specific game. The client (frontend)
      communicated with the server (backend) to retrieve player information for display on the website and to process payments for in-game currency.
    `,
  },
  {
    project: "Nexsi",
    months: 14,
    start: {
      month: 1,
      year: 2024
    },
    // description: `
    // Neste outro projeto fiz o uso de Express.js, AWS (SQS e Lambda), Oracle Object Storage, Golang (linguagem de programação), React (usando Vite),
    // PostgreSQL, CockroachDB e diversas outras tecnologias para codificação e documentação do sistema que conectava ERPs com a loja da Nexsi em diversos marketplaces,
    // como Mercado Livre, Magazine Luiza e outros, para venda de produtos dos usuários cadastrados na loja da Nexsi. Também iria se utilizar de inteligência artificial
    // para aperfeiçoamento dos produtos, colocando informações faltantes e outros campos necessários.
    // `
    /// Shortened description to fit better
    description: `
      In this other project, I utilized Express.js, AWS (SQS and Lambda), Oracle Object Storage, Golang (programming language), React (using Vite),
      PostgreSQL, CockroachDB, Redis and several other technologies to develop and document a system that connected ERPs to Nexsi across various marketplaces,
      such as Mercado Livre, Magazine Luiza, and others. This system facilitated the sale of products from users registered on Nexsi. 
      Artificial Intelligence was also planned to be used to enhance product listings by adding missing information and other necessary fields.
    `,
  },
  {
    project: "RE:SUM",
    months: 6,
    start: {
      month: 6,
      year: 2025
    },
    description: `
      In this project I used Angular for the frontend with CoreUI, Bootstrap, and other libraries to build an interactive and responsive UI.
      Node.js with NestJS was used for the backend, with PostgreSQL as the database. I worked with several internal systems; besides improving
      my Angular skills, I learned NestJS and deepened my PostgreSQL knowledge. I also made the system more secure by implementing and
      identifying several security patches, and improved performance in various areas of the internal systems. I also used my own library (SQM)
      to simplify creating SQL queries for the database.
    `
  }
];

export default experiences;
