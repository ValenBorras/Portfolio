"use client"
import React, {useState}from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData= [
    {
        id:1,
        title:"Proyecto 1",
        description:"Descripcion del proyecto 1",
        image:"/img/enProgreso.png",
        tag: ["All", "C"],
        gitUrl:"/",
        previewUrl:"/",
    },
    {
        id:2,
        title:"Proyecto 2",
        description:"Descripcion del proyecto 2",
        image:"/img/enProgreso.png",
        tag: ["All", "React"],
        gitUrl:"/",
        previewUrl:"/",
    },
    {
        id:3,
        title:"Proyecto 3",
        description:"Descripcion del proyecto 3",
        image:"/img/enProgreso.png",
        tag: ["All", "Python"],
        gitUrl:"/",
        previewUrl:"/",
    },
    {
        id:4,
        title:"Proyecto 4",
        description:"Descripcion del proyecto 4",
        image:"/img/enProgreso.png",
        tag: ["All", "React"],
        gitUrl:"/",
        previewUrl:"/",
    },
    {
        id:5,
        title:"Proyecto 5",
        description:"Descripcion del proyecto 5",
        image:"/img/enProgreso.png",
        tag: ["All", "React"],
        gitUrl:"/",
        previewUrl:"/",
    },
    {
        id:6,
        title:"Proyecto 6",
        description:"Descripcion del proyecto 6",
        image:"/img/enProgreso.png",
        tag: ["All", "C"],
        gitUrl:"/",
        previewUrl:"/",
    }
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    
    const handleTagChange = (newTag)=> {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project)=>
        project.tag.includes(tag)
    )
  return (
    <>
    <div >
        <h2 className='text-4xl font-bold text-white mb-8 mt-4 text-center' id='proyectos'>
            Mis Proyectos
        </h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <ProjectTag onClick={handleTagChange} name='All' isSelected={tag === 'All'}/>
            <ProjectTag onClick={handleTagChange} name='React' isSelected={tag === 'React'}/>
            <ProjectTag onClick={handleTagChange} name='C' isSelected={tag === 'C'}/>
            <ProjectTag onClick={handleTagChange} name='Python' isSelected={tag === 'Python'}/>
        </div>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filteredProjects.map((project)=> <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl}/>)}
        </div>
    </div>
    </>
  )
}

export default ProjectSection