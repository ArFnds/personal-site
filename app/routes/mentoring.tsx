import { motion } from "framer-motion";
import { BookOpen, Target, Users } from "lucide-react";
import React from "react";
import SectionHeader from "../components/SectionHeader";

const Mentoring = () => {
	const services = [
		{
			icon: <BookOpen className="w-8 h-8 text-blue-600" />,
			title: "Technical Guidance",
			description:
				"Personalized mentoring in .NET Core, React, and microservices architecture.",
		},
		{
			icon: <Users className="w-8 h-8 text-blue-600" />,
			title: "Team Leadership",
			description:
				"Learn effective team management and technical leadership skills.",
		},
		{
			icon: <Target className="w-8 h-8 text-blue-600" />,
			title: "Career Development",
			description:
				"Strategic guidance for career growth in software development.",
		},
	];

	return (
		<div className="min-h-screen py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeader
					title="Mentoring Services"
					subtitle="Empowering developers to reach their full potential"
				/>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.2 }}
							className="bg-white rounded-lg shadow-md p-6 text-center"
						>
							<div className="flex justify-center mb-4">{service.icon}</div>
							<h3 className="text-xl font-semibold mb-2">{service.title}</h3>
							<p className="text-gray-600">{service.description}</p>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6 }}
					className="mt-12 text-center"
				>
					<a
						href="https://cal.com/arnaudfernandes"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
					>
						Schedule a Mentoring Session
					</a>
				</motion.div>
			</div>
		</div>
	);
};

export default Mentoring;
