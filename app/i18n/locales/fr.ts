import type { TrFile } from "../types";

export default {
	common: {
		quickLink: "Accès rapide",
		seeMore: "Voir plus",
	},
	meta: {
		title: "Arnaud Fernandes - Software Engineer for custom digital projects",
		description:
			"Arnaud Fernandes, Software Engineer qui aide les startups et entreprises à concevoir des solutions performantes et sur mesure.",
		keywords:
			"Arnaud Fernandes, Lead Technique Fullstack, .NET Core, C#, React, Go, développement web, microservices, solutions sur mesure, conseil en informatique, architecture logicielle, startups, développement de logiciels, performance des applications, sécurité des applications, coaching technique, gestion de projet IT",
	},
	navigation: {
		home: "Accueil",
		about: "À Propos",
		portfolio: "Portfolio",
		mentoring: "Mentorat",
		conferences: "Conférences",
		contact: "Contact",
	},
	hero: {
		title: "Arnaud Fernandes",
		subtitle:
			"Développement de projets digitaux sur mesure | Solutions innovantes et performantes",
		cta: "Me Contacter",
	},
	about: {
		title: "À Propos",
		description:
			"En tant que lead technique fullstack passionné et fondateur d'une entreprise IT, je me spécialise dans les architectures microservices, en offrant des solutions innovantes et performantes pour les startups et les entreprises en croissance.",
		digitalDna: {
			title: "ADN Digitale",
		},
	},
	home: {
		bio: "Ingénieur logiciel passionné et expert en solutions numériques, spécialisé dans <1>le développement d'applications web modernes</1>, <2>la conception d'architectures microservices</2> et <3>le conseil en technologies avancées</3>. Fort d'une expérience solide auprès de grandes entreprises et startups, chaque projet est une opportunité de transformer des idées en résultats concrets et performants.",
	},
	contact: {
		sectionHeader: {
			title: "Me Contacter",
			subtitle: "Laissez-moi un message pour discuter de votre projet",
		},
		formHeader: {
			title: "Me Contacter",
			description: "Contactez-moi via le formulaire ci-dessous ou par email",
			success:
				"Merci d'avoir envoyé votre message. Je vous recontacterai sous peu.",
		},
		form: {
			name: "Nom",
			email: "Email",
			subject: "Sujet",
			message: "Message",
			submit: "Envoyer",
		},
		info: {
			title: "Informations de contact",
			description:
				"J'aimerais avoir de vos nouvelles ! Que vous souhaitiez collaborer à un projet, que vous ayez une question ou que vous souhaitiez simplement vous connecter, je suis là pour vous aider.",
			scheduleaMeeting: "Planifier un rendez-vous",
			linkedinProfile: "Profil LinkedIn",
		},
	},
	themeSwitcher: {
		light: "Clair",
		dark: "Sombre",
	},
	features: {
		feature1: {
			title: "Excellence Technologique",
			description:
				"Specialisé en .NET Core, React, Go et les architectures microservices",
		},
		feature2: {
			title: "Croissance des startups",
			description:
				"Fournissant des solutions innovantes pour les startups et les entreprises en croissance",
		},
		feature3: {
			title: "Leadership d'équipe",
			description:
				"Direction et encadrement des équipes techniques pour atteindre l'excellence",
		},
	},
	projects: {
		description:
			"Chaque projet réalisé reflète une <1>expertise technique approfondie</1> et une <2>compréhension des besoins spécifiques des clients</2>. Des <3>applications web modernes</3> aux <4>architectures microservices robustes</4>, en passant par des <5>solutions sur mesure</5>, chaque réalisation témoigne d'un engagement à fournir des résultats performants et durables. Découvrez une sélection de projets qui illustrent une capacité à transformer des idées en solutions concrètes et innovantes.",
		project1: {
			title: "Eurotunnel Freight Tracking",
			description:
				"Sur ce projet, des microservices innovants ont été développés pour étendre les capacités de suivi des camions de marchandises traversant la Manche.\n En parallèle, une modernisation technique de certains composants essentiels liés au suivi des véhicules a été réalisée.\n De plus, le back-office gérant l'application utilisée par les chauffeurs a été amélioré avec de nouvelles fonctionnalités pour optimiser leur expérience globale.",
			technologies: [
				"React",
				".NET Core",
				"Azure",
				"Microservices",
				"Docker",
				"Kubernetes",
			],
			imageUrl:
				"https://images.unsplash.com/photo-1495870043034-74e1a009f631?q=80&w=800&h=200&auto=format&fit=crop",
		},
		project2: {
			title: "Cdiscount à Volonté",
			description:
				"Sur ce projet, le développement de l'offre \"Cdiscount à volonté\" a été une priorité. Cela a impliqué la création de microservices en Java avec Spring et l'enrichissement de l'offre sur le site PC grâce à .NET et C#.\n Parallèlement, des améliorations ont été apportées à l'offre sur les plateformes mobiles et les applications, en utilisant React JS et React Native, pour garantir une expérience utilisateur optimale.",
			technologies: [
				"React",
				".NET Core",
				"Azure",
				"Microservices",
				"Docker",
				"Kubernetes",
			],
			imageUrl:
				"https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
			liveUrl: "https://www.cdiscount.com/cdav",
		},
		project3: {
			title: "Détection d'image NSFW",
			description:
				"Développement d'un service de détection d'image NSFW (Not Safe For Work) basé sur l'IA pour un système d'upload.",
			technologies: [
				"Python",
				"IA",
				"Docker",
				"Microservices",
				"Kubernetes",
				"GPU",
			],
			imageUrl: "/projects/nsfw.jpg",
		},
		ees: {
			title: "EES (Entry-Exit system)",
			description:
				"Le système d’entrée/sortie (EES) sera un système informatique automatisé permettant d’enregistrer les voyageurs en provenance de pays tiers. C’est un projet présenté par la Commission européenne.\nMa mission sur ce projet a été la mis en place l’architecture globale de la solution (une dizaine de micro-services, 2 frontaux, sur 5 domaines applicatifs)",
			technologies: [
				".NET Core",
				"React",
				"Microservices",
				"Azure",
				"Docker",
				"Kubernetes",
			],
			imageUrl: "/projects/ees.webp",
			liveUrl: "https://travel-europe.europa.eu/ees/what-ees_en",
		},
	},
	certifications: {
		title: "Certifications",
	},
	"experiences.title": "Expérience",
	experiences: [
		{
			company: "Eurotunnel",
			role: "Leader technique Fullstack .NET Core (C#) / React",
			headerImage:
				"https://images.unsplash.com/photo-1495870043034-74e1a009f631?q=80&w=600&h=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			logo: "/logos/getlink.webp",
			startDate: "2022-12",
			location: "À distance",
			description:
				"Dans le cadre de cette mission, le développement de micro-services innovants a été réalisé afin d'étendre les capacités de suivi des camions de marchandises traversant la Manche. \n\nPar ailleurs, la modernisation technique de composants essentiels liés au suivi des véhicules a été menée à bien. Le backoffice de l'application utilisée par les chauffeurs a également été repensé et enrichi de nouvelles fonctionnalités pour optimiser leur expérience globale.",
			technologies: [
				"C# .NET 6/7/8",
				"ReactJS",
				"Typescript",
				"Azure",
				"Gherkin",
			],
		},
		{
			company: "Sage",
			role: "Senior Developer Fullstack .NET Core (C#) / React",
			headerImage:
				"https://images.unsplash.com/photo-1511376868136-742c0de8c9a8?q=80&w=600&h=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			logo: "/logos/sage.png",
			startDate: "2021-06",
			endDate: "2022-12",
			location: "À distance",
			description:
				"Un accompagnement a été assuré pour la conception et la mise en œuvre d'une architecture micro-services, garantissant des solutions robustes et évolutives.\n\nUne maintenance corrective a été réalisée sur des applications développées en .NET 4.8, permettant de résoudre les problèmes techniques et d'optimiser leurs performances.\n\nDes analyses approfondies ont été menées, aboutissant à la réalisation de Proofs of Concept (POC) pour les mises à jour en temps réel, démontrant la faisabilité et l'efficacité des solutions proposées.",
			technologies: [
				"Docker",
				"Kubernetes",
				"Microservices",
				"Apache Kafka",
				".NET Core",
			],
		},
		{
			company: "Cdiscount",
			role: "Leader Technique Fullstack .NET Core (C#) / React",
			headerImage:
				"https://images.unsplash.com/photo-1561069934-eee225952461?q=80&w=600&h=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			logo: "/logos/cdiscount.png",
			startDate: "2020-06",
			endDate: "2021-06",
			location: "À distance",
			description:
				"Dans le cadre de cette mission, le coaching, l'accompagnement et la gestion des savoir-faire des équipes techniques inshore et offshore ont été assurés. Une analyse approfondie des besoins et des contraintes techniques a été menée, suivie d'une étude détaillée, d'un chiffrage précis et d'une budgétisation rigoureuse pour les développements à réaliser.\n\nLes phases de développement les plus complexes ont été prises en charge directement, garantissant leur succès.\n\nEn tant que référent pour React, la relecture de code React a été effectuée pour le compte de la direction IT Commerce, contribuant à maintenir des standards de qualité élevés.",
			technologies: [
				"Docker",
				"React.js",
				"Apache Kafka",
				"Kubernetes",
				".NET Core",
				"MongoDB",
			],
		},
		{
			company: "Tech-Magister",
			role: "Fondateur",
			headerImage: "/tech-magister-cover.jpg",
			startDate: "2016-11",
			location: "France et International",
			description:
				"L’entreprise propose des services de coaching, d'accompagnement et de gestion des savoir-faire pour les équipes techniques, assurant un transfert de compétences efficace et durable.\n\nUne analyse approfondie des besoins et des contraintes techniques est réalisée afin de définir les meilleures stratégies de développement. Cela inclut des études détaillées, un chiffrage précis et une budgétisation rigoureuse des projets.\n\nLes phases de développement sont prises en charge, y compris les étapes les plus complexes, ainsi que la mise en place et l'exécution des phases de tests techniques, garantissant des solutions de haute qualité et parfaitement adaptées aux attentes.",
			technologies: ["Développement logiciel", "Gestion de projet", "Scrum"],
			url: "https://www.tech-magister.com/",
		},
	],
	conferences: {
		title: "Conférences",
		subtitle:
			"Partage des connaissances et des expériences avec la communauté technologique",
		cta: "Planifier une conférence",
		headparaph:
			"Partager des connaissances et des expériences est essentiel pour faire avancer le monde technologique. Les interventions réalisées lors de conférences, couvrent des sujets tels que <1>le développement logiciel</1>, <2>les architectures microservices</2>, <3>l'optimisation des performances</3> et <4>les stratégies de croissance pour les entreprises IT</4>. Ces événements sont une opportunité d'inspirer, de transmettre des savoirs pratiques et de créer des échanges enrichissants avec des professionnels passionnés.",
		conferences: [
			{
				title: "Présentation d'un projet FinTech",
				description:
					"Présentation d'un projet dans la sphère FinTech lors d'une conférence.",
				date: "28 mars 2023",
				photos: [
					{
						id: "1",
						url: "/conferences/fintech/1.webp",
						alt: "Présentation d'un projet FinTech photo 1",
					},
					{
						id: "2",
						url: "/conferences/fintech/2.webp",
						alt: "Présentation d'un projet FinTech photo 2",
					},
					{
						id: "3",
						url: "/conferences/fintech/3.webp",
						alt: "Présentation d'un projet FinTech photo 3",
					},
				],
			},
		],
	},
	mentoring: {
		title: "Services de mentorat",
		subtitle:
			"Donner aux développeurs les moyens d’atteindre leur plein potentiel",
		cta: "Planifier une séance de mentorat",
		headparaph: "Vous n'êtes pas allé si loin juste pour vous arrêter là.",
		services: {
			technicalGuidance: {
				title: "Conseils techniques",
				description:
					"Mentorat personnalisé dans l’architecture .NET Core, React et microservices.",
			},
			teamLeadership: {
				title: "Direction d'équipe",
				description:
					"Apprenez des compétences efficaces en matière de gestion d’équipe et de leadership technique.",
			},
			careerCounseling: {
				title: "Orientation professionnelle",
				description:
					"Orientation stratégique pour l'évolution de carrière dans le développement de logiciels.",
			},
		},
	},
	footer: {
		contact: "Contactez-moi",
	},
} satisfies TrFile;
