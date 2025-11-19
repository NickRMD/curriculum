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
    children: "Teamwork with agile methodologies like Kanban",
    alt: "Web icon",
    src: grid
  },
  {
    children: "Adaptability to different technologies",
    alt: "Configuration icon",
    src: config
  },
  {
    children: "LibreOffice and other similar packages (e.g. Microsoft Office)",
    alt: "Icon representing office applications",
    src: office
  },
  {
    children: "Problem-solving",
    alt: "Cog/Gear",
    src: cog
  },
  {
    children: "Excalidraw (for creating the necessary workflows)",
    alt: "Selection icon",
    src: draw
  },
  {
    children: "Trello",
    alt: "Trello's logo",
    src: trello
  },
  {
    children: "Git and related platforms (GitHub, GitLab, Gitea, etc.)",
    alt: "Branch git function",
    src: git
  },
  {
    children: "Discord bots for task automation",
    alt: "Ícone de rede",
    src: bot
  }
];

export default abilities;
