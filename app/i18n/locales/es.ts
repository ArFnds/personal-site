import type { TrFile } from "../types";

export default {
	common: {
		quickLink: "Acceso rápido",
		seeMore: "Ver mas",
	},
	meta: {
		title:
			"Arnaud Fernandes - Ingeniero de software para proyectos digitales personalizados",
		description:
			"Arnaud Fernandes, ingeniero de software que ayuda a startups y empresas a diseñar soluciones eficientes y a medida.",
		keywords:
			"Arnaud Fernandes, líder técnico de Fullstack, .NET Core, C#, React, Go, desarrollo web, microservicios, soluciones a medida, consultoría de TI, arquitectura de software, startups, desarrollo de software, rendimiento de aplicaciones, seguridad de aplicaciones, capacitación técnica, gestión de proyectos de TI",
	},
	navigation: {
		home: "Bienvenido",
		about: "Acerca de",
		portfolio: "Cartera",
		mentoring: "tutoría",
		conferences: "Conferencias",
		contact: "Contacto",
	},
	hero: {
		title: "Arnaud Fernandes",
		subtitle: "Desarrollo de proyectos digitales a medida | ",
		cta: "Contáctame",
	},
	about: {
		title: "Acerca de",
		description:
			"Como apasionado líder técnico full-stack y fundador de una empresa de TI, me especializo en arquitecturas de microservicios y ofrezco soluciones innovadoras y eficientes para nuevas empresas y empresas en crecimiento.",
		digitalDna: {
			title: "ADN digital",
		},
	},
	home: {
		bio: "Ingeniero de software apasionado y experto en soluciones digitales, especializado en <1>desarrollo de aplicaciones web modernas</1>, <2>diseño de arquitecturas de microservicios</2> y <3>consultoría en tecnologías avanzadas</3>. Con una sólida experiencia en grandes empresas y startups, cada proyecto es una oportunidad para transformar ideas en resultados concretos y eficientes.",
	},
	contact: {
		sectionHeader: {
			title: "Contáctame",
			subtitle: "Déjame un mensaje para discutir tu proyecto.",
		},
		formHeader: {
			title: "Contáctame",
			description:
				"Contáctame a través del siguiente formulario o por correo electrónico",
			success: "Gracias por enviar tu mensaje. ",
		},
		form: {
			name: "Nombre",
			email: "Correo electrónico",
			subject: "Sujeto",
			message: "Mensaje",
			submit: "Enviar",
		},
		info: {
			title: "Información del contacto",
			description: "¡Me encantaría saber de ti! ",
			scheduleaMeeting: "Agendar una cita",
			linkedinProfile: "perfil de LinkedIn",
		},
	},
	themeSwitcher: {
		light: "Claro",
		dark: "Oscuro",
	},
	features: {
		feature1: {
			title: "Excelencia Tecnológica",
			description:
				"Especializado en arquitecturas .NET Core, React, Go y microservicios",
		},
		feature2: {
			title: "Crecimiento de startups",
			description:
				"Proporcionar soluciones innovadoras para nuevas empresas y empresas en crecimiento.",
		},
		feature3: {
			title: "Liderazgo de equipo",
			description:
				"Gestión y supervisión de equipos técnicos para alcanzar la excelencia.",
		},
	},
	projects: {
		description:
			"Cada proyecto completado refleja una <1>profunda experiencia técnica</1> y una <2>comprensión de las necesidades específicas del cliente</2>. Desde <3>aplicaciones web modernas</3> hasta <4>arquitecturas de microservicios robustas</4>, pasando por <5>soluciones personalizadas</5>, cada logro demuestra un compromiso con la entrega de resultados de alto rendimiento y sostenibles. Descubra una selección de proyectos que muestran la capacidad de transformar ideas en soluciones concretas e innovadoras.",
		project1: {
			title: "Seguimiento de carga del Eurotúnel",
			description:
				"En este proyecto, se desarrollaron microservicios innovadores para ampliar las capacidades de seguimiento de los camiones de mercancías que cruzan el Canal de la Mancha.\n Paralelamente, se realizó la modernización técnica de componentes esenciales relacionados con el seguimiento de vehículos.\n Además, se mejoró el sistema de back-office que gestiona la aplicación utilizada por los conductores, integrando nuevas funcionalidades para mejorar su experiencia general.",
			technologies: [
				"ReactJS",
				".NET Core",
				"Azure",
				"Microservicios",
				"Docker",
				"Kubernetes",
			],
			imageUrl:
				"https://images.unsplash.com/photo-1495870043034-74e1a009f631?q=80&w=800&h=200&auto=format&fit=crop",
		},
		project2: {
			title: "Cdescuento a voluntad",
			description:
				"En este proyecto, el desarrollo de la oferta 'Cdiscount à volonté' fue una prioridad. Esto implicó la creación de microservicios en Java con Spring y la mejora de la oferta en el sitio web para PC utilizando .NET y C#.\n Además, se realizaron mejoras en la oferta para plataformas móviles y aplicaciones utilizando React JS y React Native, garantizando una experiencia de usuario óptima.",
			technologies: [
				"ReactJS",
				".NET Core",
				"Azure",
				"Microservicios",
				"Docker",
				"Kubernetes",
			],
			imageUrl:
				"https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
			liveUrl: "https://www.cdiscount.com/cdav",
		},
		project3: {
			title: "Detección de imágenes NSFW",
			description:
				"Desarrollo de un servicio de detección de imágenes NSFW (Not Safe For Work) basado en IA para un sistema de carga.",
			technologies: [
				"Pitón",
				"AI",
				"Docker",
				"Microservicios",
				"Kubernetes",
				"GPU",
			],
			imageUrl: "/projects/nsfw.jpg",
		},
		ees: {
			title: "EES (Entry-Exit system)",
			description:
				"El Sistema de Entrada/Salida (EES) será un sistema informático automatizado diseñado para registrar a los viajeros de terceros países. Es un proyecto presentado por la Comisión Europea.\nMi misión en este proyecto fue diseñar e implementar la arquitectura general de la solución (una decena de microservicios, dos frontales, en cinco dominios aplicativos).",
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
		title: "Certificaciones",
	},
	"experiences.title": "Experiencia",
	experiences: [
		{
			company: "Eurotúnel",
			role: "Líder Técnico Fullstack .NET Core (C#) / React",
			headerImage:
				"https://images.unsplash.com/photo-1495870043034-74e1a009f631?q=80&w=600&h=100&auto=fo ",
			logo: "/logos/getlink.webp",
			startDate: "2022-12",
			location: "desde la distancia",
			description:
				"Como parte de esta misión, se llevó a cabo el desarrollo de microservicios innovadores con el fin de ampliar las capacidades de seguimiento de los camiones de carga que cruzan el Canal. \n\n",
			technologies: [
				"C#.NET 6/7/8",
				"ReactJS",
				"Typescript",
				"Azure",
				"Gherkin",
			],
		},
		{
			company: "Inteligente",
			role: "Desarrollador Senior Fullstack .NET Core (C#) / React",
			headerImage:
				"https://images.unsplash.com/photo-1511376868136-742c0de8c9a8?q=80&w=600&h=100&auto=fo ",
			logo: "/logos/sabio.png",
			startDate: "2021-06",
			endDate: "2022-12",
			location: "desde la distancia",
			description:
				"Se brindó soporte para el diseño e implementación de una arquitectura de microservicios, garantizando soluciones robustas y escalables.\n\n",
			technologies: [
				"Docker",
				"Kubernetes",
				"Microservicios",
				"Apache Kafka",
				".NET Core",
			],
		},
		{
			company: "Cdescuento",
			role: "Líder Técnico Fullstack .NET Core (C#) / React",
			headerImage:
				"https://images.unsplash.com/photo-1561069934-eee225952461?q=80&w=600&h=100&auto=form ",
			logo: "/logos/cdiscount.png",
			startDate: "2020-06",
			endDate: "2021-06",
			location: "desde la distancia",
			description:
				"Como parte de esta misión, se brindó capacitación, soporte y gestión del know-how de los equipos técnicos costeros y marinos. ",
			technologies: [
				"Docker",
				"React",
				"Apache Kafka",
				"Kubernetes",
				".NET Core",
				"MongoDB",
			],
		},
		{
			company: "Tech-Magister",
			role: "Fundador",
			headerImage: "/tech-magister-portada.jpg",
			startDate: "2016-11",
			location: "Francia e internacional",
			description:
				"La empresa ofrece servicios de coaching, soporte y gestión del know-how para equipos técnicos, garantizando una transferencia de habilidades efectiva y sostenible.\n\n",
			technologies: ["desarrollo de software", "Gestión de proyectos", "Scrum"],
			url: "https://www.tech-magister.com/",
		},
	],
	conferences: {
		title: "Conferencias",
		subtitle:
			"Compartiendo conocimientos y experiencias con la comunidad tecnológica",
		cta: "Programe una conferencia",
		headparaph:
			"Compartir conocimientos y experiencias es esencial para avanzar en el mundo tecnológico. Las presentaciones realizadas en conferencias, cubren temas como <1>el desarrollo de software</1>, <2>las arquitecturas de microservicios</2>, <3>la optimización del rendimiento</3> y <4>las estrategias de crecimiento para empresas de TI</4>. Estos eventos son una oportunidad para inspirar, transmitir conocimientos prácticos y crear intercambios enriquecedores con profesionales apasionados.",
		conferences: [
			{
				title: "Presentación de un proyecto FinTech",
				description:
					"Presentación de un proyecto en el ámbito FinTech durante una conferencia.",
				date: "28 de marzo de 2023",
				photos: [
					{
						id: "1",
						url: "/conferencias/fintech/1.webp",
						alt: "Presentación de un proyecto FinTech foto 1",
					},
					{
						id: "2",
						url: "/conferencias/fintech/2.webp",
						alt: "Presentación de un proyecto FinTech foto 2",
					},
					{
						id: "3",
						url: "/conferencias/fintech/3.webp",
						alt: "Presentación de un proyecto FinTech foto 3",
					},
				],
			},
		],
	},
	mentoring: {
		title: "Servicios de tutoría",
		subtitle:
			"Empoderar a los desarrolladores para que alcancen su máximo potencial",
		cta: "Programe una sesión de tutoría",
		headparaph: "No ha llegado tan lejos solo para quedarse aquí.",
		services: {
			technicalGuidance: {
				title: "Asesoramiento técnico",
				description:
					"Mentoría personalizada en .NET Core, React y arquitectura de microservicios.",
			},
			teamLeadership: {
				title: "Liderazgo de equipo",
				description:
					"Aprenda habilidades efectivas de gestión de equipos y liderazgo técnico.",
			},
			careerCounseling: {
				title: "orientación profesional",
				description:
					"Orientación estratégica para el avance profesional en el desarrollo de software.",
			},
		},
	},
	footer: {
		contact: "Contáctame",
	},
} satisfies TrFile;