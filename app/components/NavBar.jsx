"use client";
import React, {useState} from "react";
import Link from 'next/link';
import NavLink from './NavLink';
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks =[
    {
        title:"Sobre mi",
        href:"#sobreMi",
    }, 
    {
        title:"Proyectos",
        href:"#proyectos",
    }, 
    {
        title:"Habilidades",
        href:"#habilidades",
    },
    {
        title:"Contacto",
        href:"#contacto",
    } 
];

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
                <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold flex flex-row'>
                    VB 
                    <p className="rounded text-30xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">.</p>
                </Link>
                <div className='mobile-menu block md:hidden'>
                    {!navbarOpen ?(
                            <button 
                            id="nav-toggle"
                            className='flex item-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
                            onClick={()=> setNavbarOpen(true)} >
                                <Bars3Icon className='h-5 w-5'/>
                            </button>
                        ):(
                            <button 
                            className='flex item-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
                            onClick={()=> setNavbarOpen(false)} 
                            >
                                <XMarkIcon className='h-5 w-5'/>
                            </button>
                    )}
                </div>
                <div className='menu hidden md:block md:w-auto' id="navbar">
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navLinks.map((link,index) => (
                            <li key={index}>
                                <NavLink href={link.href} title={link.title}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
        </nav>
    )
}

export default NavBar