import { motion } from "framer-motion";
import { Calendar, ExternalLink, MapPin, MicVocalIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { buttonVariants } from "~/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardImage,
	CardTitle,
} from "~/components/ui/card";
import { contactInfo } from "~/config/contact";
import SectionHeader from "../components/SectionHeader";

type Conference = {
	title: string;
	date: string;
	description: string;
	location?: string;
	imageUrl?: string;
	link?: string;
};

const Conferences = () => {
	const { t } = useTranslation(undefined, { keyPrefix: "conferences" });
	const conferences = t("conferences", {
		returnObjects: true,
		defaultValue: [],
	}) as Conference[];

	return (
		<div className="min-h-screen py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeader h1 title={t("title")} subtitle={t("subtitle")} />
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="mb-8 flex justify-center"
				>
					<a
						href={contactInfo.calendar}
						target="_blank"
						rel="noreferrer"
						className={buttonVariants({
							variant: "default",
						})}
					>
						<MicVocalIcon /> {t("cta")}
					</a>
				</motion.div>
				<div className="space-y-8">
					{conferences.map((conference, index) => (
						<motion.div
							key={conference.title}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.2 }}
						>
							<Card>
								{conference.imageUrl && (
									<CardImage src={conference.imageUrl} alt={conference.title} />
								)}
								<CardHeader>
									<CardTitle>
										<h2>{conference.title}</h2>
									</CardTitle>
									<CardDescription className="flex items-center gap-2">
										<Calendar className="w-4 h-4" />
										{conference.date}
										{conference.location && (
											<>
												<MapPin className="w-4 h-4 ml-2" />{" "}
												<span>{conference.location}</span>
											</>
										)}
									</CardDescription>
								</CardHeader>
								<CardContent>{conference.description}</CardContent>
								<CardFooter>
									{conference.link && (
										<a
											href={conference.link}
											className={buttonVariants({
												variant: "link",
											})}
										>
											Learn More
											<ExternalLink className="w-4 h-4 ml-2" />
										</a>
									)}
								</CardFooter>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Conferences;
/*
<h3 className="text-xl font-semibold mb-2">{conference.title}</h3>
							<div className="flex items-center space-x-4 mb-4">
								<div className="flex items-center">
									<Calendar className="w-4 h-4 mr-2" />
									<span>{conference.date}</span>
								</div>
								<div className="flex items-center">
									<MapPin className="w-4 h-4 mr-2" />
									<span>{conference.location}</span>
								</div>
							</div>
							<p className="mb-4">{conference.description}</p>
							<a
								href={conference.link}
								className={buttonVariants({
									variant: "link",
								})}
							>
								Learn More
								<ExternalLink className="w-4 h-4 ml-2" />
							</a>*/
