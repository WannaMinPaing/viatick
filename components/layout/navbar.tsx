import { images } from "@/constants/images";
import Image from "next/image";
import { memo } from "react";
import { NavbarLinkContainer } from "./NavbarLinkContainer";

const Navbar = () =>{
    return (  
        <div className="flex justify-between bg-secondary py-[14px] px-[80px]">
            <Image
                alt="Viatick"
                src={images.logo}
                width={100}
                height={100}
                className="w-[200px] h-[50px]"
            />
            <NavbarLinkContainer />
        </div> 
    )
}

export default memo(Navbar);