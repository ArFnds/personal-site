import { motion } from "framer-motion";
import { Calendar, Mail, MapPin, Send } from "lucide-react";
import { zfd } from "zod-form-data";

import { useTranslation } from "react-i18next";
import { data, useFetcher } from "react-router";
import { z } from "zod";
import LinkedIn from "~/assets/linkedin.svg?react";
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
import { cn } from "~/lib/utils";
import SectionHeader from "../components/SectionHeader";
import { contactInfo } from "../config/contact";
import type { Route } from "./+types/contact";

const contactFormSchema = zfd.formData({
	name: z.string().min(1, { message: "Name is required" }).max(50),
	email: z.string().email({ message: "Invalid email address" }).max(200),
	subject: z.string().min(1, { message: "Subject is required" }).max(50),
	message: z.string().min(1, { message: "Message is required" }).max(1000),
});

type ContactFormSchema = z.infer<typeof contactFormSchema>;

export async function action({ request }: Route.ActionArgs) {
	const formData = await request.formData();
	const contactForm = contactFormSchema.safeParse(formData);

	if (!contactForm.success) {
		return data({ errors: contactForm.error.flatten() });
	}

	// TODO - send email

	return {};
}

const Contact = (_: Route.ComponentProps) => {
	const { t } = useTranslation(undefined, {
		keyPrefix: "contact",
	});
	const fetcher = useFetcher<
		ContactFormSchema & {
			errors: z.typeToFlattenedError<ContactFormSchema, string>;
		}
	>();
	const errors = fetcher.data?.errors;

	return (
		<div className="min-h-screen py-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<SectionHeader
					h1
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
								<CardTitle>
									<h2>{t("formHeader.title")}</h2>
								</CardTitle>
								<CardDescription>{t("formHeader.description")}</CardDescription>
							</CardHeader>
							<CardContent>
								<fetcher.Form method="post">
									<div>
										<TextField
											label={t("form.name")}
											name="name"
											id="name"
											type="text"
											required
											error={errors?.fieldErrors.name?.at(0)}
										/>
									</div>

									<div>
										<TextField
											label={t("form.email")}
											name="email"
											id="email"
											type="email"
											required
											error={errors?.fieldErrors.email?.at(0)}
										/>
									</div>

									<div>
										<TextField
											label={t("form.subject")}
											name="subject"
											id="subject"
											required
											error={errors?.fieldErrors.subject?.at(0)}
										/>
									</div>

									<div>
										<Label
											htmlFor="message"
											className={cn(
												errors?.fieldErrors.message && "text-destructive",
											)}
										>
											{t("form.message")}
										</Label>
										{errors?.fieldErrors.message && (
											<p
												className={cn(
													"text-[0.8rem] font-medium text-destructive",
												)}
											>
												{errors?.fieldErrors.message.at(0)}
											</p>
										)}
										<Textarea name="message" id="message" rows={4} required />
									</div>

									<Button type="submit" className="mt-4 mx-auto flex">
										<Send className="w-4 h-4" />
										{t("form.submit")}
									</Button>
								</fetcher.Form>
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
