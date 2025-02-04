import ContactUsButton from "../contactUsButton";

const Journey = () => {
    return(
            <div className="w-full  flex items-center flex-col max-md:px-[30px]">
                <div className="pt-[50px] max-sm:pt-[50px] font-bold text-[20px] text-gradient font-SofiaSans">
                    Boost your productivity
                </div>

                <div className="text-[35px] max-md:text-[25px] max-sm:text-[25px] text-blue mt-[20px] font-bold dark:text-white/80">
                    Begin Your Journey With <span className="text-gradient">Viatick</span> 
                </div>

                <div className="pt-[20px] max-sm:pt-[30px] font-bold text-[20px] text-gradient font-SofiaSans text-center">
                    Our experts are dedicated to see your project grow, scale, and be self-sustaining.
                </div>
                
                <ContactUsButton />    
            </div>

    )
}

export default Journey;