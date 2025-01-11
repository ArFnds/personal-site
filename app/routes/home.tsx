import { motion } from "framer-motion";
import { ArrowRight, Code2, Rocket, Users } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router";
import person from "~/assets/structured-data/person";
import { HeadParaph } from "~/components/HeadParaph";
import TestimonialList from "~/components/TestimonialList";
import { buttonVariants } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { cn } from "~/lib/utils";

// export handle
export const handle = {
	structuredData: person,
};

const Section = ({ children }: { children: React.ReactNode }) => (
	<section className="my-20 bg-background text-foreground">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
	</section>
);

const Home = () => {
	const { t } = useTranslation();
	const { t: tTestimonials } = useTranslation("testimonials");

	const testimonials = tTestimonials("all", { returnObjects: true });

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section
				className={cn(
					"relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50",
					"bg-no-repeat bg-cover",
					"bg-[top_right_-500px] md:bg-top",
				)}
				style={{
					backgroundImage: "url('/hero-bg.jpg')",
				}}
			>
				<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<h1 className="text-4xl sm:text-6xl font-bold text-gray-200 mb-4 uppercase">
							{t("hero.title")}
						</h1>
						<p className="text-xl sm:text-2xl text-gray-200 mb-8">
							{t("hero.subtitle")
								.split("|")
								.map((line) => (
									<span key={line}>
										{line}
										<br />
									</span>
								))}
						</p>
						<Link
							to="/contact"
							className={buttonVariants({ variant: "outline" })}
						>
							{t("hero.cta")}
							<ArrowRight className="ml-2 h-5 w-5" />
						</Link>
					</motion.div>
				</div>
			</section>

			{/* Brief introduction section */}
			<Section>
				<HeadParaph>
					<Trans
						i18nKey="home.bio"
						components={[
							<span key={0} className="text-blue-600 dark:text-blue-400" />,
							<span key={1} className="text-blue-600 dark:text-blue-400" />,
							<span key={2} className="text-blue-600 dark:text-blue-400" />,
						]}
					/>
				</HeadParaph>
			</Section>

			{/* Features Section */}
			<Section>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<Card className="shadow-md">
							<CardHeader>
								<Code2 className="h-12 w-12 text-blue-600 mb-4" />
								<CardTitle>
									<h2>{t("features.feature1.title")}</h2>
								</CardTitle>
							</CardHeader>
							<CardContent>{t("features.feature1.description")}</CardContent>
						</Card>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<Card className="shadow-md">
							<CardHeader>
								<Rocket className="h-12 w-12 text-blue-600 mb-4" />
								<CardTitle>
									<h2>{t("features.feature2.title")}</h2>
								</CardTitle>
							</CardHeader>
							<CardContent>{t("features.feature2.description")}</CardContent>
						</Card>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						<Card className="shadow-md">
							<CardHeader>
								<Users className="h-12 w-12 text-blue-600 mb-4" />
								<CardTitle>
									<h2>{t("features.feature3.title")}</h2>
								</CardTitle>
							</CardHeader>
							<CardContent>{t("features.feature3.description")}</CardContent>
						</Card>
					</motion.div>
				</div>
			</Section>
			<Section>
				<TestimonialList testimonials={testimonials} />
			</Section>
		</div>
	);
};

export default Home;
