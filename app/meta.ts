import type { MetaDescriptor } from "react-router";
import { contactInfo } from "./config/contact";

const favicon: MetaDescriptor[] = [
	{
		tagName: "link",
		rel: "icon",
		type: "image/x-icon",
		href: "/favicon.ico",
	},
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

const robotIndex = robots.map((robot) => ({
	tagName: "meta",
	name: robot,
	content: "index",
}));

// <meta name="yandex-verification" content="f21860230b242401" />
const yandex: MetaDescriptor[] = [
	{
		tagName: "meta",
		name: "yandex-verification",
		content: "f21860230b242401",
	},
];

/**
 * Constructs a meta information array for a webpage.
 *
 * @param {Object} params - Parameters for building meta tags.
 * @param {string} params.title - The title of the webpage.
 * @param {string} params.description - A brief description of the webpage content.
 * @param {string} params.keywords - An array of keywords relevant to the webpage.
 * @param {string} params.locale - The locale identifier for the webpage.
 * @param {URL} params.siteUrl - The base URL of the site.
 * @param {URL} params.currentUrl - The current URL of the webpage.
 *
 * @returns {Array} An array of meta descriptors and Open Graph metadata.
 */
export const buildMeta = ({
	title,
	description,
	keywords,
	locale,
	siteUrl,
	currentUrl,
}: {
	title: string;
	description: string;
	keywords: string;
	locale: string;
	siteUrl: string;
	currentUrl: URL;
}) => [
	...favicon,
	...robotIndex,
	...yandex,
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
		href: currentUrl.toString(),
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
		content: currentUrl.toString(),
	},
	{
		property: "og:type",
		content: "profile",
	},
	{
		property: "og:locale",
		content: locale,
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
