import React from "react"
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Fakebook",
    description:
      "Fakebook is a social media platform allowing users to create posts, view content, and manage their social connections.",
    image: "/fakebook.png",
    github: "https://github.com/Zavista/social-media-app",
    link: "",
  },
  {
    name: "CRUD App",
    description: "CRUD App is an employee data management web app with CRUD operations.",
    image: "/crudapp.png",
    github: "https://github.com/Zavista/user-management",
    link: "",
  },
  {
    name: "Brewtiful",
    description:
      "Brewtiful is a coffee e-commerce store with a visually appealing online shopping experience.",
    image: "/brewtiful.png",
    github: "https://github.com/Zavista/ecommerce-app-design",
    link: "",
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
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
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