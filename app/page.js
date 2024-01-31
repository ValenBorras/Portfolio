import Image from 'next/image'
import HeaderSection from './components/HeaderSection'
import NavBar from './components/NavBar'
import AboutSection from './components/AboutSection'
import ProjectSection from './components/ProjectSection'
import AbilitiesSection from './components/AbilitiesSection'
import Footer from './components/Footer'
import ContactSection from './components/ContactSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <NavBar/>
      <div className='container mt-24 mx-auto px-12 py-4'>
        <HeaderSection/>
        <AboutSection/>
        <ProjectSection/>
        <AbilitiesSection/>
        <ContactSection/>
      </div>
        <Footer/>
    </main>
  )
}
