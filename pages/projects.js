import Image from "next/image"
import ProjectsContent from "../content/projects.json"
import { getSortedPostsData } from "../lib/posts"
export default function Projects({projects}){
    return(
        <>
        <h1 className="text-center my-5">Projects</h1>
        <div className="mx-6 mb-3 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {projects.map((project) => (
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.details.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.details['short-description']}</p>
                    <h3>
                        {project.details['start-date']}
                        {project.details['end-date'] === project.details['start-date'] ? (
                        <></>
                        ) : project.details['end-date'] === '' ? (
                        ' - Present'
                        ) : (
                        ` - ${project.details['end-date']}`
                        )}
                    </h3>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            ))}
        </div>
        </>
    )
}

export async function getStaticProps(){
    const projects = getSortedPostsData('/content/projects')
    console.log(projects)
    return {
        props: {
            projects
        }
    }
}