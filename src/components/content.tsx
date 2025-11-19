import ExperienceItem from "../components/experienceItem";
import experiences from "../resources/experiences";

export default function Content() {

  return (
    <>
      <main className="flex flex-col rounded-tr-md rounded-br-md h-[calc(100vh-1rem)] px-2.5 py-2 w-screen mr-2 mt-2 mb-2 bg-stone-300">
        <div className="flex flex-col p-1 border-b border-black" id="resumo">
          <h1 className="text-xl text-black rounded-md">Resumo</h1>
          <p>
            Programador com experiência em diversas linguagens de programação como por exemplo: Javascript, Typescript, Rust, Go (Golang),
            PHP e C (neste último ainda aprendendo). Tive três experiências profissionais completas até o momento, trabalhando com boa parte
            das linguagens citadas e em meu tempo livre utilizando-se de minhas habilidades em meus repositórios do&nbsp;
            <a className="text-emerald-950 duration-200 transition-all hover:text-emerald-600" target="_blank" href="https://github.com/NickRMD">GitHub</a>.
          </p>
        </div>
        <div className="p-1">
          <h2 className="text-xl">Experiências profissionais</h2>
          <ul className="flex gap-2 flex-col">
            {
              experiences.map(
                (exp, i) => <
                  ExperienceItem
                  key={i}
                  className={`text-base ${experiences[i+1] ? "border-b pb-1" : null}`}
                  project={exp.project}
                  description={exp.description}
                  months={exp.months}
                  start={exp.start}
                />
              )
            }
          </ul>
        </div>
      </main>
    </>
  )

}
