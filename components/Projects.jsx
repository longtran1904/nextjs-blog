import Card from "../components/Card"
export default function Projects({projects, work}){
    return(
        <>
            <h1 className="text-3xl my-1 mx-12 dark:text-slate-50">Work</h1>
            <div className="mx-12 mb-3 text-center gap-10 lg:flex">
                {work.map((work) => (
                    <Card param='work' info={work}/>
                ))}
            </div>
            <h1 className="text-3xl my-1 mx-12 dark:text-slate-50">Projects</h1>
            <div className="mx-12 mb-3 text-center gap-10 lg:flex">
                {projects.map((project) => (
                    <Card param='projects' info={project}/>
                ))}
            </div>
        </>
    )
}