import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <Link href={"/"} className='text-l md:text-lg text-white font-semibold flex flex-row'>
                    VB 
                    <p className="rounded text-30xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">.</p>
      </Link>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;