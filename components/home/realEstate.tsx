import Image from "next/image";

const RealEstate = () => {
    return (
        <div className="mt-[50px] flex flex-wrap items-center " >
            <div className="mt-[50px] w-full max-w-full  px-[15px] lg:!order-2 lg:w-7/12 lg:px-[20px] xl:!order-2 xl:w-7/12 xl:px-[35px]">
                <div className="mx-[-15px] mt-[-25px] flex flex-wrap md:mx-[-12.5px] lg:mx-[-12.5px] xl:mx-[-12.5px]">
                    
                    <div className="mt-[25px] w-full  max-w-full  !self-end px-[15px] md:!ml-[8.33333333%] md:w-5/12 md:px-[12.5px] lg:!ml-[8.33333333%] lg:w-5/12 lg:px-[12.5px] xl:!ml-[8.33333333%] xl:w-5/12 xl:px-[12.5px]" >
                        <Image
                            alt="Viatick"
                            src="/images/real_estate1.png"
                            width={100}
                            height={100}
                            className="w-[400px] h-[200px] rounded-[10px] border-[0.5px] border-blue"
                        />
                    </div>

                    <div className="mt-[25px] w-full max-w-full  !self-end px-[15px] md:w-6/12 md:px-[12.5px] lg:w-6/12 lg:px-[12.5px] xl:w-6/12 xl:px-[12.5px]">    
                        <Image
                            alt="Viatick"
                            src="/images/real_estate2.jpeg"
                            width={100}
                            height={100}
                            className="w-[400px] h-[200px] rounded-[10px] border-[0.5px] border-blue"
                        />
                    </div>

                    <div className="mt-[25px] w-full max-w-full  px-[15px] md:w-5/12 md:px-[12.5px] lg:w-5/12 lg:px-[12.5px] xl:w-5/12 xl:px-[12.5px]">
                        <Image
                            alt="Viatick"
                            src="/images/real_estate4.jpeg"
                            width={100}
                            height={100}
                            className="w-[400px] h-[200px] rounded-[10px] border-[0.5px] border-blue"
                        />
                    </div>

                    <div className="mt-[25px] w-full max-w-full  !self-start px-[15px] md:w-6/12 md:px-[12.5px] lg:w-6/12 lg:px-[12.5px] xl:w-6/12 xl:px-[12.5px]">
                        <Image
                            alt="Viatick"
                            src="/images/real_estate3.jpeg"
                            width={100}
                            height={100}
                            className="w-[400px] h-[200px] rounded-[10px] border-[0.5px] border-blue"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-[50px] w-full max-w-full  px-[15px] lg:w-5/12 lg:px-[20px] xl:w-5/12 xl:px-[35px]">
                <h3 className="mb-5  font-bold  text-primary-500 dark:text-white-200 lg:mb-9 xl:text-[1.5rem]" >    
                    About <span className="text-gradient dark:dark-text-gradient"> JARVIS </span> Real Estate Template
                </h3>
                <p className="dark:text-white text-blue">
                    JARVIS offers comprehensive solutions tailored to diverse industries, supported by its versatile templates and intuitive interface. With adaptable hardware options and proven deployment strategies, our platform facilitates seamless reporting and analysis on the cloud.
                </p>

                <p className="dark:text-white text-blue mt-[20px]">
                    Jarvis offers a comprehensive suite of solutions tailored to various needs, particularly focused on sensory monitoring for accident prevention, data oversight for analysis, trend monitoring, and AI prediction. This diversity in templates indicates a versatile approach to addressing different scenarios and requirements, ensuring robust monitoring and predictive capabilities across various domains.
                </p>
            </div>
        </div>
    )
}

export default RealEstate;