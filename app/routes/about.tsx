import { format, formatDistance, formatRelative } from "date-fns";
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
import { dateLocale } from "~/i18n/i18n";

type RawExperience = {
	company: string;
	headerImage?: string;
	logo?: string;
	role: string;
	startDate: string;
	endDate?: string;
	location: string;
	description: string;
	technologies: string[];
	url?: string;
};

type DisplayExperience = RawExperience & {
	duration: string;
};

const About = () => {
	const { t } = useTranslation();
	const experiences = (
		t("experiences", {
			returnObjects: true,
			defaultValue: [],
		}) as RawExperience[]
	).map((experience) => {
		const now = new Date();
		const startDate = new Date(experience.startDate);
		const endDate = experience.endDate
			? new Date(experience.endDate)
			: new Date();
		const duration = formatDistance(startDate, endDate, {
			locale: dateLocale(),
		});

		return {
			...experience,
			startDate: format(startDate, "MMM yyyy", { locale: dateLocale() }),
			endDate: experience.endDate
				? format(new Date(experience.endDate), "MMM yyyy", {
						locale: dateLocale(),
					})
				: formatRelative(
						new Date(now.getFullYear(), now.getMonth(), now.getDate()),
						new Date(now.getFullYear(), now.getMonth(), now.getDate()),
						{
							locale: dateLocale(),
						},
					).split(" ")[0],
			duration,
		} satisfies DisplayExperience;
	});

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
							<CardImage src={experience.headerImage} />
							<CardHeader className="flex flex-row gap-2 items-center">
								{experience.logo && (
									<div>
										<img
											src={experience.logo}
											alt={`${experience.company} Logo`}
											className="w-14 h-14 rounded-md p-1"
										/>
									</div>
								)}
								<div>
									<CardTitle className="text-xl font-semibold">
										<h2>{experience.role}</h2>
									</CardTitle>
									<CardDescription className="flex items-center">
										<BriefcaseBusinessIcon className="mr-1" />
										{experience.url ? (
											<a
												href={experience.url}
												// biome-ignore lint/a11y/noBlankTarget: trusted site
												target="_blank"
												rel="noopener"
												className="text-blue-600 hover:underline"
											>
												{experience.company}
											</a>
										) : (
											experience.company
										)}
										<Calendar1Icon className="mr-1 ml-4" />
										{experience.startDate} - {experience.endDate} (
										{experience.duration})
										<MapPinIcon className="mr-1 ml-4" />
										{experience.location}
									</CardDescription>
								</div>
							</CardHeader>
							<CardContent className="whitespace-pre-line">
								{experience.description}
							</CardContent>
							<CardFooter className="flex flex-wrap gap-2">
								{experience.technologies.map((tech) => (
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
