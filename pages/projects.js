import Card from "../components/Card"
import { getSortedPostsData } from "../lib/posts"
export default function Projects({projects, work}){
    return(
        <>
        <div className="px-48">
            <h1 className="text-center my-5">Work</h1>
            <div className="mx-6 mb-3 grid grid-rows-1 gap-4">
                {work.map((work) => (
                    <Card param='work' info={work}/>
                ))}
            </div>
            <h1 className="text-center my-5">Projects</h1>
            <div className="mx-6 mb-3 grid grid-rows-1 gap-4">
                {projects.map((project) => (
                    <Card param='projects' info={project}/>
                ))}
            </div>
        </div>
        </>
    )
}

export async function getStaticProps(){
    const projects = getSortedPostsData('/content/projects')
    const work = getSortedPostsData('/content/work')
    //console.log(projects)
    return {
        props: {
            projects,
            work
        }
    }
}