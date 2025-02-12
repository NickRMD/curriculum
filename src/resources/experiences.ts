import { experienceItemProps } from "../components/experienceItem";

type experienceList = experienceItemProps[];

const experiences: experienceList = [
  {
    project: "WYB - With Your Blessing",
    months: 5,
    description: `
    Neste projeto fiz o uso de Next.js e Express.js usando PostgreSQL (database) para montar o site para o jogo específico em que o cliente (frontend)
    se comunicava com o servidor (backend) para buscar informações do jogador e etc. para mostrar no site e poder fazer pagamentos para
    recebimento de dinheiro próprio do jogo.
    `,
  },
  {
    project: "Nexsi",
    months: 13,
    description: `
    Neste outro projeto fiz o uso de Express.js, AWS (SQS e Lambda), Oracle Object Storage, Golang (linguagem de programação), React (usando Vite),
    PostgreSQL, CockroachDB e diversas outras tecnologias para codificação e documentação do sistema que conectava ERPs com a loja da Nexsi em diversos marketplaces, 
    como Mercado Livre, Magazine Luiza e outros, para venda de produtos dos usuários cadastrados na loja da Nexsi. Também iria se utilizar de inteligência artificial
    para aperfeiçoamento dos produtos, colocando informações faltantes e outros campos necessários.
    `
  }
];

export default experiences;
