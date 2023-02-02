import Image from "next/image";

const authorName = "Long Tran";
export default function About({buttons}) {
    return (
        <div className="">
            {/* Name and Avatar */}    
            <div className="relative py-4 h-auto flex flex-col items-center">
                <h1>
                    {authorName}
                </h1>
                <Image  
                    className="rounded-full my-3 mx-1"
                    src='/images/profile.jpeg' 
                    width={140} height={140}
                    alt="Avatar"
                />
                <p className="py-2 flex text-sm text-center items-center justify-center h-auto">Hi, my name is Long Tran and I'm a full stack developer/product builder. Welcome to my personal website!</p> 

            </div>
            <hr className="my-2"/>  
        </div>
    )
};
