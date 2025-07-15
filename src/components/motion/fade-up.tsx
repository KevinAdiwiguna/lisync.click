"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

export const FadeUpWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
            viewport={{ once: true }}
			variants={{
				hidden: {},
				visible: { transition: { staggerChildren: 0.15 } },
			}}
		>
			{children}
		</motion.div>
	);
};

export const FadeUpItem = ({ children }: { children: ReactNode }) => {
	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, y: 40 },
				visible: { opacity: 1, y: 0 },
			}}
			transition={{ duration: 0.8, ease: "easeOut" }}
		>
			{children}
		</motion.div>
	);
};
