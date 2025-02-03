import { images } from "@/constants/images";
import Image from "next/image";
import { memo } from "react";
import { NavbarLinkContainer } from "./NavbarLinkContainer";
import DarkModeToggle from "../DarkModeToggle";

const Navbar = () =>{
    return (  
        <div className="flex justify-between items-center bg-secondary dark:bg-dark py-[14px] mb-[10px] mx-[80px] border-[1px] border-primary/90 mt-[20px] rounded-[10px]">
            
            <Image
                alt="Viatick"
                src={images.logo}
                width={100}
                height={100}
                className="w-[200px] h-[50px] ml-[20px] block dark:hidden"
            />

            <Image
                alt="Viatick"
                src={images.darkLogo}
                width={100}
                height={100}
                className="w-[200px] h-[50px] ml-[20px] hidden dark:block"
            />
            
            <NavbarLinkContainer />
            <DarkModeToggle />
        </div> 
    )
}

export default memo(Navbar);