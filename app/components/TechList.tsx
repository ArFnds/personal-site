import { motion } from "framer-motion";
import type { FC } from "react";

const TechList: FC<{ technologies: { name: string; logo: string }[] }> = ({
	technologies,
}) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<motion.ul
				initial="hidden"
				animate="visible"
				variants={{
					hidden: { opacity: 0 },
					visible: {
						opacity: 1,
						transition: {
							staggerChildren: 0.2,
						},
					},
				}}
				className="grid grid-cols-2 md:flex items-center justify-center gap-6"
			>
				{technologies.map((tech) => (
					<motion.li
						key={tech.name}
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0 },
						}}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<img
							src={tech.logo}
							alt={`${tech.name} logo`}
							className="w-32 h-32 object-contain border border-gray-300 shadow-md p-4"
						/>
					</motion.li>
				))}
			</motion.ul>
		</motion.div>
	);
};

export default TechList;
