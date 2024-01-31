'use client'
import React,{useState, useTransition}from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA =[
    {
        title:"Educacion",
        id:"education",
        content:(
            <ul className='list-disc pl-2'>
                <li>Universidad de Palermo, Ingenieria en Inteligencia Artificial - Marzo 2023, actualidad </li>
                <li>Digital House, Fullstack Web Development - Abril 2022, Noviembre 2022</li>
                <li>Coder House, React - Enero 2023, Marzo 2023</li>
                <li>IMB Michelangelo, bachillerato con orientación en cs. sociales y humanidades - 2016, 2022</li>
            </ul>
        )
    },
    {
        title:"Certificados",
        id:"certifications",
        content:(
            <ul className='list-disc pl-2'>
                <li>Digital House, Fullstack Web Development</li>
                <li>Coder House, React</li>
                <li>Cambridge C1 Advanced CAE</li>
                <li>PLIDA B1</li>
            </ul>
        )
    },
    {
        title:"Experiencia",
        id:"experience",
        content:(
            <ul className='list-disc pl-2 pb-6'>
                <li>Grasse, Full stack web developer, Colombia - Enero 2022, Septiembre 2022</li>
                <li>Tickerana, Ticket Broker, United States - Enero 2023, Noviembre 2023</li>
                <li>Geekshive, Market Analist, United States - Diciembre 2023 - Actualidad </li>
            </ul>
        )
    },
    {
        title:"Idiomas",
        id:"idioms",
        content:(
            <ul className='list-disc pl-2 pb-6'>
                <li>Español - Nativo</li>
                <li>Ingles - C1</li>
                <li>Italiano - B1</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const[tab,setTab]= useState("experience");
    const[isPending, startTransition]= useTransition(); 
    
    const handleTabChange = (id)=> {
        startTransition(()=>{
            setTab(id);
        });
    };
  return (
    <section className='text-white' id='sobreMi'>
        <div className='md:grid md:grid-cols-3 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/img/about-image.png" width={400} height={400}/>
            <div className='col-span-2 mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4' >
                    Sobre mi
                </h2>
                <p className='text-base lg:text-lg'>
                Me considero una persona proactiva, autodidacta y resolvente, con una firme capacidad para abordar desafíos y encontrar soluciones innovadoras. Tengo un enfoque orientado a resultados y una gran habilidad para aprender de manera independiente, estas caracteristicas me permiten adaptarme rápido a nuevas situaciones y ambientes. Estoy comprometida con la excelencia, la autocrítica y la mejora continua, aportando una mentalidad proactiva y un alto nivel de autonomía a cualquier equipo o proyecto en el que participe. 
                </p>
                <div className='flex flex-row  mt-8'>
                    <TabButton 
                    selectTab={()=> handleTabChange("experience")} 
                    active={tab === "experience"}>
                        Experiencia
                    </TabButton>
                    <TabButton 
                    selectTab={()=> handleTabChange("education")} 
                    active={tab === "education"}>
                        Educacion
                    </TabButton>
                    <TabButton 
                    selectTab={()=> handleTabChange("certifications")} 
                    active={tab === "certifications"}>
                        Certificados
                    </TabButton>
                    <TabButton 
                    selectTab={()=> handleTabChange("idioms")} 
                    active={tab === "idioms"}>
                        Idiomas
                    </TabButton>
                </div>
                <div className='mt-8 mb-5 h-20 '>

                    {TAB_DATA.find((t)=>t.id === tab).content}

                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection