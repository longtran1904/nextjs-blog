import Card from "../components/Card"
export default function Projects({projects, work}){
    return(
        <>
            <h1 className="text-3xl my-1 mx-12 dark:text-slate-50">Projects</h1>
            <div className="mx-12 mb-3 text-center md:flex gap-10 ">
                {projects.map((project) => (
                    <Card param='projects' info={project}/>
                ))}
            </div>
            <h1 className="text-3xl my-1 mx-12 dark:text-slate-50">Work</h1>
            <div className="mx-12 mb-3 grid grid-rows-1 gap-4 text-center">
                {work.map((work) => (
                    <Card param='work' info={work}/>
                ))}
            </div>
        </>
    )
}