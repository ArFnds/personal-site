import { TwitterIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import LinkedInIcon from "~/assets/linkedin.svg?react";
import { Separator } from "~/components/ui/separator";
import { cn } from "~/lib/utils";
import { useTheme } from "./ThemeProvider";

const Footer = () => {
	const { t } = useTranslation();
	const { theme } = useTheme(); // Récupérer le thème actuel

	const isDarkTheme = theme === "dark"; // Vérifier si le thème est sombre

	return (
		<footer className={cn("py-6", "bg-background text-foreground")}>
			<div className="container mx-auto px-4">
				{/* Separator */}
				<Separator className="mb-4" />

				<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
					{/* Branding */}
					<div className="text-sm text-center md:text-left">
						&copy; {new Date().getFullYear()}{" "}
						{t("footer.brand", "Arnaud Fernandes")}
					</div>

					{/* Links */}
					<div className="flex items-center space-x-6">
						<a
							href="https://www.linkedin.com/in/arnaudfernandes/"
							target="_blank"
							rel="noopener noreferrer"
							className={`${
								isDarkTheme
									? "text-gray-400 hover:text-gray-100"
									: "text-gray-600 hover:text-gray-800"
							} transition`}
						>
							<LinkedInIcon className="w-5 h-5 inline-block mr-2" />
						</a>
						<a
							href="https://x.com/ArnaudFnds"
							target="_blank"
							rel="noopener noreferrer"
							className={`${
								isDarkTheme
									? "text-gray-400 hover:text-gray-100"
									: "text-gray-600 hover:text-gray-800"
							} transition`}
						>
							<TwitterIcon className="w-5 h-5 inline-block mr-2" />
						</a>
						<NavLink
							to="/contact"
							className={`${
								isDarkTheme
									? "text-gray-400 hover:text-gray-100"
									: "text-gray-600 hover:text-gray-800"
							} transition`}
						>
							{t("footer.contact", "Me contacter")}
						</NavLink>
						<a
							href="/fr/mentions-legales"
							className={`${
								isDarkTheme
									? "text-gray-400 hover:text-gray-100"
									: "text-gray-600 hover:text-gray-800"
							} transition`}
						>
							{t("footer.legal", "Mentions légales")}
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
