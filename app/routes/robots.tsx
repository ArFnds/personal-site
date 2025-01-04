export const loader = () => {
	return new Response(
		`User-agent: *
Allow: *

Sitemap: https://arnaudfernandes.com/sitemap.xml
`,
		{
			headers: {
				"Content-Type": "text/plain",
			},
		},
	);
};
