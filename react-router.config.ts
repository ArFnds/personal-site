import type { Config } from "@react-router/dev/config";
import { availableLanguages } from "./app/i18n/i18n";

const prerender = availableLanguages.flatMap((lang) => [
	`/${lang}`,
	`/${lang}/about`,
	`/${lang}/portfolio`,
	`/${lang}/mentoring`,
	`/${lang}/conferences`,
	`/${lang}/contact`,
]);

export default {
	// Config options...
	// Server-side render by default, to enable SPA mode set this to `false`
	ssr: true,
	prerender,
} satisfies Config;
