import { motion } from "framer-motion";
import { Calendar, CheckCheckIcon, Mail, MapPin, Send } from "lucide-react";

import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";
import LinkedIn from "~/assets/linkedin.svg?react";
import { SectionTitle } from "~/components/SectionTitle";
import { TextField } from "~/components/TextField";
import { Button } from "~/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { siteUrl, web3formsApiKey } from "~/config";
import { contactInfo } from "../config/contact";
import type { Route } from "./+types/contact";

const Contact = (_: Route.ComponentProps) => {
	const location = useLocation();
	const { t } = useTranslation(undefined, {
		keyPrefix: "contact",
	});

	return (
		<div className="min-h-screen py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionTitle
					title={t("sectionHeader.title")}
					subtitle={t("sectionHeader.subtitle")}
				/>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
					>
						<Card>
							<CardHeader>
								{location.search.includes("success") && (
									<p className="text-green-500 mb-4 flex gap-2">
										<CheckCheckIcon /> {t("formHeader.success")}
									</p>
								)}
								<CardTitle>
									<h2>{t("formHeader.title")}</h2>
								</CardTitle>
								<CardDescription>{t("formHeader.description")}</CardDescription>
							</CardHeader>
							<CardContent>
								<form action="https://api.web3forms.com/submit" method="post">
									<input
										type="hidden"
										name="access_key"
										value={web3formsApiKey}
									/>
									<input type="checkbox" name="botcheck" className="hidden" />
									<input
										type="hidden"
										name="redirect"
										value={new URL(
											`${location.pathname}?success`,
											siteUrl,
										).toString()}
									/>
									<div>
										<TextField
											label={t("form.name")}
											name="name"
											id="name"
											type="text"
											required
											maxLength={255}
										/>
									</div>

									<div>
										<TextField
											label={t("form.email")}
											name="email"
											id="email"
											type="email"
											required
											maxLength={255}
										/>
									</div>

									<div>
										<TextField
											label={t("form.subject")}
											name="subject"
											id="subject"
											required
											maxLength={255}
										/>
									</div>

									<div>
										<Label htmlFor="message">{t("form.message")}</Label>

										<Textarea
											name="message"
											id="message"
											rows={4}
											required
											maxLength={1000}
										/>
									</div>

									<Button type="submit" className="mt-4 mx-auto flex">
										<Send className="w-4 h-4" />
										{t("form.submit")}
									</Button>
								</form>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
					>
						<Card>
							<CardHeader>
								<CardTitle>
									<h2>{t("info.title")}</h2>
								</CardTitle>
								<CardDescription>{t("info.description")}</CardDescription>
							</CardHeader>
							<CardContent>
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
										>
											{t("info.scheduleaMeeting")}
										</a>
									</div>
									<div className="flex items-center">
										<LinkedIn className="w-5 h-5 text-blue-600 mr-3" />
										<a
											href={contactInfo.linkedin}
											target="_blank"
											rel="noopener noreferrer"
										>
											{t("info.linkedinProfile")}
										</a>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
