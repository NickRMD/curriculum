
import { useEffect, useState } from "react";
import avatar from "./assets/avatar.webp";
import contact from "./assets/contact.svg";
import language from "./assets/language.svg"
import whatsapp from "./assets/whatsapp.svg";
import email from "./assets/email.svg";
import science from "./assets/science.svg";
import linkedin from "./assets/linkedin.svg";
import grid from "./assets/grid.svg";
import config from "./assets/config.svg";
import office from "./assets/office.svg";
import cog from "./assets/cog.svg";
import draw from "./assets/draw.svg";
import trello from "./assets/trello.svg";
import git from "./assets/git-branch.svg";

export default function Header() {

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(75);
  }, []);

  return (
    <>
      <header className="flex flex-col bg-emerald-950 rounded-tl-md rounded-bl-md ml-2 mt-2 mb-2 px-2.5 h-[calc(100vh-1rem)] w-96 py-2 gap-2 text-white">
        <div className="flex text-center justify-center">
          <img src={avatar} className="size-32 rounded-full"/>
        </div>
        <h1 className="text-4xl text-emerald-300 text-justify">Nícolas Renan<div className="text-3xl  text-emerald-100">Machado Dias</div></h1>
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1">
            <img className="size-5 select-none white-svg" alt="Ícone para representar contatos" src={contact}/>
            <h2 className="text-emerald-300">Contatos</h2>
          </div>
          <ul className="flex flex-col gap-0.5 ml-0.5 pl-1 border-l border-white">
            <li>
              <div className="flex items-center gap-1">
                <img className="size-5 select-none white-svg" alt="Ícone para representar o aplicativo Linkedin" src={linkedin}/>
                <a className="
                  text-emerald-100 duration-200
                  transition-all hover:text-emerald-500" target="_blank" href="https://www.linkedin.com/in/nicolas-renan-machado-dias/">Linkedin</a>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-1">
                <img className="size-5 select-none white-svg" alt="Ícone para representar o aplicativo Whatsapp" src={whatsapp}/>
                <a className="
                  text-emerald-100 duration-200
                  transition-all hover:text-emerald-500" target="_blank" href="https://wa.me/5551995896904/">+55 51 9 9589-6904</a>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-1">
                <img className="size-5 select-none white-svg" alt="Ícone para representar o email" src={email}/>
                <a className="
                  text-emerald-100 duration-200
                  transition-all hover:text-emerald-500" target="_blank" href="mailto:nicolasrenanmachado@gmail.com">nicolasrenanmachado@gmail.com</a>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <img className="size-5 select-none white-svg" alt="Ícone para representar linguagens" src={language}/>
            <h2 className="text-emerald-300">Linguagens</h2>
          </div>
          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-1.5 justify-around">
              Inglês
              <div className="w-40 bg-white rounded-2xl progress-background">
                <div style={{
                  width: `${progress}%`
                }} className={`from-emerald-300 to-emerald-600 rounded-2xl bg-gradient-to-r relative h-[24px] progress transition-all ease-in-out duration-1000`}></div>
              </div>
              Avançado
            </li>
            <li className="border-t border-white mt-0.5">
              Língua nativa: Português
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-1">
            <img className="size-5 select-none white-svg" alt="Ícone de linguagens" src={science}/>
            <h2 className="text-emerald-300">Habilidades e competências</h2>
          </div>
          <ul className="flex flex-col gap-0.5 mt-0.5 pl-1 ml-0.5 border-l border-white">
            <li className="flex items-center gap-1">
              <img className="size-5 select-none white-svg" alt="Ícone de rede" src={grid}/>
              Trabalho em equipe com uso de metodologias ágeis como Kanban
            </li>
            <li className="flex items-center gap-1">
              <img className="size-5 select-none white-svg" alt="Ícone de configurações" src={config}/>
              Adaptabilidade as tecnologias utilizadas
            </li>
            <li className="flex items-center gap-1">
              <img className="size-5 select-none white-svg" alt="Ícone para representar aplicativos de escritório (office)" src={office}/>
              LibreOffice e outros pacotes do tipo (como Microsoft Office)
            </li>
            <li className="flex items-center gap-1">
              <img className="size-5 select-none white-svg" alt="Engrenagem" src={cog}/>
              Resolução de problemas
            </li>
            <li className="flex items-center gap-1">
              <img className="size-5 select-none white-svg" alt="Ícone de seleção" src={draw}/>
              Excalidraw (para montagem de fluxos utilizados)
            </li>
            <li className="flex items-center gap-1">
              <img className="size-5 select-none white-svg" alt="Logo do Trello" src={trello}/>
              Trello
            </li>
            <li className="flex items-center gap-1">
              <img className="size-5 select-none white-svg" alt="Função de branch do Git" src={git}/>
              Git, GitHub, GitLab, Gitea e etc.
            </li>
          </ul>
        </div>

      </header>
    </>
  )

}
