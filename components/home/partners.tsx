'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import { partners } from '@/data/partners';

const Partners = () => {
  return (
    <section className="py-12">
      <div className=" mx-auto px-4">
        <h2 className="text-[25px] font-bold text-left  mb-8 dark:text-white text-blue">Our <span className="text-gradient dark:dark-text-gradient">  Partners </span></h2>
        <p className="!mb-6 dark:text-white text-blue w-1/3  max-lg:w-1/2 max-md:w-full">
            We collaborate with a diverse range of partners, including local and global entities such as government organizations and private corporations, to meet a wide variety of needs with dedication and professionalism.
        </p>
        
        <div className="flex overflow-x-auto space-x-6 py-4 scroll-smooth no-scrollbar">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <PartnerCard name={partner.name}  image={partner.image} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;

const PartnerCard = ({ name, image }: { name: string;  image: string }) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center p-2  transition-shadow duration-300 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-[150px] h-[150px] max-sm:w-[100px] max-sm:h-[100px] rounded-full overflow-hidden mb-4 border-[1px] border-primary">
        <Image src={image} alt={name} width={100} height={100}  className="object-cover w-[150px] h-[150px] max-sm:w-[100px] max-sm:h-[100px]" />
      </div>
      <div className='dark:text-white text-blue text-[14px] font-bold' >{name}</div>
    </motion.div>
  );
};
