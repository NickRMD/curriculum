import { ReactNode } from "react";
import project from "../assets/project2.svg";

interface personalProjectListProps {
  personalProjects: personalProjectProps[],
  listClasses: string
}

export default function PersonalProjects(props: personalProjectListProps) {
  return (
    <ul className={`flex flex-col gap-0.5 ml-0.5 pl-1 border-l border-white ${props.listClasses}`}>
      {
        props.personalProjects.map((project, i) => (
          <PersonalProject 
            key={i} 
            href={project.href}
            linkClasses={project.linkClasses}
            listItemClasses={project.listItemClasses}
            imageClasses={project.imageClasses}>{project.children}</PersonalProject>
        ))
      }
    </ul>
  )
}

interface personalProjectProps {
  children: ReactNode,
  href: string,
  linkClasses?: string,
  listItemClasses?: string,
  imageClasses?: string
}

export function PersonalProject(props: personalProjectProps) {
  return (
    <li className={`flex items-center gap-1 ${props.listItemClasses}`}>
      <img className={`size-5 select-none white-svg ${props.imageClasses}`} alt="Representação de projeto" src={project}/>
      <a className={`
        text-emerald-100 duration-200
        transition-all hover:text-emerald-500 ${props.linkClasses}`} target="_blank" href={props.href}>{props.children}</a>
    </li>
  )
}
