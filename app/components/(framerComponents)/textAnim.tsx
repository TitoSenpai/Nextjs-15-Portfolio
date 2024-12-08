"use client"
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import CursorBlinker from "./cursor";

// const cursorVariants = {
//     blinking: {
//       opacity: [0, 0, 1, 1],
//       transition: {
//         duration: 1,
//         repeat: Infinity,
//         repeatDelay: 0,
//         ease: "linear",
//         times: [0, 0.5, 0.5, 1]
//       }
//     }
//   };

export default function TypewriterText() {
  const strings = [
    " Software Engineer",
    " Web Developer",
    " UI/UX Designer",
    " Cloud Enthusiast",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const charIndex = useMotionValue(0);
  const currentString = strings[currentIndex];

  const displayText = useTransform(charIndex, (latest) => {
    return currentString.slice(0, Math.round(latest));
  });

  useEffect(() => {
    const controls = animate(charIndex, currentString.length, {
      type: "tween",
      duration: 1,
      ease: "linear",
      onComplete: () => {
     
        setTimeout(() => {
            const deleteAnimation = animate(charIndex, 0, {
                type: 'tween',
                duration: 1,
                ease: 'linear',
                onComplete: () => {
           
                  setTimeout(() => {
                    setCurrentIndex((prev) => (prev + 1) % strings.length);
                    charIndex.set(0);
                  }, 200); 

                }

            });


            return () => deleteAnimation.stop();

        }, 1100);


      },
    });

    return () => controls.stop();
  }, [charIndex, currentString]);


  return <span><motion.span >{displayText}
  </motion.span><CursorBlinker /></span>;
}

