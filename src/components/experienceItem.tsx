
import "./experienceItem.css";
import project from "../assets/project.svg";
import clock from "../assets/clock.svg";
import description from "../assets/description.svg";

export interface experienceItemProps {
  project: string,
  months: number,
  start: {
    month: number,
    year: number,
  },
  description: string,
  className?: string
}

export default function ExperienceItem(props: experienceItemProps) {
  let endMonth = props.start.month + props.months;
  let endYear = props.start.year;
  while (endMonth > 12) {
    endMonth -= 12;
    endYear += 1;
  }
  return (
    <li className={`flex flex-col gap-0.5 ${props.className}`}>
      <div className="flex items-center gap-1" >
        <img className="size-5 select-none" alt="Icon indicating project" src={project}/>
        <h3>{props.project}</h3>
      </div>
      <div className="flex items-center gap-1" >
        <img className="size-5 select-none" alt="Icon indicating time" src={clock}/>
        <h3>{props.months} months</h3>
        <span>•</span>
        <div>
          <span className="italic">{props.start.month.toString().padStart(2, "0")}/{props.start.year}</span>
          <span className="ml-1 mr-1">–</span>
          <span className="italic">{endMonth.toString().padStart(2, "0")}/{endYear}</span>
        </div>
      </div>
      <div className="flex items-start gap-1" >
        <img className="size-5 select-none" alt="Icon indicating description" src={description}/>
        <p className="text-2sm">{props.description}</p>
      </div>
    </li>
  )
}
