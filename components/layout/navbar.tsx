import { images } from "@/constants/images"
import Image from "next/image"
import { memo } from "react";

const Navbar = () =>{

    const links = [
        {
          href: "/",
          text: "Home",
        },
        {
          href: "/",
          text: "JARVIS"
        },
        {
          href: "/",
          text: "Developers",
        },
        {
          href: "/",
          text: "Company"
        },
        {
            href: "/",
            text: "News"
        },
        {
            href: "/",
            text: "Sign In "
        },
    ];


    return (  
        <div className="flex justify-between bg-secondary py-[14px] px-[80px]">
            <Image
                alt="Viatick"
                src={images.logo}
                width={100}
                height={100}
                className="w-[200px] h-[50px]"
            />
            <div className="flex justify-center items-center">
                {
                    links.map((link, index) => (
                      <div key={index} className="mx-[15px] text-black text-[17px]">
                        {link.text}
                      </div>
                    ))
                }
            </div>
        </div> 
    )
}

export default memo(Navbar);