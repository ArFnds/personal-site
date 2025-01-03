import { motion } from "framer-motion";
import React from "react";
import ProjectCard from "~/components/ProjectCard";
import SectionHeader from "~/components/SectionHeader";

const Portfolio = () => {
	const projects = [
		{
			title: "Eurotunnel Freight Tracking",
			description:
				"Microservices-based system for tracking freight trucks crossing the Channel.",
			technologies: ["React", ".NET Core", "Azure", "Microservices"],
			imageUrl:
				"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		},
		{
			title: "Cdiscount à Volonté",
			description:
				"Development of subscription-based services for a major e-commerce platform.",
			technologies: ["React", ".NET Core", "Java", "Microservices"],
			imageUrl:
				"https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
		},
	];

	return (
		<div className="min-h-screen py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeader
					title="Portfolio"
					subtitle="Featured projects and professional achievements"
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.2 }}
						>
							<ProjectCard {...project} />
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
