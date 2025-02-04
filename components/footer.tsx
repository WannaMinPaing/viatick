import Link from "next/link";

const Footer = () => {
    return (
            <div className=" bg-secondary dark:bg-dark px-[100px] mt-[100px]">
                <div className="mx-[-15px] mt-[-30px] flex flex-wrap lg:mt-0 xl:mt-0">

                    <div className="px-[15px] w-3/12">
                            <div className="text-[20px] dark:text-white text-blue">
                                Viatick Information
                            </div>
                            <div className=" text-[0.9rem] font-medium leading-[1.65] dark:text-white text-blue">
                                <div>enquiry@viatick.com</div>
                                <div>6 Yio Chu Kang Rd, Singapore 545521</div>
                            </div>
                    </div>

                    <div className=" w-9/12 flex">

                        <div className="w-3/12">
                            <div className="text-[18px] font-bold dark:text-white text-blue">
                                Solutions
                            </div>
                            <div className="">
                                <div>
                                    <Link
                                        className="dark:text-white text-blue"
                                        href="#"
                                    >
                                        Healthcare
                                    </Link>
                                </div>
                                <div className="mt-[0.35rem]">
                                    <Link
                                        className="dark:text-white text-blue"
                                        href="#"
                                    >
                                        Maritime
                                    </Link>
                                </div>
                                <div className="mt-[0.35rem]">
                                    <Link
                                        className="dark:text-white text-blue"
                                        href="#"
                                    >
                                        Logistics
                                    </Link>
                                </div>
                                <div className="mt-[0.35rem]">
                                    <Link
                                        className="dark:text-white text-blue"
                                        href="#"
                                    >
                                        Contruction
                                    </Link>
                                </div>
                                <div className="mt-[0.35rem]">
                                    <Link
                                        className="dark:text-white text-blue"
                                        href="#"
                                    >
                                        Events
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="w-3/12">
                            <div className="text-[18px] font-bold dark:text-white text-blue">
                            Platforms
                            </div>
                            <div className="">
                                <div>
                                    <Link
                                        className="dark:text-white text-blue"
                                        href="#"
                                    >
                                        JARVIS
                                    </Link>
                                </div>
                                <div className="mt-[0.35rem]">
                                    <Link
                                        className="dark:text-white text-blue"
                                        href="#"
                                    >
                                        BMS
                                    </Link>
                                </div>

                            </div>
                        </div>


                        <div className="w-3/12">
                            <div className="text-[18px] font-bold dark:text-white text-blue">
                                Resources
                            </div>
                            <div className="">
                                <div>
                                    <Link
                                        className="dark:text-white text-blue"
                                        href="#"
                                    >
                                        Developers
                                    </Link>
                                </div>
                                <div className="mt-[0.35rem]">
                                    <Link
                                        className="dark:text-white text-blue"
                                        href="#"
                                    >
                                        T&C
                                    </Link>
                                </div>
                               
                            </div>
                        </div>

                        <div className="w-3/12">
                            <div className="text-[18px] font-bold dark:text-white text-blue">
                            About Us
                            </div>
                            <div className="">
                                <div>
                                    <Link
                                        className="dark:text-white text-blue"
                                        href="#"
                                    >
                                        Company
                                    </Link>
                                </div>
                                <div className="mt-[0.35rem]">
                                    <Link
                                        className="dark:text-white text-blue"
                                        href="#"
                                    >
                                        News
                                    </Link>
                                </div>
                                <div className="mt-[0.35rem]">
                                    <Link
                                        className="dark:text-white text-blue"
                                        href="#"
                                    >
                                        FAQ
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>  
                </div>

                <hr className="mt-[30px] mb-7 "/>

                <div className="flex w-full justify-center max-lg:flex-col">
                    <p className="w-1/3 text-nowrap text-center max-lg:w-full max-lg:text-left dark:text-white text-blue mb-7">
                        © 2024 Beyond CodeInfinity. All rights reserved.
                    </p>
                </div>
            </div>
    )
}

export default Footer;