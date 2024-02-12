import React from "react"
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare, BsYoutube } from "react-icons/bs"

const projects = [
  {
    name: "Socialize",
    description:
      "Socialize is a social media platform allowing users to create posts, view content, and manage their social connections.",
    image: "/socialize.png",
    github: "https://github.com/Zavista/social-media-app",
    link: "https://youtu.be/T2ZsQprd5a8",
  },
  {
    name: "Tech Store",
    description:
      "Tech Store is an electronics e-commerce store with a visually appealing online shopping experience where users can seamlessly browse and purchase a wide range of electronics",
    image: "/techstore.png",
    github: "https://github.com/Zavista/full-stack-ecommerce",
    link: "https://youtu.be/00sVWyIE5p8",
  },
  {
    name: "My Users",
    description: "My Users is a simple user data management web app with CRUD operations.",
    image: "/myusers.png",
    github: "https://github.com/Zavista/sql-crud",
    link: "https://youtu.be/Wl8oBpGHGfg",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
                <div className="flex flex-col md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsYoutube 
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                        >
                        </BsYoutube>
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection