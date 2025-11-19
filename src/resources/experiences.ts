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
    Neste projeto utilizei Next.js para o frontend e Express.js para o backend, com PostgreSQL como banco de dados. O site permitia que os jogadores
    se comunicassem com o servidor do jogo para acessar suas informações e realizar pagamentos dentro do jogo.
    `
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
      Neste outro projeto utilizei Express.js, AWS (SQS e Lambda), Oracle Object Storage, Golang, React (usando Vite),
      PostgreSQL, CockroachDB e outras tecnologias para desenvolver um sistema que conectava ERPs com a loja da Nexsi em diversos marketplaces,
      como Mercado Livre e Magazine Luiza. O sistema também integrava inteligência artificial para aprimorar os produtos, preenchendo informações faltantes e outros campos necessários.
    `
  },
  {
    project: "RE:SUM",
    months: 6,
    start: {
      month: 6,
      year: 2025
    },
    description: `
      Neste projeto utilizei Angular para front com utilização de CoreUI, Bootstrap, outras bibliotecas para criação de front-end interativo e responsivo,
      também foi utilizado Node.js com NestJS para o backend, utilizando PostgreSQL como database. Foi trabalhado com diversos sistemas internos, consegui
      neste projeto além de aprimorar meus conhecimentos em Angular, aprender NestJS e aprofundar meus conhecimentos em PostgreSQL, consegui também fazer com que
      o sistema fosse mais seguro por diversos patches de segurança que fiz e apontei, e também melhorei a performance em diversos pontos dos sistemas utilizados internamente.
      Utilizei também minha biblioteca própria (SQM) para facilitar a criação de queries SQL para o banco de dados utilizado.
    `
  }
];

export default experiences;
