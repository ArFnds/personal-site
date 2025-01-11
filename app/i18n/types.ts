export interface TrFile {
	common: Common;
	meta: Meta;
	navigation: Navigation;
	hero: Hero;
	about: About;
	home: Home;
	contact: Contact;
	themeSwitcher: ThemeSwitcher;
	features: Features;
	projects: Projects;
	certifications: Certifications;
	"experiences.title": string;
	experiences: Experience[];
	conferencePage: ConferencePage;
	mentoring: Mentoring;
	footer: Footer;
}

export interface Common {
	quickLink: string;
	seeMore: string;
}

export interface Meta {
	title: string;
	description: string;
	keywords: string;
}

export interface Navigation {
	home: string;
	about: string;
	portfolio: string;
	mentoring: string;
	conferences: string;
	contact: string;
}

export interface Hero {
	title: string;
	subtitle: string;
	cta: string;
}

export interface About {
	title: string;
	description: string;
	digitalDna: DigitalDna;
}

export interface DigitalDna {
	title: string;
}

export interface Home {
	bio: string;
}

export interface Contact {
	sectionHeader: SectionHeader;
	formHeader: FormHeader;
	form: Form;
	info: Info;
}

export interface SectionHeader {
	title: string;
	subtitle: string;
}

export interface FormHeader {
	title: string;
	description: string;
	success: string;
}

export interface Form {
	name: string;
	email: string;
	subject: string;
	message: string;
	submit: string;
}

export interface Info {
	title: string;
	description: string;
	scheduleaMeeting: string;
	linkedinProfile: string;
}

export interface ThemeSwitcher {
	light: string;
	dark: string;
}

export interface Features {
	feature1: Feature1;
	feature2: Feature2;
	feature3: Feature3;
}

export interface Feature1 {
	title: string;
	description: string;
}

export interface Feature2 {
	title: string;
	description: string;
}

export interface Feature3 {
	title: string;
	description: string;
}

export interface Projects {
	description: string;
	project1: Project;
	project2: Project;
	project3: Project;
	ees: Project;
	boardingpax: Project;
}

export interface Project {
	title: string;
	description: string;
	technologies: string[];
	imageUrl: string;
	liveUrl?: string;
}

export interface Certifications {
	title: string;
}

export interface Experience {
	company: string;
	role: string;
	headerImage: string;
	logo?: string;
	startDate: string;
	location: string;
	description: string;
	technologies: string[];
	endDate?: string;
	url?: string;
}

export interface ConferencePage {
	title: string;
	subtitle: string;
	cta: string;
	headparaph: string;
	conferences: Conference[];
}

export interface Conference {
	title: string;
	description: string;
	date: string;
	photos: Photo[];
	imageUrl?: string;
	link?: string;
	location?: string;
}

export interface Photo {
	id: string;
	url: string;
	alt: string;
}

export interface Mentoring {
	title: string;
	subtitle: string;
	cta: string;
	headparaph: string;
	services: Services;
}

export interface Services {
	technicalGuidance: TechnicalGuidance;
	teamLeadership: TeamLeadership;
	careerCounseling: CareerCounseling;
}

export interface TechnicalGuidance {
	title: string;
	description: string;
}

export interface TeamLeadership {
	title: string;
	description: string;
}

export interface CareerCounseling {
	title: string;
	description: string;
}

export interface Footer {
	contact: string;
	brand?: string;
}
