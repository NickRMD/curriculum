
import project from "../assets/project.svg";
import clock from "../assets/clock.svg";
import description from "../assets/description.svg";

export interface experienceItemProps {
  project: string,
  months: number,
  description: string,
  className?: string
}

export default function ExperienceItem(props: experienceItemProps) {
  return (
    <li className={`flex flex-col gap-0.5 ${props.className}`}>
      <div className="flex items-center gap-1" >
        <img className="size-5 select-none" alt="Icon indicating project" src={project}/>
        <h3>{props.project}</h3>
      </div>
      <div className="flex items-center gap-1" >
        <img className="size-5 select-none" alt="Icon indicating time" src={clock}/>
        <h3>{props.months} months</h3>
      </div>
      <div className="flex items-start gap-1" >
        <img className="size-5 select-none" alt="Icon indicating description" src={description}/>
        <p>{props.description}</p>
      </div>
    </li>
  )
}
