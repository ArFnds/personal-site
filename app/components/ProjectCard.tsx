import { ExternalLink, Github } from "lucide-react";
import type React from "react";
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
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	title,
	description,
	technologies,
	imageUrl,
	liveUrl,
	githubUrl,
}) => {
	return (
		<Card className="overflow-hidden">
			<CardImage
				src={imageUrl}
				alt={title}
				className="w-full h-48 object-cover"
			/>
			<CardHeader>
				<CardTitle>
					<h2>{title}</h2>
				</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardFooter>
				<div className="flex flex-wrap gap-2">
					{technologies.map((tech) => (
						<Badge key={tech}>{tech}</Badge>
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
							<ExternalLink className="w-4 h-4 mr-2" />
							Live Demo
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
