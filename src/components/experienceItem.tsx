
import project from "../assets/project.svg";
import clock from "../assets/clock.svg";
import description from "../assets/description.svg";

interface itemProps {
  projeto: string,
  tempo: number,
  descricao: string,
  className?: string
}

export default function ExperienceItem(props: itemProps) {
  return (
    <li className={`flex flex-col gap-0.5 ${props.className}`}>
      <div className="flex items-center gap-1" >
        <img className="size-5 select-none" alt="Ícone indicando projeto" src={project}/>
        <h3>{props.projeto}</h3>
      </div>
      <div className="flex items-center gap-1" >
        <img className="size-5 select-none" alt="Ícone indicando tempo" src={clock}/>
        <h3>{props.tempo} meses</h3>
      </div>
      <div className="flex items-start gap-1" >
        <img className="size-5 select-none" alt="Ícone indicando descrição" src={description}/>
        <p>{props.descricao}</p>
      </div>
    </li>
  )
}
