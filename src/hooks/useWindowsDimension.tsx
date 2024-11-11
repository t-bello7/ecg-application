import { useState, useEffect } from 'react';

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    }
}

const useWindowDimensions = () => {
    const [ windowDimension, setWindowDimensions ] = useState(getWindowDimensions())
    const [isMobile, setIsMobile] = useState( windowDimension.width < 720 ? true : false)
    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions())
            if (windowDimension.width < 720) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [windowDimension])
    return {
        windowDimension,
        isMobile
    }
}

export default useWindowDimensions;