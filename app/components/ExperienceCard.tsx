import { Calendar, MapPin } from "lucide-react";
import type React from "react";

interface ExperienceCardProps {
	company: string;
	role: string;
	period: string;
	location: string;
	description: string;
	skills: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
	company,
	role,
	period,
	location,
	description,
	skills,
}) => {
	return (
		<div className="bg-white rounded-lg shadow-md p-6 mb-6">
			<h3 className="text-xl font-semibold text-gray-900">{role}</h3>
			<h4 className="text-lg text-blue-600 mb-2">{company}</h4>
			<div className="flex items-center text-gray-600 mb-4 space-x-4">
				<div className="flex items-center">
					<Calendar className="w-4 h-4 mr-2" />
					<span>{period}</span>
				</div>
				<div className="flex items-center">
					<MapPin className="w-4 h-4 mr-2" />
					<span>{location}</span>
				</div>
			</div>
			<p className="text-gray-700 mb-4">{description}</p>
			<div className="flex flex-wrap gap-2">
				{skills.map((skill) => (
					<span
						key={skill}
						className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
					>
						{skill}
					</span>
				))}
			</div>
		</div>
	);
};

export default ExperienceCard;
