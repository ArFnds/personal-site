import { motion } from "framer-motion";
import { Calendar, Linkedin, Mail, MapPin } from "lucide-react";
import React from "react";
import ContactForm from "../components/ContactForm";
import SectionHeader from "../components/SectionHeader";
import { contactInfo } from "../config/contact";

const Contact = () => {
	return (
		<div className="min-h-screen py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeader
					title="Contact Me"
					subtitle="Let's discuss how I can help with your next project"
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						className="bg-white rounded-lg shadow-md p-6"
					>
						<ContactForm />
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						className="bg-white rounded-lg shadow-md p-6"
					>
						<h3 className="text-xl font-semibold mb-6">Contact Information</h3>
						<div className="space-y-4">
							<div className="flex items-center">
								<Mail className="w-5 h-5 text-blue-600 mr-3" />
								<a
									href={`mailto:${contactInfo.email}`}
									className="hover:text-blue-600"
								>
									{contactInfo.email}
								</a>
							</div>
							<div className="flex items-center">
								<MapPin className="w-5 h-5 text-blue-600 mr-3" />
								<span>{contactInfo.address}</span>
							</div>
							<div className="flex items-center">
								<Calendar className="w-5 h-5 text-blue-600 mr-3" />
								<a
									href={contactInfo.calendar}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-600 hover:text-blue-700"
								>
									Schedule a meeting
								</a>
							</div>
							<div className="flex items-center">
								<Linkedin className="w-5 h-5 text-blue-600 mr-3" />
								<a
									href={contactInfo.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-600 hover:text-blue-700"
								>
									LinkedIn Profile
								</a>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
