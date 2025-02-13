import linkedin from "../assets/linkedin.svg";
import whatsapp from "../assets/whatsapp.svg";
import email from "../assets/email.svg";
import github from "../assets/github.svg";
import { socialNetworkProps } from "../components/socialNetworks";

type socialNetworkListType = socialNetworkProps[];

const socialNetworkList: socialNetworkListType = [
  {
    alt: "GitHub icon",
    src: github,
    href: "https://github.com/NickRMD",
    children: "GitHub"
  },
  {
    alt: "Linkedin icon",
    src: linkedin,
    href: "https://www.linkedin.com/in/nicolas-renan-machado-dias/",
    children: "Linkedin",
  },
  {
    alt: "Whatsapp icon",
    src: whatsapp,
    href: "https://wa.me/5551995896904/",
    children: "+55 51 9 9589-6904"
  },
  {
    alt: "Email icon",
    src: email,
    href: "mailto:nicolasrenanmachado@gmail.com",
    children: "nicolasrenanmachado@gmail.com"
  },
];

export default socialNetworkList;
