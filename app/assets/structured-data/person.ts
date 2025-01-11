import { contactInfo } from "~/config/contact";
import i18n from "~/i18n/i18n";

export default {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Arnaud Fernandes",
	url: "https://arnaudfernandes.com/",
	jobTitle: "Software Engineer and Digital Solutions Expert",
	worksFor: {
		"@type": "Organization",
		name: "Tech Magister",
		url: "https://www.tech-magister.com",
	},
	sameAs: [contactInfo.linkedin, contactInfo.xUrl],
	description: i18n.t("meta.description"),
	image: "https://arnaudfernandes.com/profile-pic.png",
	knowsAbout: [
		".NET Core",
		"React",
		"Go",
		"Microservices Architecture",
		"Technology Consulting",
	],
};
