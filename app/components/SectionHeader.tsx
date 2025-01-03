import { motion } from "framer-motion";
import React from "react";

interface SectionHeaderProps {
	title: string;
	subtitle?: string;
	h1?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
	title,
	subtitle,
	h1,
}) => {
	// biome-ignore lint/a11y/useHeadingContent: <explanation>
	const tag = h1 ? <h1 /> : <h2 />;
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			className="text-center mb-12"
		>
			{React.cloneElement(
				tag,
				{ className: "text-3xl font-bold  mb-4" },
				title,
			)}
			{subtitle && <p className="text-xl text-muted-foreground">{subtitle}</p>}
		</motion.div>
	);
};

export default SectionHeader;
