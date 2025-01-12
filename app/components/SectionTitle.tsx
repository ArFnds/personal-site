import { motion } from "framer-motion";
import type { FC, HTMLAttributes } from "react";
import { cn } from "~/lib/utils";

export const SectionTitle: FC<
	{
		title: string;
		subtitle?: string;
		level?: 1 | 2 | 3 | 4;
	} & Omit<HTMLAttributes<HTMLHeadingElement>, "children">
> = ({ title, subtitle, level = 1, ...props }) => {
	const HeadTag = `h${level}` as "h1" | "h2" | "h3" | "h4";

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const childVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	const decorationVariants = {
		hidden: { scaleX: 0 },
		visible: {
			scaleX: 1,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};

	return (
		<motion.div
			className="text-center mb-12"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<motion.div variants={childVariants}>
				<HeadTag
					className={cn("text-3xl font-bold tracking-tight", props.className)}
					{...props}
				>
					{title}
				</HeadTag>
			</motion.div>

			<motion.div
				className="h-1 w-24 bg-primary mx-auto my-4"
				variants={decorationVariants}
			/>

			{subtitle && (
				<motion.div variants={childVariants}>
					<p className="text-muted-foreground">{subtitle}</p>
				</motion.div>
			)}
		</motion.div>
	);
};
