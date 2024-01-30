import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},
  { skill: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},
  { skill: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
  { skill: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { skill: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { skill: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"},
  { skill: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
  { skill: "Node", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},
  { skill: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},
  { skill: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},
  { skill: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},


]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is David and I am co-op student at the University of Waterloo studying Computer Science. 
            </p>
            <br />
            <p>
            I am passionate about researching problems and solving them through design while providing a seemless user experience. My experience involves crafting full-stack applications using React and Node as well as database management with MongoDB and MySQL.
            </p>
            <br />
            <p>
            I believe that you should never stop growing and that is what I strive to do. I am always looking for chances to learn and grow at software and web development, pushing myself to see what I can achieve.
        
            </p>
            
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                    <div key={idx} className="flex flex-col items-center justify-center mb-4 mr-4 w-100 h-100">                    
                        <Image src={item.image} alt={item.skill} width={70} height={70}></Image>
                        <p>{item.skill}</p>
                    </div>

                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection