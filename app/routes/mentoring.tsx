import { motion } from "framer-motion";
import { BookOpen, Target, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { HeadParaph } from "~/components/HeadParaph";
import { SectionTitle } from "~/components/SectionTitle";
import { buttonVariants } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

const Mentoring = () => {
	const { t } = useTranslation();
	const services = [
		{
			icon: <BookOpen className="w-8 h-8 text-blue-600" />,
			title: t("mentoring.services.technicalGuidance.title"),
			description: t("mentoring.services.technicalGuidance.description"),
		},
		{
			icon: <Users className="w-8 h-8 text-blue-600" />,
			title: t("mentoring.services.teamLeadership.title"),
			description: t("mentoring.services.teamLeadership.description"),
		},
		{
			icon: <Target className="w-8 h-8 text-blue-600" />,
			title: t("mentoring.services.careerCounseling.title"),
			description: t("mentoring.services.careerCounseling.description"),
		},
	];

	return (
		<div className="min-h-screen py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionTitle
					title={t("mentoring.title")}
					subtitle={t("mentoring.subtitle")}
				/>

				<HeadParaph icon={<Target />}>{t("mentoring.headparaph")}</HeadParaph>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6 }}
					className="my-8 text-center"
				>
					<a
						href="https://cal.com/arnaudfernandes"
						target="_blank"
						rel="noopener noreferrer"
						className={buttonVariants({ variant: "default" })}
					>
						{t("mentoring.cta")}
					</a>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.2 }}
						>
							<Card className="h-full">
								<CardHeader>
									<CardTitle className="flex gap-2 items-center">
										{service.icon}
										<h2>{service.title}</h2>
									</CardTitle>
								</CardHeader>
								<CardContent>{service.description}</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Mentoring;
