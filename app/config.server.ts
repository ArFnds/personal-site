export const recaptchaKey = "6LfLarEqAAAAACXihhxPaovmnzYTqLiBsyhoqlVI";

export const mailUser = process.env.MAIL_USER;
export const mailPass = process.env.MAIL_PASS;
export const mailTo = process.env.MAIL_TO;
export const mailFrom = process.env.MAIL_FROM;

if (!mailUser || !mailPass || !mailTo || !mailFrom) {
	throw new Error("Missing mail credentials");
}
