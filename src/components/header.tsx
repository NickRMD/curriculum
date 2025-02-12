
import avatar from "../assets/avatar.webp";
import contact from "../assets/contact.svg";
import language from "../assets/language.svg"
import science from "../assets/science.svg";
import lasso from "../assets/lasso.svg";
import AbilityItem from "../components/abilityItem";
import abilities from "../resources/abilities";
import SocialNetworks from "../components/socialNetworks";
import socialNetworkList from "../resources/socialNetworks";
import PersonalProjects from "./personalProjects";
import personalProjects from "../resources/personalProject";
import languages from "../resources/languages";

export default function Header() {

  return (
    <>
      <header className={`
        flex flex-col 
        bg-emerald-950 rounded-tl-md 
        rounded-bl-md ml-2 
        mt-2 mb-2 pl-4 pr-4
        px-2.5 h-[calc(100vh-1rem)] 
        w-[40rem] sm:w-[32rem] md:w-[34rem] lg:w-[28rem] xl:w-[26rem]
        py-2 gap-2 
        text-white`}>
        <div className="flex text-center justify-center">
          <img src={avatar} className="size-32 object-cover object-right rounded-full select-none"/>
        </div>
        <h1 className="text-4xl text-emerald-300 text-justify">
          Nícolas Renan<div className="text-3xl  text-emerald-100">Machado Dias</div>
        </h1>
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1">
            <img className="size-5 select-none white-svg" alt="Ícone para representar contatos" src={contact}/>
            <h2 className="text-emerald-300">Contatos</h2>
          </div>
          <SocialNetworks socialNetworks={socialNetworkList}/>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <img className="size-5 select-none white-svg" alt="Ícone para representar linguagens" src={language}/>
            <h2 className="text-emerald-300">Linguagens</h2>
          </div>
          <ul className="pl-2 border-l border-white space-y-1">
            {languages.map(({ name, level }, i) => (
              <li 
                key={i}
                className={`
                  grid grid-cols-[5rem_2rem_5rem] 
                  text-center justify-around
                  items-center gap-3 
                  ${languages[i+1] ? "border-white pb-0.5" : "border-transparent"} border-b
                `}>
                <span>{name}</span>
                <span className="text-center"><img className="size-7 select-none white-svg" alt="Laço" src={lasso}/></span>
                <span>{level}</span>
              </li>
              ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-1">
            <img className="size-5 select-none white-svg" alt="Ícone de linguagens" src={science}/>
            <h2 className="text-emerald-300">Habilidades e competências</h2>
          </div>
          <ul className="flex flex-col gap-0.5 mt-0.5 pl-1 ml-0.5 border-l border-white">
            {
              abilities.map((ability, i) => (
                <AbilityItem 
                  key={i}
                  src={ability.src} 
                  alt={ability.alt} 
                  listClasses={ability.listClasses} 
                  imageClasses={ability.imageClasses}>{ability.children}</AbilityItem>
              ))
            }
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-1">
            <img className="size-5 select-none white-svg" alt="Ícone de linguagens" src={science}/>
            <h2 className="text-emerald-300">Projetos pessoais</h2>
          </div>
          <PersonalProjects personalProjects={personalProjects}/>
        </div>
      </header>
    </>
  )

}
