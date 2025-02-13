import { experienceItemProps } from "../components/experienceItem";

type experienceList = experienceItemProps[];

const experiences: experienceList = [
  {
    project: "WYB - With Your Blessing",
    months: 5,
    description: `
      In this project I've used Next.js and Express.js along with PostgreSQL as the database to build a website for a specific game. The client (frontend)
      communicated with the server (backend) to retrieve player information for display on the website and to process payments for in-game currency.
    `,
  },
  {
    project: "Nexsi",
    months: 12,
    description: `
      In this project, I utilized Express.js, AWS (SQS and Lambda), Oracle Object Storage, Golang (programming language), React (using Vite),
      PostgreSQL, CockroachDB, Redis and several other technologies to develop and document a system that connected ERPs to Nexsi across various marketplaces,
      such as Mercado Livre, Magazine Luiza, and others. This system facilitated the sale of products from users registered on Nexsi. 
      Artificial Intelligence was also planned to be used to enhance product listings by adding missing information and other necessary fields.
    `,
  }
];

export default experiences;
