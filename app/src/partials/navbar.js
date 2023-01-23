/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import useWindowDimensions from "../hooks/use-window-dimensions";
import { useEffect } from "react";
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Navbar = () => {
    const { width, height } = useWindowDimensions();

    useEffect(() => {
        const nav = document.querySelector(".nav");
        window.onscroll = function () {
            var top = window.scrollY;
            if (top > 800) {
                nav.classList.add("nav-unhide")
            } else {
                nav.classList.remove("nav-unhide")
            }
        };
    })
    return (
        <>
            {width > 768 ? (
                <div className="nav block nav-rotate ">
                    <ul className="font-semibold tracking-wider" >
                        <li className="inline-block px-5">
                            <a className="text-[22px] text-[#797979] hover:text-[#F806CC] hover:cursor-pointer active:text-[#F806CC]" href="#contact-form">Contact</a>
                        </li>
                        <li className="inline-block px-5">
                            <a className="text-[22px] text-[#797979] hover:text-[#F806CC] hover:cursor-pointer active:text-[#F806CC]" href="#my-work">My Work</a>
                        </li>
                        <li className="inline-block px-5">
                            <a className="text-[22px] text-[#797979] hover:text-[#F806CC] hover:cursor-pointer active:text-[#F806CC]" href="#home">Home</a>
                        </li>
                        <li className="inline-block px-5">
                            <a className="text-[22px] text-[#797979] hover:text-[#F806CC] hover:cursor-pointer active:text-[#F806CC]" href="https://github.com/ddzik19?tab=repositories" rel="noreferrer" target="_blank"><BsGithub size={30} /></a>
                        </li>
                        <li className="inline-block px-5">
                            <a className="text-[22px] text-[#797979] hover:text-[#F806CC] hover:cursor-pointer active:text-[#F806CC]" href="https://www.linkedin.com/in/damian-dzik-35b8b41b9/" rel="noreferrer" target="_blank"><BsLinkedin size={30} /></a>
                        </li>
                    </ul>
                </div>
            ) : (
                <></>
            )
            }
        </>
    )
}

export default Navbar;