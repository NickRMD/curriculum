import ExperienceItem from "../components/experienceItem";
import experiences from "../resources/experiences";

export default function Content() {

  return (
    <>
      <main className="flex flex-col rounded-tr-md rounded-br-md h-[calc(100vh-1rem)] px-2.5 py-2 w-screen mr-2 mt-2 mb-2 bg-stone-300">
        <div className="flex flex-col p-1 border-b border-black" id="resumo">
          <h1 className="text-xl text-black rounded-md">Professional Summary</h1>
          <p>
            Programmer with experience in several languages, including JavaScript, TypeScript, Rust, Go (Golang), PHP, 
            and C (currently still learning the latter). I have had two full professional experiences so far, working with at least
            some of the languages mentioned. In my free time, I apply my skills to my&nbsp;
            <a target="_blank" className="text-emerald-900" href="https://github.com/NickRMD">GitHub</a> repositories.
          </p>
        </div>
        <div className="p-1">
          <h2 className="text-xl">Professional experiences</h2>
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
                />
              )
            }
          </ul>
        </div>
      </main>
    </>
  )

}
