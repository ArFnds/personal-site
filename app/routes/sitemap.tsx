import { Readable } from "node:stream";
import { SitemapStream, streamToPromise } from "sitemap";
import { siteMapRoutes } from "~/config";
import { availableLanguages } from "~/i18n/i18n";
import { getDomainUrl } from "~/lib/utils";
import type { Route } from "./+types/sitemap";

export const loader = async ({ request }: Route.LoaderArgs) => {
	const hostname = getDomainUrl(request);

	const links = [];

	for (const lng of availableLanguages) {
		for (const route of siteMapRoutes) {
			links.push({
				url: route.path?.replace(":lang?", lng),
				changefreq: "daily",
				priority: 0.3,
			});
		}
	}

	const stream = new SitemapStream({ hostname });

	// Return a promise that resolves with your XML string
	const buffer = await streamToPromise(Readable.from(links).pipe(stream)).then(
		(data) => data.toString(),
	);
	return new Response(buffer, {
		status: 200,
		headers: {
			"Content-Type": "application/xml",
		},
	});
};
