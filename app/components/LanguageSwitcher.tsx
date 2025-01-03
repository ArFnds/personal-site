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

const languages = [
	{ code: "en", label: "English" },
	{ code: "fr", label: "Français" },
];

export const LanguageSwitcher = () => {
	const { i18n } = useTranslation();

	const changeLanguage = (language: string) => {
		Cookies.set("lang", language);
		i18n.changeLanguage(language);
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
