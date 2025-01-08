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
import i18n, { availableLanguages } from "./i18n/i18n";
import { buildMeta } from "./meta";

export const loader = async ({ params, request }: Route.LoaderArgs) => {
	// @ts-expect-error check inclusion
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

	return buildMeta({
		title,
		description,
		keywords,
		siteUrl,
		currentUrl: url,
		locale: i18n.language,
	});
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
				{/* Yandex.Metrika counter */}
				<script
					type="text/javascript"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: Yandex.Metrika
					dangerouslySetInnerHTML={{
						__html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(99440606, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
   });`,
					}}
				/>
				{/* /Yandex.Metrika counter */}
			</head>
			<body>
				{/* Yandex.Metrika counter */}
				<noscript>
					<div>
						<img
							src="https://mc.yandex.ru/watch/99440606"
							style={{ position: "absolute", left: "-9999px" }}
							alt=""
						/>
					</div>
				</noscript>
				{/* /Yandex.Metrika counter */}
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
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-9X1ZS89XE1"
				/>
				<script
					// biome-ignore lint/security/noDangerouslySetInnerHtml: google tags
					dangerouslySetInnerHTML={{
						__html: `window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', 'G-9X1ZS89XE1');`,
					}}
				/>
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
