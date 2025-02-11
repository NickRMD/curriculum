import ExperienceItem from "./components/experienceItem";

const experiencias = [
  {
    projeto: "WYD - With Your Destiny",
    tempo: 6,
    descricao: `
    Neste projeto fiz o uso de Next.js e Express.js usando PostgreSQL (database) para montar o site para o jogo específico em que o cliente (frontend)
    se comunicava com o servidor (backend) para buscar informações do jogador e etc. para mostrar no site e poder fazer pagamentos para
    recebimento de dinheiro próprio do jogo.
    `,
  },
  {
    projeto: "Nexsi",
    tempo: 13,
    descricao: `
    Neste outro projeto fiz o uso de Express.js, AWS (SQS e Lambda), Oracle Object Storage, Golang (linguagem de programação), React (usando Vite),
    PostgreSQL, CockroachDB e diversas outras tecnologias para codificação e documentação do sistema que conectava ERPs com a loja da Nexsi em diversos marketplaces, 
    como Mercado Livre, Magazine Luiza e outros, para venda de produtos dos usuários cadastrados na loja da Nexsi. Também iria se utilizar de inteligência artificial
    para aperfeiçoamento dos produtos, colocando informações faltantes e outros campos necessários.
    `
  }
];

export default function Content() {

  return (
    <>
      <main className="flex flex-col rounded-tr-md rounded-br-md h-[calc(100vh-1rem)] px-2.5 py-2 w-screen mr-2 mt-2 mb-2 bg-stone-300">
        <div className="flex flex-col p-1 border-b border-black" id="resumo">
          <h1 className="text-xl text-black rounded-md">Resumo</h1>
          <p>
            Programador com experiência em diversas linguagens de programação como por exemplo: Javascript, Typescript, Rust, Go (Golang),
            PHP e C (neste último ainda aprendendo). Tive duas experiências profissionais completas até o momento, trabalhando com ao menos
            algumas das linguagens citadas e em meu tempo livre utilizando-se de minhas habilidades em meus repositórios do&nbsp;
            <a target="_blank" href="">GitHub</a>.
          </p>
        </div>
        <div className="p-1">
          <h2 className="text-xl">Experiências profissionais</h2>
          <ul className="flex gap-2 flex-col">
            {
              experiencias.map(
                (exp, i) => <
                ExperienceItem 
                  key={i} 
                  className={`text-base ${experiencias[i+1] ? "border-b pb-1" : null}`} 
                  projeto={exp.projeto} 
                  descricao={exp.descricao} 
                  tempo={exp.tempo} 
                />
              )
            }
          </ul>
        </div>
      </main>
    </>
  )

}
