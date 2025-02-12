import { ReactNode } from "react"


export interface socialNetworkListProps {
  socialNetworks: socialNetworkProps[],
  listClasses?: string
}

export default function SocialNetworks(props: socialNetworkListProps) {
  return (
    <ul className={`flex flex-col gap-0.5 ml-0.5 pl-1 border-l border-white ${props.listClasses}`}>
      {
        props.socialNetworks.map((socialNetwork, i) => (
          <SocialNetwork 
            key={i}
            src={socialNetwork.src} 
            alt={socialNetwork.alt} 
            href={socialNetwork.href}
            listItemClasses={socialNetwork.listItemClasses}
            imageClasses={socialNetwork.imageClasses}
            linkClasses={socialNetwork.linkClasses}>
            {socialNetwork.children}
          </SocialNetwork>
        ))
      }
    </ul>
  )
}

export interface socialNetworkProps {
  children: ReactNode,
  href: string,
  alt: string,
  src: string,
  listItemClasses?: string,
  imageClasses?: string,
  linkClasses?: string
}

function SocialNetwork(props: socialNetworkProps) {
  return (
    <li className={`flex items-center gap-1 ${props.listItemClasses}`}>
      <img className={`size-5 select-none white-svg ${props.imageClasses}`} alt={props.alt} src={props.src}/>
      <a className={`
        text-emerald-100 duration-200
        transition-all hover:text-emerald-500 ${props.linkClasses}`} target="_blank" href={props.href}>{props.children}</a>
    </li>
  )
}
