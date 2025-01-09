import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";
import { HeadParaph } from "~/components/HeadParaph";
import ProjectCard from "~/components/ProjectCard";
import SectionHeader from "~/components/SectionHeader";

type Project = {
	title: string;
	description: string;
	technologies: string[];
	imageUrl: string;
	liveUrl?: string;
	githubUrl?: string;
};

const Portfolio = () => {
	const { t } = useTranslation();
	const projects = [
		t("projects.project1", { returnObjects: true }),
		t("projects.project2", { returnObjects: true }),
		t("projects.project3", { returnObjects: true }),
	] as Project[];

	return (
		<div className="min-h-screen py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeader
					h1
					title="Portfolio"
					subtitle="Featured projects and professional achievements"
				/>

				<HeadParaph>
					<Trans
						i18nKey="projects.description"
						components={[
							<span key={0} className="text-blue-600 dark:text-blue-400" />,
							<span key={1} className="text-blue-600 dark:text-blue-400" />,
							<span key={2} className="text-blue-600 dark:text-blue-400" />,
							<span key={3} className="text-blue-600 dark:text-blue-400" />,
							<span key={4} className="text-blue-600 dark:text-blue-400" />,
						]}
					/>
				</HeadParaph>

				<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.2 }}
						>
							<ProjectCard {...project} />
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
