import React from "react";
import { useTranslation } from "react-i18next";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardDescription,
	CardFooter,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { motion } from "framer-motion";

const experiences = [
	{
		company: "Eurotunnel",
		role: "Leader technique Fullstack .NET Core (C#) / React",
		duration: "Déc. 2022 - Aujourd’hui (2 ans 2 mois)",
		location: "À distance",
		description:
			"Développement de micro-services innovants pour le suivi des camions traversant la Manche. Modernisation des composants liés au suivi des véhicules et du back-office chauffeur.",
		technologies: [
			"C# .NET 6/7/8",
			"ReactJS",
			"Typescript",
			"Azure",
			"Gherkin",
		],
	},
	{
		company: "Sage",
		role: "Senior Developer Fullstack .NET Core (C#) / React",
		duration: "Juin 2021 - Déc. 2022 (1 an 7 mois)",
		location: "À distance",
		description:
			"Conseils sur l'architecture microservices, maintenance corrective, et mise en place de POC.",
		technologies: [
			"Docker",
			"Kubernetes",
			"Microservices",
			"Apache Kafka",
			".NET Core",
		],
	},
	{
		company: "Cdiscount",
		role: "Leader Technique Fullstack .NET Core (C#) / React",
		duration: "Juin 2018 - Juin 2021 (3 ans 1 mois)",
		location: "À distance",
		description:
			"Coaching et gestion des savoir-faire des équipes inshore & offshore. Analyse des besoins, développement complexe, et relecture de code React pour la direction IT Commerce.",
		technologies: [
			"Docker",
			"React.js",
			"Apache Kafka",
			"Kubernetes",
			".NET Core",
			"MongoDB",
		],
	},
	{
		company: "Tech-Magister",
		role: "Fondateur",
		duration: "Nov. 2016 - Aujourd’hui (8 ans 3 mois)",
		location: "France et International",
		description:
			"Coaching, gestion des savoir-faire techniques, analyse des besoins, et accompagnement au développement.",
		technologies: ["Développement logiciel", "Gestion de projet", "Scrum"],
	},
];

const About = () => {
	const { t } = useTranslation();

	return (
		<div className="max-w-4xl mx-auto p-6">
			<motion.h1
				className="text-3xl font-bold mb-6 text-center"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				{t("experiences.title", "Expériences Professionnelles")}
			</motion.h1>
			<motion.div
				className="space-y-6"
				initial="hidden"
				animate="visible"
				variants={{
					hidden: { opacity: 0 },
					visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
				}}
			>
				{experiences.map((experience) => (
					<motion.div
						key={`${experience.duration}${experience.role}`}
						className="hover:shadow-xl transform hover:scale-105 transition-transform"
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<Card className="border border-gray-200 rounded-lg overflow-hidden">
							<CardHeader>
								<CardTitle className="text-xl font-semibold">
									{experience.role}
								</CardTitle>
								<CardDescription>
									{experience.company} - {experience.duration}
								</CardDescription>
							</CardHeader>
							<CardContent>{experience.description}</CardContent>
							<CardFooter className="flex flex-wrap gap-2">
								{experience.technologies.map((tech, i) => (
									<Badge key={tech} variant="secondary">
										{tech}
									</Badge>
								))}
							</CardFooter>
						</Card>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default About;
