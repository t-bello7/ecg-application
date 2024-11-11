import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { useWindowDimensions } from "../../hooks";
import { JhydeLogo, JhydeBlackLogo } from "../../assets/images";
import { MenuSvg } from "../../assets/icons";

const listVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "string", stiffness: 300, damping: 24 }
    },
    close: {
        opacity: 0,
        y: 20,
        transition: { duration: 0.2 }
    }
}

const Path = (props: any) => (
    <path
      fill="transparent"
      strokeWidth="3"
      stroke="var(--background)"
      strokeLinecap="round"
      {...props}
    />
  );
  

const Nav = ({ className }: {className?: string}) => {
    const [ isOpen, setIsOpen ] = useState<boolean>(false);
    const { isMobile } = useWindowDimensions()
    return (
        <motion.section
        initial={false}
        animate={ !isMobile || isOpen ? "open" : "close" }
        className=" min-h-screen grid justify-between">
            <MenuSvg 
            onClick={() => setIsOpen(!isOpen)}
            className='w-[2ch] h-[2ch] absolute top-10 left-10 z-50 md:hidden' />
            <motion.div 
            variants= {{
                open: {
                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.7,
                      delayChildren: 0.3,
                      staggerChildren: 0.05
                    }
                  },
                  closed: {
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.3
                    }
                  }
            }}
            className="grid md:grid-cols-3"
            >
                <motion.img src={JhydeLogo} alt="Jhyde Logo" variants={listVariants} className=" w-[20vh]" />

                <nav  className={`mx-auto   ${className}`} >
                    <ul className="text-center md:flex gap-4">
                        <motion.li variants={listVariants}> about </motion.li>
                        <motion.li variants={listVariants}> locations </motion.li>
                        <motion.li variants={listVariants}> collaborations </motion.li>
                        <motion.li variants={listVariants}> barbers </motion.li>
                    </ul>
                </nav>

                <ul className=" text-center">
                    <motion.li variants={listVariants}> Book an appointment</motion.li>
                </ul>
            </motion.div>
            
        </motion.section>
    )
}

export default Nav;