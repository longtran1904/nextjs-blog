import Image from "next/image";

const authorName = "long tran";
export default function About() {

    return (
        <div className="">
            {/* Name and Avatar */}    
            <div className="flex flex-col md:flex-row w-screen relative h-auto px-24 items-center gap-12">
                <div className="flex justify-center text-center md:basis-1/3 h-full">
                    <Image  
                        className="text-6xl rounded-full md:rounded-md object-fit"
                        src='/images/profile_2.jpg' 
                        width={300} 
                        height={300}
                        alt="No Image Loaded"
                        priority
                    />
                </div>
                <div className=" md:basis-2/3 flex flex-col gap-4 py-2 text-md items-center min-h-full text-gray-800 md:leading-8">
                    <h2 className="text-3xl font-burtons dark:text-orange-400">
                        {authorName}
                    </h2>
                    <article className="h-auto dark:text-slate-50 flex flex-col gap-3">
                        <p>
                            <span role="img">👋</span>Hi, I'm Long. I'm a senior at Rutgers University - New Brunswick
                            I'm pursuing a BS degree in Computer Science with an expected graduation in December 2023. 
                            What I'm most passionate about are cultivating technical solutions to real-world problems, 
                            advocating sustainability, and building community-driven applications. 
                        </p>
                        <p>
                            <span role="img">🌊</span>I appreciate every challenge I
                            came across that helped cultivate my self-efficacy in
                            this risk-taking world. Being a computer science student who is 
                            enthusiastic about tackling real-world issues, I used to come up with 
                            numerous software concepts to enhance people's lives in various domains. 
                            Nevertheless, my friends and I were unsuccessful in transforming 
                            those ideas into significant products. As a result, I now have 
                            a strong urge to expand my knowledge on software development.
                        </p>   
                        <p>
                            <span role="img">🌿</span>
                            I learned the importance of staying open-mind to look at many different 
                            aspects of a problem. Whether those problems are adapting new technology 
                            or framework to our product, implementing complex algorithms and solve company's 
                            massive problem, or launching and maintaining a web app. The key of success is the 
                            flexibility of our mind and our will to trial and error. I feel highly motivated as 
                            I discover new tools and ideas to improve our solutions and bring results 
                            that beyond satisfiable to people whom using my products.
                        </p>                         
                        
                        {/* <p>
                            <span role="img">🌿</span>I love to organize my room on
                            a regular basis. Such habit transfers to my every aspect
                            of life. I always try to start the day with a
                            goal-oriented mindset and bring my organized
                            characteristics to the work I do for maximum
                            productivity. Rather than following rigid approaches, I
                            prefer to strive to expand my comfort zone and adopt
                            unconventional methods to build sustainable solutions.
                        </p> */}
                        <p>
                            <span role="img">🌤</span>What compels me to wake up for
                            work and become fully charged for the day is knowing I
                            have another chance to bring warmth and friendship to my
                            community. I thrive in jobs that foster diversity and
                            culture, enjoying collaborations with people from
                            different walks of life for a shared mission. Not only
                            do I see it as a chance to accumulate new knowledge, but
                            also to deeply connect with others through their
                            different views at problems. I aim to be a team player,
                            be in tune with the emotional needs of those around me,
                            and thrive on positive reinforcement.
                        </p>
                        <p>
                            <span role="img">👾</span>Competencies: OOP Solid Principles in Java/C#
                            full-stack web development, MERN stack, Testing and Deploying Products
                        </p>    
                      </article>
                </div> 

            </div>
            <hr className="my-2"/>  
        </div>
    )
};
