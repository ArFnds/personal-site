import { GlobeIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";
import { Button } from "~/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { availableLanguages } from "~/i18n/i18n";
import { cn } from "~/lib/utils";

const languages = [
	{ code: "en", label: "English" },
	{ code: "fr", label: "Français" },
	{ code: "ru", label: "Русский" },
];

export const LanguageSwitcher = () => {
	const { i18n } = useTranslation();
	const location = useLocation();

	const changeLanguage = (language: string) => {
		const splitedPath = location.pathname.split("/");
		const pathLang = splitedPath[1];
		const hasLang = pathLang && availableLanguages.includes(pathLang);
		if (hasLang) {
			window.location.pathname = location.pathname.replace(
				`/${i18n.language}`,
				`/${language}`,
			);
		} else {
			window.location.pathname = `/${language}${location.pathname}`;
		}
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					{languages
						.find((lang) => lang.code === i18n.language)
						?.code.toUpperCase() || <GlobeIcon />}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{languages.map((lang) => (
					<DropdownMenuItem
						key={lang.code}
						onClick={() => changeLanguage(lang.code)}
						className={cn(
							"cursor-pointer",
							i18n.language === lang.code ? "font-bold" : "",
						)}
					>
						{lang.label}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default LanguageSwitcher;
