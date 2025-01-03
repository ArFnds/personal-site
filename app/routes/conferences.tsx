import { motion } from "framer-motion";
import { Calendar, ExternalLink, MapPin } from "lucide-react";
import React from "react";
import SectionHeader from "../components/SectionHeader";

const Conferences = () => {
	const conferences = [
		{
			title: "Modern Microservices Architecture",
			date: "June 15, 2024",
			location: "Paris, France",
			description:
				"Deep dive into building scalable microservices with .NET Core and React.",
			link: "#",
		},
		{
			title: "Frontend Development Best Practices",
			date: "September 20, 2024",
			location: "Lyon, France",
			description:
				"Exploring modern React patterns and performance optimization techniques.",
			link: "#",
		},
	];

	return (
		<div className="min-h-screen py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeader
					title="Conference Talks"
					subtitle="Sharing knowledge and experiences with the tech community"
				/>

				<div className="space-y-8">
					{conferences.map((conference, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.2 }}
							className="bg-white rounded-lg shadow-md p-6"
						>
							<h3 className="text-xl font-semibold mb-2">{conference.title}</h3>
							<div className="flex items-center space-x-4 text-gray-600 mb-4">
								<div className="flex items-center">
									<Calendar className="w-4 h-4 mr-2" />
									<span>{conference.date}</span>
								</div>
								<div className="flex items-center">
									<MapPin className="w-4 h-4 mr-2" />
									<span>{conference.location}</span>
								</div>
							</div>
							<p className="text-gray-700 mb-4">{conference.description}</p>
							<a
								href={conference.link}
								className="inline-flex items-center text-blue-600 hover:text-blue-700"
							>
								Learn More
								<ExternalLink className="w-4 h-4 ml-2" />
							</a>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Conferences;
