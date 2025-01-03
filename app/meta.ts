import type { MetaDescriptor } from "react-router";

export const favicon: MetaDescriptor[] = [
	{
		tagName: "link",
		rel: "apple-touch-icon",
		sizes: "180x180",
		href: "/apple-touch-icon.png",
	},
	{
		tagName: "link",
		rel: "icon",
		type: "image/png",
		sizes: "32x32",
		href: "/favicon-32x32.png",
	},
	{
		tagName: "link",
		rel: "icon",
		type: "image/png",
		sizes: "16x16",
		href: "/favicon-16x16.png",
	},
	{
		tagName: "link",
		rel: "manifest",
		href: "/site.webmanifest",
	},
];

const robots = [
	"robots",
	"googlebot",
	"googlebot-news",
	"slurp",
	"msnbot",
	"bingbot",
];

export const robotIndex = robots.map((robot) => ({
	tagName: "meta",
	name: robot,
	content: "index",
}));
