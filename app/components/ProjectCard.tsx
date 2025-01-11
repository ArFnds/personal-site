import { ExternalLink, Github } from "lucide-react";
import type React from "react";
import { useTranslation } from "react-i18next";
import { Badge } from "./ui/badge";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardImage,
	CardTitle,
} from "./ui/card";

interface ProjectCardProps {
	title: string;
	description: string;
	technologies: string[];
	imageUrl: string;
	liveUrl?: string;
	githubUrl?: string;
	isPublic?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	description,
	technologies,
	imageUrl,
	liveUrl,
	githubUrl,
	isPublic,
}) => {
	const { t } = useTranslation();
	return (
		<Card className="overflow-hidden h-full">
			<CardImage
				src={imageUrl}
				alt={title}
				className="w-full h-48 object-cover"
			/>
			<CardHeader>
				<CardTitle className="flex items-center">
					{!isPublic && (
						<Badge
							className="mr-2 text-orange-300 border-orange-300"
							variant="outline"
						>
							Private
						</Badge>
					)}
					<h2>{title}</h2>
				</CardTitle>
				<CardDescription className="indent-2 whitespace-pre-line">
					{description.split("\n").map((line, i) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: index fixed in translation
						<p key={i}>{line}</p>
					))}
				</CardDescription>
			</CardHeader>
			<CardFooter className="flex justify-between">
				<div className="flex flex-row flex-wrap gap-2">
					{technologies.map((tech) => (
						<Badge key={tech} variant="secondary">
							{tech}
						</Badge>
					))}
				</div>
				<div className="flex space-x-4">
					{liveUrl && (
						<a
							href={liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center text-blue-600 hover:text-blue-700"
						>
							<ExternalLink className="w-4 h-4 mx-2" />
							{t("common.seeMore")}
						</a>
					)}
					{githubUrl && (
						<a
							href={githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center text-gray-600 hover:text-gray-700"
						>
							<Github className="w-4 h-4 mr-2" />
							Source Code
						</a>
					)}
				</div>
			</CardFooter>
		</Card>
	);
};

export default ProjectCard;
