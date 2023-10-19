import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/img/about-image.png" width={500} height={500}/>
            <div>
                <h2 className='text-4xl font-bold text-white mb-4'>
                    Sobre mi
                </h2>
                <p className='text-base lg:text-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum non commodi, illum et quae, at veniam repudiandae beatae quod alias, debitis ullam hic ipsam rem? Aliquam et nulla alias corporis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit suscipit modi repudiandae corrupti, maiores nulla iusto ab sapiente! Ipsa facilis rem, alias et quidem in aliquid tenetur expedita quae itaque?.
                </p>
                <div className='flex flex-row mt-8'>
                    <span>Habilidades</span>
                    <span>Educacion</span>
                    <span>Experiencia</span>
                    <span>Certificados</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection