
import avatar from "./assets/avatar.webp";

export default function Header() {

  return (
    <>
      <header className="flex flex-col bg-emerald-950 rounded-md m-2 px-2.5 py-2 gap-2 text-white">
        <div className="flex text-center justify-center">
          <img src={avatar} className="size-32 rounded-full"/>
        </div>
        <h1 className="text-4xl text-emerald-300 text-justify">Nícolas <div className="text-3xl  text-emerald-100">Renan Machado Dias</div></h1>
      </header>
    </>
  )

}
