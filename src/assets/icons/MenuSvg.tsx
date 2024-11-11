
import { useState } from "react"
import { motion } from "framer-motion"

const MenuMotion = {
    initial: {
        scale: 0
    },
    hover: {
        scale: 0.2
    },
    tap: {
        scale: 0.5
    }
}

const bar1Motion = {
    initial: {
        x: 0
    },
    hover: {
        x: 10
    },
   
}

const bar2Motion = {
    initial: {
        x: 0
    },
    // hover: {
    //     x: -10
    // },
    // tap: {
    //     x: -20
    // }
}

const bar3Motion = {
    initial: {
        x: 0
    },
    hover: {
        x: 10
    },
    tap: {
        x: 30
    }
}

const barOpen1Motion = {
    initial: {
        rotate: -30
    },
    // hover: {
    //     rotate: 360
    // },
}

const barOpen3Motion = {
    initial: {
        rotate: -30
    },
    // hover: {
    //     rotate: 360
    // }
}
const MenuSvg = ({className, onClick}: {className: string, onClick: () => void}) => {

    return (
        <button
            className={` ${className}`}
            onClick={onClick}
        >
        <motion.svg
        fill="#000000" 
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        initial="initial"
        whileHover="hover"
        className='w-full h-full absolute'
        >
            <motion.path
                id="bar-1" d="M.5 3.6h15v1.25H.5zm0"
                animate={''}
            />
            <motion.path id="bar-2" d="M.5 7.42h15v1.25H.5zm0"
            />
            <motion.path id="bar-3" d="M.5 11.24h15v1.25H.5zm0"
            />
        </motion.svg>


    {/* <motion.svg className={'absolute'} viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Dribbble-Light-Preview" transform="translate(-419.000000, -240.000000)" fill="#000000">
                <g id="icons" transform="translate(56.000000, 160.000000)">
                    <polygon id="close-[#1511]" points="375.0183 90 384 98.554 382.48065 100 373.5 91.446 364.5183 100 363 98.554 371.98065 90 363 81.446 364.5183 80 373.5 88.554 382.48065 80 384 81.446">

                    </polygon>
                </g>
            </g>
        </g>
    </motion.svg> */}
    </button>
    )
}

export default MenuSvg
