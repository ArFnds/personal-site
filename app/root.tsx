import {
	data,
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import stylesheet from "./app.css?url";
import { I18nextProvider, useTranslation } from "react-i18next";
import Navbar from "./components/NavBar";
import { ThemeProvider } from "./components/ThemeProvider";
import Footer from "./components/Footer";
import i18n from "./i18n/i18n";
import { favicon, robotIndex } from "./meta";

export const loader = async ({ request }: Route.LoaderArgs) => {
	const cookies = request.headers.get("Cookie");
	if (cookies) {
		const cookie = cookies
			.split(";")
			.map((cookie) => cookie.trim())
			.find((cookie) => cookie.startsWith("lang="));
		if (cookie) {
			const lang = cookie.split("=")[1];
			i18n.changeLanguage(lang);
			return data({ lang });
		}
	}
	return {};
};

// meta function
export const meta: Route.MetaFunction = ({ data }: Route.MetaArgs) => {
	const title =
		"Arnaud Fernandes - Software Engineer for custom digital projects";
	const description =
		"Arnaud Fernandes, Software Engineer qui aide les startups et entreprises à concevoir des solutions performantes et sur mesure.";
	const keywords =
		"Arnaud Fernandes, Lead Technique Fullstack, .NET Core, C#, React, Go, développement web, microservices, solutions sur mesure, conseil en informatique, architecture logicielle, startups, développement de logiciels, performance des applications, sécurité des applications, coaching technique, gestion de projet IT";
	const url = "https://arnaudfernandes.com/";
	return [
		...favicon,
		...robotIndex,
		{
			title,
		},
		{
			name: "description",
			content: description,
		},
		{
			name: "keywords",
			content: keywords,
		},
		{
			name: "author",
			content: "Arnaud Fernandes",
		},
		{
			tagName: "link",
			rel: "canonical",
			href: url,
		},
		{
			property: "og:title",
			content: title,
		},
		{
			property: "og:description",
			content: description,
		},
		{
			property: "og:url",
			content: url,
		},
		{
			property: "og:type",
			content: "profile",
		},
		{
			property: "og:locale",
			content: i18n.language,
		},
		{
			property: "og:image",
			content: "https://arnaudfernandes.com/og.jpg",
		},
		{
			property: "og:image:width",
			content: "1920",
		},
		{
			property: "og:image:height",
			content: "929",
		},
		{
			property: "twitter:card",
			content: "summary_large_image",
		},
		{
			property: "twitter:title",
			content: title,
		},
		{
			property: "twitter:description",
			content: description,
		},
		{
			property: "twitter:image",
			content: "https://arnaudfernandes.com/twitter.jpg",
		},
		{
			property: "twitter:site",
			content: "@ArnaudFnds",
		},
		{
			property: "twitter:creator",
			content: "@ArnaudFnds",
		},
	];
};

export const links: Route.LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
	},
	{ rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang={i18n.language} className="system">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<div className="min-h-screen bg-background text-foreground">
					<I18nextProvider i18n={i18n}>
						<ThemeProvider defaultTheme="system">
							<Navbar />
							<main className="pt-16">{children}</main>
							<Footer />
						</ThemeProvider>
					</I18nextProvider>
				</div>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App(_: Route.ComponentProps) {
	return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details =
			error.status === 404
				? "The requested page could not be found."
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className="pt-16 p-4 container mx-auto">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full p-4 overflow-x-auto">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	);
}
