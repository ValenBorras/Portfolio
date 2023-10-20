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
                <li>Universidad de Palermo, Ingenieria en Inteligencia Artificial</li>
                <li>Digital House, Fullstack Web Development</li>
                <li>Coder House, React</li>
                <li>IMB Michelangelo, bachillerato con orientación en cs. sociales y humanidades</li>
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
            <ul className='list-disc pl-2'>
                <li>Grasse, Full stack web developer, Colombia - Enero 2022, Septiembre 2022</li>
                <li>Tickerana, Ticket Broker, United States - Enero 2023, Actualidad</li>
            </ul>
        )
    },
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
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/img/about-image.png" width={500} height={500}/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>
                    Sobre mi
                </h2>
                <p className='text-base lg:text-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum non commodi, illum et quae, at veniam repudiandae beatae quod alias, debitis ullam hic ipsam rem? Aliquam et nulla alias corporis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit suscipit modi repudiandae corrupti, maiores nulla iusto ab sapiente! Ipsa facilis rem, alias et quidem in aliquid tenetur expedita quae itaque?.
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
                </div>
                <div className='mt-8'>

                    {TAB_DATA.find((t)=>t.id === tab).content}

                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection