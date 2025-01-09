import { motion } from "framer-motion";
import { ArrowRight, Code2, Rocket, Terminal, Users } from "lucide-react";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router";
import { useTheme } from "~/components/ThemeProvider";
import { buttonVariants } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { cn } from "~/lib/utils";

const Home = () => {
	const { t } = useTranslation();
	const { theme } = useTheme();

	const isDarkTheme = theme === "dark";

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
			<section className="my-20 bg-background text-foreground">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<Card className="w-full max-w-3xl mx-auto bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
						<CardContent className="pt-6">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
								className="relative"
							>
								<div className="absolute -left-4 -top-4">
									<Terminal className="w-8 h-8 text-slate-400" />
								</div>

								<p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 pl-6 first-letter:text-3xl first-letter:font-serif first-letter:mr-1 first-letter:float-left first-letter:text-slate-900 dark:first-letter:text-white">
									<Trans
										i18nKey="home.bio"
										components={[
											<span
												key={0}
												className="text-blue-600 dark:text-blue-400"
											/>,
											<span
												key={1}
												className="text-blue-600 dark:text-blue-400"
											/>,
											<span
												key={2}
												className="text-blue-600 dark:text-blue-400"
											/>,
										]}
									/>
								</p>
							</motion.div>
						</CardContent>
					</Card>
				</div>
			</section>

			{/* Features Section */}
			<section className="my-20 bg-background text-foreground">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
				</div>
			</section>
		</div>
	);
};

export default Home;
