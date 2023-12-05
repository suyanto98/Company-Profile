"use client";
import Image from "next/image";
import Mylogo from "../../../public/logo-gold.png";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState("menu");

  const ToggleMenu = () => {
    const list = document.querySelector("#ToggleMenu");

    if (menu === "menu") {
      setMenu("close");
      list.classList.add("top[-80px]", "opacity-100");
    } else {
      setMenu("menu");
      list.classList.remove("top[-80x]", "opacity-100");
    }
  };

  return (
    <>
      <nav className="py-5 bg-white sticky top-0 border-b border-gray-100 z-10">
        <div className="container md:px-12 md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <Link href="#" className="flex items-center">
              <Image
                src={Mylogo}
                alt="logo"
                className="w-10 mr-3"
                placeholder="blur"
                loading="eager"
              />
              <span className="text-2xl text-gray-900 font-sans font-bold">
                Healthcare
              </span>
            </Link>
            <span className="block mx-2 text-3xl bg-gray-100 p-2 rounded-lg md:hidden">
              <FaBars onClick={ToggleMenu} />
            </span>
          </div>
          <div id="ToggleMenu" className="p-5 z-10 bg-white/80 absolute backdrop-blur py-5 opacity-0 w-full top[-400px] transition-all ease-in duration-500 md:p-0 md:flex md:items-center md-space-x-8 md:static md:w-auto md:opacity-100 ">
            <div className="md:my-0">
              <Link
                href="/"
                className="font-bold duration-500 text-gray-900 hover:text-blue-600 rounded-md p-2"
              >
                Home
              </Link>
            </div>
            <div className="my-6 md:my-0">
              <Link
                href="/services"
                className="font-bold duration-500 text-gray-900 hover:text-blue-600 rounded-md p-2"
              >
                Service
              </Link>
            </div>
            <div className="my-6 md:my-0">
              <Link
                href="/about"
                className="font-bold duration-500 text-gray-900 hover:text-blue-600 rounded-md p-2"
              >
                About Us
              </Link>
            </div>
            <div className="my-6 md:my-0 md:mr-3 lg:mr-20">
              <Link
                href="/ourteam"
                className="font-bold duration-500 text-gray-900 hover:text-blue-600 rounded-md p-2"
              >
                Our team
              </Link>
            </div>
            <Link href="#">
              <button
                type="button"
                className="w-full text-white bg-blue-600 font-medium rounded-lg px-3.5 py-2 text-center hover:bg-blue-500 hover:drop-shadow-md transition duration-300 ease-in-out"
              >
                Contact
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
