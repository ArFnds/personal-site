import { motion } from "framer-motion";
import { Calendar, ExternalLink, MapPin } from "lucide-react";
import { buttonVariants } from "~/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "~/components/ui/card";
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
					h1
					title="Conference Talks"
					subtitle="Sharing knowledge and experiences with the tech community"
				/>

				<div className="space-y-8">
					{conferences.map((conference, index) => (
						<motion.div
							key={conference.title}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.2 }}
						>
							<Card>
								<CardHeader>
									<CardTitle>
										<h2>{conference.title}</h2>
									</CardTitle>
									<CardDescription className="flex items-center gap-2">
										<Calendar className="w-4 h-4" />
										{conference.date}
										<MapPin className="w-4 h-4 ml-2" />
										<span>{conference.location}</span>
									</CardDescription>
								</CardHeader>
								<CardContent>{conference.description}</CardContent>
								<CardFooter>
									<a
										href={conference.link}
										className={buttonVariants({
											variant: "link",
										})}
									>
										Learn More
										<ExternalLink className="w-4 h-4 ml-2" />
									</a>
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
