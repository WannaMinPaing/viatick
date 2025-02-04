import ContactUsButton from "../contactUsButton";

const Journey = () => {
    return(
            <div className="w-full  flex items-center flex-col">
                <div className="pt-[50px] max-sm:pt-[50px] font-bold text-[20px] text-gradient font-SofiaSans">
                    Boost your productivity
                </div>

                <div className="text-[35px] max-sm:text-[30px] text-blue mt-[20px] font-bold dark:text-white/80">
                    Begin Your Journey With <span className="text-gradient">Viatick</span> 
                </div>

                <div className="pt-[20px] max-sm:pt-[50px] font-bold text-[20px] text-gradient font-SofiaSans">
                    Our experts are dedicated to see your project grow, scale, and be self-sustaining.
                </div>
                
                <ContactUsButton />    
            </div>

    )
}

export default Journey;