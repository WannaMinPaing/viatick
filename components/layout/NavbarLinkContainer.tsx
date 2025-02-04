import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { TargetAndTransition } from "framer-motion";
import { navbarlinks } from "@/data/navbarlinks";
import { MdOutlineMenu } from "react-icons/md";
import { GiTireIronCross } from "react-icons/gi";

interface PositionType {
    left: number;
    width: number;
    opacity: number;
}

interface TabProps {
    children: React.ReactNode;
    setPosition: React.Dispatch<React.SetStateAction<PositionType>>;
}

export const NavbarLinkContainer = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative w-full">
            <button 
                className="sm:hidden p-2  absolute right-3 -top-[40px]" 
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <GiTireIronCross size={18} className="dark:text-white text-blue" /> : <MdOutlineMenu size={24} className="dark:text-white text-blue" />}
            </button>
            <div className={`grid place-content-center max-sm:mt-[20px] ${isOpen ? "block" : "hidden"} sm:block`}>
                <SlideTabs />
            </div>
        </div>
    );
};

const SlideTabs = () => {
    const [position, setPosition] = useState<PositionType>({
        left: 0,
        width: 0,
        opacity: 0,
    });

    return (
        <ul
            onMouseLeave={() => {
                setPosition((prev) => ({
                    ...prev,
                    opacity: 0,
                }));
            }}
            className="relative mx-auto flex flex-col sm:flex-row w-full sm:w-fit p-1 justify-center items-center"
        >
            {navbarlinks.map((link, index) => (
                <Tab key={index} setPosition={setPosition}>{link.text}</Tab>
            ))}
            <Cursor position={position} />
        </ul>
    );
};

const Tab = ({ children, setPosition }: TabProps) => {
    const ref = useRef<HTMLLIElement | null>(null);
    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref.current) return;
                const { width } = ref.current.getBoundingClientRect();
                setPosition({ width, opacity: 1, left: ref.current.offsetLeft });
            }}
            className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs mix-blend-difference sm:px-5 sm:py-3 sm:text-base font-bold font-SofiaSans max-sm:text-[17px] max-sm:hover:text-primary"
        >
            {children}
        </li>
    );
};

const Cursor = ({ position }: { position: PositionType }) => {
    return (
        <motion.li
            animate={position as TargetAndTransition}
            className="absolute z-0 h-7 rounded-[20px] bg-slide-tab-background-color md:h-8 max-sm:hidden"
        />
    );
};