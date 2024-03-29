"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';


const HeaderSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-8 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                        Hola, soy {""}
                    </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            'Full stack web developer',
                            1000, 
                            'Diseñadora web',
                            1000,
                            'Estudiante de Ing. en IA',
                            1000,
                            'Valen',
                            3000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={2}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl mr-6 md:mr-10'>
                    Nada es imposible, lo importante son las ganas que tengas de cumplir con lo que te propongas. 
                </p>
                <div>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
                        Contratame
                    </button>
                    <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                            Descargue CV
                        </span>
                    </button>
                </div>
            </div>
            <div className='col-span-4 place-self-center mt-4 lg:mt-0 ml-5'>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>

                <Image src='/img/avatar.png' alt='avatar' className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' width={350} height={350}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeaderSection