import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className=" grid grid-cols-1 my-12 md:my-12 py-24 gap-4 relative"
    >
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-96 w-96 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2">
        
        </div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Conectemos
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Actualmente estoy buscando nuevas oportunidades, mi bandeja de entrada está siempre abierta. Ya sea que tengas alguna pregunta o simplemente te quieras pasar a saludar, voy a hacer lo posible por contestar!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <FaGithub className='text-white'/>
          </Link>
          <Link href="linkedin.com">
          <FaLinkedin className='text-white' />
          </Link>
        </div>
        
      </div>
      
    </section>
  )
}

export default ContactSection