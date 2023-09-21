"use client";

import { motion, useScroll, useTransform, MotionProps } from "framer-motion";

interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
  offset?: number;
  motionProps?: MotionProps;
}

export default function AnimatedContainer({
  ...props
}: AnimatedContainerProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [600, -100]);

  return (
    <motion.div
      style={{ y }}
      className={props.className}
    //   initial={props.motionProps?.initial}
    //   animate={props.motionProps?.animate}
    >
      {props.children}
    </motion.div>
  );
}
