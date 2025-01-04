import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	data,
	isRouteErrorResponse,
	redirect,
} from "react-router";

import { I18nextProvider } from "react-i18next";
import type { Route } from "./+types/root";
import stylesheet from "./app.css?url";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import { ThemeProvider } from "./components/ThemeProvider";
import { siteUrl } from "./config";
import { contactInfo } from "./config/contact";
import i18n, { availableLanguages } from "./i18n/i18n";
import { favicon, robotIndex } from "./meta";

export const loader = async ({ params, request }: Route.LoaderArgs) => {
	if (params.lang && availableLanguages.includes(params.lang)) {
		i18n.changeLanguage(params.lang);
		return data({ lang: params.lang });
	}
	const url = new URL(request.url);
	return redirect(`/${i18n.language}${url.pathname}`);
};

// meta function
export const meta: Route.MetaFunction = ({ location }: Route.MetaArgs) => {
	const t = i18n.t;
	const title = t("meta.title");
	const description = t("meta.description");
	const keywords = t("meta.keywords");

	const url = new URL(location.pathname, siteUrl);

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
			href: url.toString(),
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
			content: url.toString(),
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
			content: `${siteUrl}/og.jpg`,
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
			content: `${siteUrl}/twitter.jpg`,
		},
		{
			property: "twitter:site",
			content: contactInfo.twitter,
		},
		{
			property: "twitter:creator",
			content: contactInfo.twitter,
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
