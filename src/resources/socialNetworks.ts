import linkedin from "../assets/linkedin.svg";
import whatsapp from "../assets/whatsapp.svg";
import email from "../assets/email.svg";
import github from "../assets/github.svg";
import company from "../assets/company.svg";
import { socialNetworkProps } from "../components/socialNetworks";

type socialNetworkListType = socialNetworkProps[];

const socialNetworkList: socialNetworkListType = [
  {
    alt: "Ícone do GitHub",
    src: github,
    href: "https://github.com/NickRMD",
    children: "GitHub"
  },
  {
    alt: "Ícone para representar o aplicativo Linkedin",
    src: linkedin,
    href: "https://www.linkedin.com/in/nicolas-renan-machado-dias/",
    children: "LinkedIn",
  },
  {
    alt: "Ícone para representar o aplicativo Whatsapp",
    src: whatsapp,
    href: "https://wa.me/5551995896904/",
    children: "+55 51 9 9589-6904"
  },
  {
    alt: "Ícone para representar o email",
    src: email,
    href: "mailto:nicolasrenanmachado@gmail.com",
    children: "nicolasrenanmachado@gmail.com"
  },
  {
    alt: "Ícone para representar a empresa Fragmenta Company",
    src: company,
    href: "mailto:nick@fragmenta.net.br",
    children: "nick@fragmenta.net.br"
  }
];

export default socialNetworkList;
