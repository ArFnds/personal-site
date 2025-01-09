import { Image } from "@unpic/react";
import { format, formatDistance, formatRelative } from "date-fns";
import { motion } from "framer-motion";
import {
	ArrowBigDown,
	BriefcaseBusinessIcon,
	Calendar1Icon,
	Info,
	MapPinIcon,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import TechList from "~/components/TechList";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";

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
import { Separator } from "~/components/ui/separator";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "~/components/ui/tooltip";
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

const technologies = [
	{ name: ".NET Core", logo: "/logos/dotnet.svg" }, // Remplacez les chemins par vos images
	{ name: "React", logo: "/logos/react.svg" },
	{ name: "Go", logo: "/logos/go.svg" },
	{ name: "TypeScript", logo: "/logos/typescript.svg" },
	{ name: "Node.js", logo: "/logos/nodejs.svg" },
	{ name: "Docker", logo: "/logos/docker.svg" },
	{ name: "Kubernetes", logo: "/logos/kubernetes.svg" },
];

const certifications = [
	{
		name: "Containers Basics",
		imgUrl: "/certifications/certificate-3xw8w5zwgf.jpg",
		link: "https://www.rancher.academy/certificates/3xw8w5zwgf",
	},
	{
		name: "Kubernetes Basics",
		imgUrl: "/certifications/certificate-qv5jeqx1rf.jpg",
		link: "https://www.rancher.academy/certificates/qv5jeqx1rf",
	},
	{
		name: "Rancher Basics",
		imgUrl: "/certifications/certificate-wfzmbm7zfo.jpg",
		link: "https://www.rancher.academy/certificates/wfzmbm7zfo",
	},
	{
		name: "K3s Basics",
		imgUrl: "/certifications/certificate-gjlospsgkt.jpg",
		link: "https://www.rancher.academy/certificates/gjlospsgkt",
	},
];

function rawToDisplay(experience: RawExperience): DisplayExperience {
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
}

const About = () => {
	const { t } = useTranslation();
	const experiences = (
		t("experiences", {
			returnObjects: true,
			defaultValue: [],
		}) as RawExperience[]
	).map(rawToDisplay);

	return (
		<div className="max-w-4xl mx-auto p-6">
			<Alert className="mb-6">
				<Info className="h-6 w-6" color="lightblue" />
				<AlertTitle>{t("common.quickLink")}</AlertTitle>
				<AlertDescription className="ml-4">
					<a href="#experiences">
						<ArrowBigDown className="inline h-4" />
						{t("experiences.title", "Expériences Professionnelles")}
					</a>{" "}
					-{" "}
					<a href="#certifications">
						<ArrowBigDown className="inline h-4" />
						{t("certifications.title", "Certifications")}
					</a>
				</AlertDescription>
			</Alert>
			<motion.h1
				className="text-3xl font-bold mb-6 text-center"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				{t("about.digitalDna.title", "Digital DNA")}
			</motion.h1>
			<TechList technologies={technologies} />
			<Separator className="my-8 invisible" />
			<motion.h1
				id="experiences"
				className="text-3xl font-bold mt-12 mb-6 text-center"
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
			<Separator className="my-8 invisible" />
			<motion.h1
				id="certifications"
				className="text-3xl font-bold mb-6 text-center"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				{t("certifications.title", "Certifications")}
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
				<div className="flex flex-wrap justify-center gap-2">
					{certifications.map((certification) => (
						<TooltipProvider key={certification.link} delayDuration={200}>
							<Tooltip>
								<TooltipTrigger>
									<a
										href={certification.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Image
											layout="fullWidth"
											height={200}
											src={certification.imgUrl}
											alt={certification.name}
										/>
									</a>
								</TooltipTrigger>
								<TooltipContent>
									<p>{certification.name}</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					))}
				</div>
			</motion.div>
		</div>
	);
};

export default About;
