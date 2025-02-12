import { ReactNode } from "react"

export interface AbilityProps {
  listClasses?: string,
  imageClasses?: string,
  alt: string,
  src: string,
  children: ReactNode
}

export default function AbilityItem(props: AbilityProps) {

  return (
    <li className={`flex items-center gap-1 ${props.listClasses}`}>
      <img className={`size-5 select-none white-svg ${props.imageClasses}`} alt={props.alt} src={props.src}/>
      {props.children}
    </li>
  )

}
