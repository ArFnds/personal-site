import { useForm, validationError } from "@rvf/react-router";
import { withZod } from "@rvf/zod";
import { motion } from "framer-motion";
import { Calendar, CheckCheckIcon, Mail, MapPin, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import { redirect, useLocation } from "react-router";
import { RecaptchaV3 } from "recaptcha-node";
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
import { recaptchaClientKey } from "~/config";
import { recaptchaKey } from "~/config.server";
import { sendContactMail } from "~/lib/mailer";
import SectionHeader from "../components/SectionHeader";
import { contactInfo } from "../config/contact";
import type { Route } from "./+types/contact";

const formSchema = z.object({
	name: z.string().trim().min(1).max(255),
	email: z.string().email().min(1),
	subject: z.string().trim().min(1).max(255),
	message: z.string().min(1).max(1000),
});

const validator = withZod(formSchema);

export const action = async ({ request }: Route.ActionArgs) => {
	const formData = await request.formData();

	if (!formData.has("token") && formData.get("token") !== "") {
		return new Response("Invalid request", { status: 400 });
	}

	const result = await validator.validate(formData);

	if (result.error) {
		return validationError(result.error, result.submittedData);
	}

	const recaptchaV3 = new RecaptchaV3(recaptchaKey);
	const recaptchaResponse = await recaptchaV3.verify(
		// biome-ignore lint/style/noNonNullAssertion: already tested
		formData
			.get("token")!
			.toString(),
	);

	if (!recaptchaResponse.success) {
		return new Response("Invalid request", { status: 400 });
	}

	await sendContactMail(result.data);
	return redirect(`${new URL(request.url).pathname}?success=true`);
};

const Contact = (_: Route.ComponentProps) => {
	const location = useLocation();
	const { t } = useTranslation(undefined, {
		keyPrefix: "contact",
	});
	const form = useForm<z.infer<typeof formSchema>, z.infer<typeof formSchema>>({
		method: "post",
		validator,
		defaultValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
		async onBeforeSubmit(arg) {
			"use client";
			// @ts-expect-error client side script
			const tok = await window.grecaptcha.execute(recaptchaClientKey, {
				action: "submit",
			});
			arg.getFormData().set("token", tok);
		},
	});

	return (
		<div className="min-h-screen py-16">
			<script
				src={`https://www.google.com/recaptcha/api.js?render=${recaptchaClientKey}`}
			/>
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
								<form {...form.getFormProps()}>
									{form.renderFormIdInput()}
									<div>
										<TextField
											{...form.getInputProps("name")}
											error={form.error("name")}
											label={t("form.name")}
											placeholder="John Doe"
										/>
									</div>

									<div>
										<TextField
											{...form.getInputProps("email", {
												type: "email",
												label: t("form.email"),
												placeholder: "your@email.here",
											})}
											error={form.error("email")}
										/>
									</div>

									<div>
										<TextField
											{...form.getInputProps("subject", {
												label: t("form.subject"),
												placeholder: "New project",
											})}
											error={form.error("subject")}
										/>
									</div>

									<div>
										<Label htmlFor="message">{t("form.message")}</Label>

										<Textarea
											{...form.getInputProps("message", {
												placeholder: "Type your message here",
											})}
											rows={4}
											required
											maxLength={1000}
										/>
									</div>
									<div className="g-recaptcha" />
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
