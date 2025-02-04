import { FaCircleArrowRight } from "react-icons/fa6";

const ContactUsButton = () => {
    return(
        <div className="mt-[20px] cursor-pointer">
            <span className="text-[20px] border-[1px] rounded-[25px] border-primary/90 text-gradient font-bold px-[10px] py-[5px] inline-flex items-center gap-2 group hover:italic transition-transform duration-2000 font-SofiaSans">
                Contact Us
                <FaCircleArrowRight
                    size={20}
                    className="text-primary mx-[5px] group-hover:-rotate-45 transition-transform duration-1000"
                />
            </span>
        </div>
    )
}

export default ContactUsButton;