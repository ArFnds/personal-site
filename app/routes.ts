import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("/about", "routes/about.tsx"),
	route("/portfolio", "routes/portfolio.tsx"),
	route("/conferences", "routes/conferences.tsx"),
	route("/mentoring", "routes/mentoring.tsx"),
	route("/contact", "routes/contact.tsx"),
] satisfies RouteConfig;
