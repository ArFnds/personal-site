import { ExternalLink, Github } from "lucide-react";
import type React from "react";

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
		<div className="bg-white rounded-lg shadow-md overflow-hidden">
			<img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
			<div className="p-6">
				<h3 className="text-xl font-semibold mb-2">{title}</h3>
				<p className="text-gray-600 mb-4">{description}</p>
				<div className="flex flex-wrap gap-2 mb-4">
					{technologies.map((tech) => (
						<span
							key={tech}
							className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
						>
							{tech}
						</span>
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
			</div>
		</div>
	);
};

export default ProjectCard;
