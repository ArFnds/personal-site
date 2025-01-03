import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import ExperienceCard from "../components/ExperienceCard";
import SectionHeader from "../components/SectionHeader";

const About = () => {
	const { t } = useTranslation();

	const experiences = [
		{
			company: "Eurotunnel",
			role: "Lead Technical Fullstack .NET Core (C#) / React",
			period: "Dec 2022 - Present",
			location: "Remote",
			description:
				"Development of innovative microservices for tracking freight trucks crossing the Channel. Modernization of vehicle tracking components and driver application backoffice.",
			skills: ["Docker", "Azure", "React", ".NET Core", "C#", "Microservices"],
		},
		{
			company: "Tech-Magister",
			role: "Founder",
			period: "Nov 2016 - Present",
			location: "France & International",
			description:
				"Technical team coaching, needs analysis, development planning, and project management.",
			skills: ["Software Development", "IT Consulting", "Project Management"],
		},
	];

	return (
		<div className="min-h-screen py-16">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeader
					title={t("about.title")}
					subtitle={t("about.description")}
				/>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}
				>
					{experiences.map((exp, index) => (
						<ExperienceCard key={index} {...exp} />
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default About;
