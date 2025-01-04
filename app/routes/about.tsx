import { motion } from "framer-motion";
import { BriefcaseBusinessIcon, Calendar1Icon, MapPinIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Badge } from "~/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardImage,
	CardTitle,
} from "~/components/ui/card";

type Experience = {
	company: string;
	logo?: string;
	role: string;
	duration: string;
	location: string;
	description: string;
	technologies: string[];
};

const About = () => {
	const { t } = useTranslation();
	const experiences = t("experiences", {
		returnObjects: true,
		defaultValue: [],
	}) as Experience[];

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
						key={`${experience.duration}${experience.role}${experience.company}`}
						className="hover:shadow-xl transform hover:scale-105 transition-transform"
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<Card className="border border-gray-200 rounded-lg overflow-hidden">
							<CardImage src={experience.logo} />
							<CardHeader>
								<CardTitle className="text-xl font-semibold">
									<h2>{experience.role}</h2>
								</CardTitle>
								<CardDescription className="flex items-center">
									<BriefcaseBusinessIcon className="mr-1" />
									{experience.company}
									<Calendar1Icon className="mr-1 ml-4" />
									{experience.duration}
									<MapPinIcon className="mr-1 ml-4" />
									{experience.location}
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
