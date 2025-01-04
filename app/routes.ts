import type { RouteConfig } from "@react-router/dev/routes";
import { route } from "@react-router/dev/routes";

export default [
	route("/:lang?/", "routes/home.tsx"),
	route("/:lang?/about", "routes/about.tsx"),
	route("/:lang?/portfolio", "routes/portfolio.tsx"),
	route("/:lang?/conferences", "routes/conferences.tsx"),
	route("/:lang?/mentoring", "routes/mentoring.tsx"),
	route("/:lang?/contact", "routes/contact.tsx"),
	route("sitemap.xml", "routes/sitemap.tsx"),
] satisfies RouteConfig;
