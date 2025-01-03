import { motion } from "framer-motion";
import { ArrowRight, Code2, Rocket, Users } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const Home = () => {
	const { t } = useTranslation();

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4">
							{t("hero.title")}
						</h1>
						<p className="text-xl sm:text-2xl text-gray-600 mb-8">
							{t("hero.subtitle")}
						</p>
						<Link
							to="/contact"
							className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
						>
							{t("hero.cta")}
							<ArrowRight className="ml-2 h-5 w-5" />
						</Link>
					</motion.div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="p-6 bg-white rounded-lg shadow-lg"
						>
							<Code2 className="h-12 w-12 text-blue-600 mb-4" />
							<h3 className="text-xl font-semibold mb-2">
								Technical Excellence
							</h3>
							<p className="text-gray-600">
								Specialized in .NET Core, React, and microservices architecture
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="p-6 bg-white rounded-lg shadow-lg"
						>
							<Rocket className="h-12 w-12 text-blue-600 mb-4" />
							<h3 className="text-xl font-semibold mb-2">Startup Growth</h3>
							<p className="text-gray-600">
								Helping startups scale with custom solutions and expert guidance
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="p-6 bg-white rounded-lg shadow-lg"
						>
							<Users className="h-12 w-12 text-blue-600 mb-4" />
							<h3 className="text-xl font-semibold mb-2">Team Leadership</h3>
							<p className="text-gray-600">
								Leading and mentoring technical teams to achieve excellence
							</p>
						</motion.div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
