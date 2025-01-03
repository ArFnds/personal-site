import { motion } from "framer-motion";
import type React from "react";

interface SectionHeaderProps {
	title: string;
	subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			className="text-center mb-12"
		>
			<h2 className="text-3xl font-bold  mb-4">{title}</h2>
			{subtitle && <p className="text-xl text-muted-foreground">{subtitle}</p>}
		</motion.div>
	);
};

export default SectionHeader;
