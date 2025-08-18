// "use client"

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "motion/react";


// export default function FadeImage() {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const images = [
//         '/LandingPage/hero_image.webp',
//         '/LandingPage/hero_image2.jpg',
//         '/LandingPage/hero_image3.jpg',
//         '/LandingPage/hero_image4.jpg',
//     ]

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) =>
//                 prevIndex === images.length - 1 ? 0 : prevIndex + 1
//             );
//         }, 3000);

//         return () => clearInterval(interval)
//     }, [images.length])

//     return (
//         <AnimatePresence mode="wait">
//             <motion.div
//                 key={currentIndex} // ensures AnimatePresence detects change
//                 initial={{ opacity: 0.5 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0.5 }}
//                 transition={{ duration: .2 }}
//             >
//                 <Image src={images[currentIndex]} priority={true} alt="Hero Image" className="max-md:h-[350px] h-[600px] max-md:object-cover object-cover border-2 border-truffle-green-dark rounded-[60px] max-md:rounded-[40px]" width={2134} height={1032} />
//             </motion.div>
//         </AnimatePresence >
//     )
// }

"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";


export default function FadeImage() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        '/LandingPage/hero_image.webp',
        '/LandingPage/hero_image2.jpg',
        '/LandingPage/hero_image3.jpg',
        '/LandingPage/hero_image4.jpg',
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval)
    }, [images.length])

    return (
        <div className="relative w-full h-[600px] max-md:h-[350px] overflow-hidden">
            <AnimatePresence>
                <motion.div
                    key={images[currentIndex]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <Image
                        src={images[currentIndex]}
                        alt="Hero Image"
                        fill
                        priority
                        className="object-cover border-2 border-truffle-green-dark rounded-[60px] max-md:rounded-[40px]"
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    )
}