import { Menu } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTheme } from "./ThemeProvider";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
	const { t, i18n } = useTranslation();
	const { theme } = useTheme();
	const [isOpen, setIsOpen] = React.useState(false);
	const location = useLocation();

	const navItems = [
		{ path: `/${i18n.language}`, label: t("navigation.home") },
		{ path: `/${i18n.language}/about`, label: t("navigation.about") },
		{ path: `/${i18n.language}/portfolio`, label: t("navigation.portfolio") },
		{ path: `/${i18n.language}/mentoring`, label: t("navigation.mentoring") },
		{
			path: `/${i18n.language}/conferences`,
			label: t("navigation.conferences"),
		},
		{ path: `/${i18n.language}/contact`, label: t("navigation.contact") },
	];

	return (
		<nav className="bg-background text-foreground shadow-lg fixed w-full z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex items-center">
						<NavLink
							to={`/${i18n.language}`}
							className="text-xl font-bold text-foreground"
						>
							<img src="/logo.png" alt="AF" className="w-12 h-12 mr-2 inline" />
							Arnaud Fernandes
						</NavLink>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navItems.map((item) => (
							<NavLink
								key={item.path}
								to={item.path}
								className={({ isActive }) =>
									`text-sm font-medium transition-colors ${
										isActive &&
										(
											item.path !== `/${i18n.language}` ||
												location.pathname === `/${i18n.language}`
										)
											? "text-blue-600"
											: theme === "dark"
												? "text-gray-300 hover:text-blue-400"
												: "text-gray-600 hover:text-blue-600"
									}`
								}
							>
								{item.label}
							</NavLink>
						))}
						<LanguageSwitcher />
						<ThemeSwitcher />
					</div>

					{/* Mobile Navigation Button */}
					<div className="md:hidden flex items-center">
						<button
							type="button"
							onClick={() => setIsOpen(!isOpen)}
							className={`p-2 rounded-md ${
								theme === "dark"
									? "text-gray-300 hover:bg-gray-700"
									: "text-gray-400 hover:bg-gray-100"
							}`}
						>
							<Menu className="h-6 w-6" />
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation Menu */}
			{isOpen && (
				<div className="md:hidden">
					<div
						className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
							theme === "dark" ? "bg-gray-800" : "bg-white"
						}`}
					>
						{navItems.map((item) => (
							<NavLink
								key={item.path}
								to={item.path}
								className={({ isActive }) =>
									`block px-3 py-2 rounded-md text-base font-medium ${
										isActive
											? "text-blue-600 bg-blue-50"
											: theme === "dark"
												? "text-gray-300 hover:text-blue-400"
												: "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
									}`
								}
								onClick={() => setIsOpen(false)}
							>
								{item.label}
							</NavLink>
						))}
						<LanguageSwitcher />
						<ThemeSwitcher />
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
