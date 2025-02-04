'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { questionAndAnswers } from "@/data/faq";

const FrequentlyAskedQuestion = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <div className="my-[50px] flex items-center justify-between mx-[20px] max-xl:flex-col-reverse">
    
            <div className=" w-1/2 mr-[50px] max-xl:w-full max-xl:mt-[50px] max-xl:mx-[10px]">
                <h3 className="mb-5 text-[calc(1rem_+_0.66vw)] font-bold !leading-[1.3] text-primary-500 dark:text-white-200 lg:mb-9 xl:text-[1.5rem]">
                    <span className="text-gradient dark:dark-text-gradient">The Facts, </span> you want to know
                </h3>

                {questionAndAnswers.map((questionAndAnswer, index) => (
                    <div key={index}>
                        <button onClick={() => toggleFAQ(index)} className="pt-[5px] text-white flex justify-center items-center">
                            <span className="dark:text-white text-blue font-bold font-SofiaSans text-left">{questionAndAnswer.question}</span>
                            <FaChevronDown 
                                className={`w-[15px] h-[15px] ml-[10px] text-primary transition-transform duration-200 ${openFAQ === index ? "rotate-45" : ""}`} 
                            />
                        </button>

                        <motion.div
                            initial={{ opacity: 0, maxHeight: 0 }}
                            animate={{ opacity: openFAQ === index ? 1 : 0, maxHeight: openFAQ === index ? 500 : 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="my-[10px] indent-[20px] ml-[5px] inline-block border-l-2 border-b-2 border-primary  p-[30px] dark:text-white text-blue">
                                {questionAndAnswer.answer}
                            </div>
                        </motion.div>

                    </div>
                ))}
            </div>

            <div className="w-1/2 text-center max-xl:w-full">
                <div className="mb-5 text-[calc(1rem_+_0.66vw)] font-bold !leading-[1.3] text-primary-500 dark:text-white-200 lg:mb-9 xl:text-[1.5rem]">
                    <TypingEffect />
                </div>
                <div className="text-[18px] dark:text-white text-blue">
                    VIATICK Pte. Ltd. is an aIoT company that specializes in Artificial Intelligence through IoT. Our vision is to enable companies to use their own data to perform decisions that can make them more money, save more money, or discover insights that do both.
                </div>
            </div>
        </div>
    );
};


const TypingEffect = () => {
    const text = "iatick,";
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [counter, setCounter] = useState(0);
  
    useEffect(() => {
      const typingInterval = setInterval(() => {
        if (!isDeleting) {
          if (counter < text.length) {
            setDisplayText((prev) => prev + text[counter]);
            setCounter((prev) => prev + 1);
          } else {
            setIsDeleting(true);
          }
        } else {
          if (counter > 0) {
            setDisplayText((prev) => prev.slice(0, -1));
            setCounter((prev) => prev - 1);
          } else {
            setIsDeleting(false);
          }
        }
      }, 300);
  
      return () => clearInterval(typingInterval);
    }, [counter, isDeleting, text]);
  
    return <h1 className="text-primary-500 dark:text-white-200">About <span className="text-gradient dark:dark-text-gradient">V{displayText}</span></h1>;
  };

  
export default FrequentlyAskedQuestion;
