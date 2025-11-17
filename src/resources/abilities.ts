import grid from "../assets/grid.svg";
import config from "../assets/config.svg";
import office from "../assets/office.svg";
import cog from "../assets/cog.svg";
import draw from "../assets/draw.svg";
import trello from "../assets/trello.svg";
import git from "../assets/git-branch.svg";
import bot from "../assets/robot.svg";
import { AbilityProps } from "../components/abilityItem";

type abilityListType = AbilityProps[];

const abilities: abilityListType = [
  {
    children: "Trabalho em equipe com uso de metodologias ágeis como Kanban",
    alt: "Ícone de rede",
    src: grid
  },
  {
    children: "Adaptabilidade as tecnologias utilizadas",
    alt: "Ícone de configurações",
    src: config
  },
  {
    children: "LibreOffice e outros pacotes do tipo (como Microsoft Office)",
    alt: "Ícone para representar aplicativos de escritório (office)",
    src: office
  },
  {
    children: "Resolução de problemas",
    alt: "Engrenagem",
    src: cog
  },
  {
    children: "Excalidraw (para montagem de fluxos utilizados)",
    alt: "Ícone de seleção",
    src: draw
  },
  {
    children: "Trello",
    alt: "Logo do Trello",
    src: trello
  },
  {
    children: "Git, GitHub, GitLab, Gitea e etc.",
    alt: "Função de branch do Git",
    src: git
  },
  {
    children: "Bots de Discord para automação de tarefas",
    alt: "Ícone de rede",
    src: bot
  }
];

export default abilities;
