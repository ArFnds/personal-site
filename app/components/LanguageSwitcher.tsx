import { useTranslation } from "react-i18next";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Button } from "~/components/ui/button";
import { GlobeIcon } from "lucide-react";
import { cn } from "~/lib/utils";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router";
import { availableLanguages } from "~/i18n/i18n";

const languages = [
	{ code: "en", label: "English" },
	{ code: "fr", label: "Français" },
];

export const LanguageSwitcher = () => {
	const { i18n } = useTranslation();
	// hooks to redirect
	const location = useLocation();
	const navigate = useNavigate();

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
