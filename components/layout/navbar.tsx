import { images } from "@/constants/images";
import Image from "next/image";
import { memo } from "react";
import { NavbarLinkContainer } from "./NavbarLinkContainer";
import DarkModeToggle from "../DarkModeToggle";

const Navbar = () =>{
    return (  
        <div className="flex flex-col lg:flex-row justify-between items-center bg-secondary dark:bg-dark py-[14px] mb-[10px] mx-[20px]  max-lg:mx-[5px] sm:mx-[80px] border-[1px] max-lg:border-[0px] border-primary/90 mt-[20px] rounded-[10px]">         
            
            <div className="flex justify-between items-center  max-lg:w-full">              
                <div></div>
                <div>
                    <Image
                        alt="Viatick"
                        src={images.logo}
                        width={100}
                        height={100}
                        className="w-[150px] h-[40px] lg:w-[200px] lg:h-[50px] ml-[20px] block dark:hidden"
                    />
                    <Image
                        alt="Viatick"
                        src={images.darkLogo}
                        width={100}
                        height={100}
                        className="w-[150px] h-[40px] lg:w-[200px] lg:h-[50px] ml-[20px] hidden dark:block"
                    />
                </div>
                <div className="block lg:hidden">
                    <DarkModeToggle />
                </div>
            </div>
                   
            <NavbarLinkContainer />
            
            <div className="max-lg:hidden">
                <DarkModeToggle />  
            </div> 
            
        </div> 
    );
}

export default memo(Navbar);
