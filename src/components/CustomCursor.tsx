"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useVelocity, useTransform } from "framer-motion";

export default function CustomCursor() {
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // High performance motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Primary smooth spring for lagging effect
  const springConfig = { damping: 25, stiffness: 450, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  // Secondary spring for trail 1
  const springTrail1 = { damping: 30, stiffness: 300, mass: 0.8 };
  const trail1X = useSpring(cursorX, springTrail1);
  const trail1Y = useSpring(cursorY, springTrail1);

  // Tertiary spring for trail 2
  const springTrail2 = { damping: 40, stiffness: 200, mass: 1.2 };
  const trail2X = useSpring(cursorX, springTrail2);
  const trail2Y = useSpring(cursorY, springTrail2);

  // Velocity tracking for movement animation
  const velocityX = useVelocity(smoothX);
  
  // Transform velocity into rotation (-45 deg when moving fast left, 45 deg when moving fast right)
  const rotationTransform = useTransform(velocityX, [-1500, 0, 1500], [-40, 0, 40]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX - 12); // Offset to center the glove
      cursorY.set(e.clientY - 12);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target?.closest("a, button, input, [role='button']")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Trail 2 */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ x: trail2X, y: trail2Y, rotate: rotationTransform }}
        animate={{ opacity: isHovering || isClicking ? 0 : 0.2, scale: 0.6 }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.5 4V2.5C14.5 1.67157 13.8284 1 13 1H7C6.17157 1 5.5 1.67157 5.5 2.5V4M5.5 4H14.5M5.5 4C4.11929 4 3 5.11929 3 6.5V11.5C3 12.8361 3.25055 14.1561 3.73145 15.3853L5.5 19.9079C6.01524 21.2251 7.29177 22.081 8.70014 22.081C9.64552 22.081 10.5513 22.0305 11.2307 21.5776C12.5517 20.697 13.9103 19.3486 14.8698 17.5843C15.9328 15.6293 16.5 13.5654 16.5 11.5V6.5C16.5 5.11929 15.3807 4 14.5 4ZM16.5 7H18.5C19.8807 7 21 8.11929 21 9.5V10.5C21 11.8807 19.8807 13 18.5 13H16.5" fill="#cc1a1a"/>
        </svg>
      </motion.div>

      {/* Trail 1 */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ x: trail1X, y: trail1Y, rotate: rotationTransform }}
        animate={{ opacity: isHovering || isClicking ? 0 : 0.4, scale: 0.8 }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.5 4V2.5C14.5 1.67157 13.8284 1 13 1H7C6.17157 1 5.5 1.67157 5.5 2.5V4M5.5 4H14.5M5.5 4C4.11929 4 3 5.11929 3 6.5V11.5C3 12.8361 3.25055 14.1561 3.73145 15.3853L5.5 19.9079C6.01524 21.2251 7.29177 22.081 8.70014 22.081C9.64552 22.081 10.5513 22.0305 11.2307 21.5776C12.5517 20.697 13.9103 19.3486 14.8698 17.5843C15.9328 15.6293 16.5 13.5654 16.5 11.5V6.5C16.5 5.11929 15.3807 4 14.5 4ZM16.5 7H18.5C19.8807 7 21 8.11929 21 9.5V10.5C21 11.8807 19.8807 13 18.5 13H16.5" fill="#cc1a1a"/>
        </svg>
      </motion.div>

      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[10000] pointer-events-none flex items-center justify-center transition-shadow duration-300"
        style={{
          x: smoothX,
          y: smoothY,
          rotate: rotationTransform,
          filter: isHovering ? "drop-shadow(0 0 16px rgba(230,40,40,0.9))" : "drop-shadow(0 0 12px rgba(204,26,26,0.65))"
        }}
        animate={{
          scale: isClicking ? 0.7 : (isHovering ? 1.25 : 1),
          // Override rotation specifically on click for a "punch" tilt
          rotate: isClicking ? -25 : undefined,
        }}
        transition={{ type: "spring", stiffness: 450, damping: 20 }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.5 4V2.5C14.5 1.67157 13.8284 1 13 1H7C6.17157 1 5.5 1.67157 5.5 2.5V4M5.5 4H14.5M5.5 4C4.11929 4 3 5.11929 3 6.5V11.5C3 12.8361 3.25055 14.1561 3.73145 15.3853L5.5 19.9079C6.01524 21.2251 7.29177 22.081 8.70014 22.081C9.64552 22.081 10.5513 22.0305 11.2307 21.5776C12.5517 20.697 13.9103 19.3486 14.8698 17.5843C15.9328 15.6293 16.5 13.5654 16.5 11.5V6.5C16.5 5.11929 15.3807 4 14.5 4ZM16.5 7H18.5C19.8807 7 21 8.11929 21 9.5V10.5C21 11.8807 19.8807 13 18.5 13H16.5" stroke="#cc1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={isHovering ? "#ff3333" : "#cc1a1a"} fillOpacity={isHovering ? "0.7" : "0.4"}/>
        </svg>
      </motion.div>
    </>
  );
}
