"use server";
import nodemailer, { type SendMailOptions } from "nodemailer";
import { createMarkdown } from "safe-marked";

import { mailPass, mailTo, mailUser } from "~/config.server";
import { logger } from "./logger";

export const transporter = nodemailer.createTransport({
	service: "yandex",
	auth: {
		user: mailUser,
		pass: mailPass,
	},
});

const contactMailOptions: SendMailOptions = {
	from: mailUser,
	to: mailTo,
};

const markdown = createMarkdown();

export async function sendContactMail({
	email,
	name,
	subject,
	message,
}: { email: string; name: string; subject: string; message: string }) {
	const sanitized = {
		email: markdown(email),
		name: markdown(name),
		subject: markdown(subject),
		message: markdown(message),
	};
	const mailOptions: SendMailOptions = {
		...contactMailOptions,
		subject: "Contact Form",
		text: message,
		html: `<h1>Subject: ${sanitized.subject}</h1><h2>Message:</h2><p>${sanitized.message}</p><h2>From:</h2><p><strong>${sanitized.name}</strong><br>${sanitized.email}</p>`,
	};
	const res = { toto: 12 }; // await transporter.sendMail(mailOptions);
	logger.info({
		trace: "sendContactMail",
		response: res,
	});
}
