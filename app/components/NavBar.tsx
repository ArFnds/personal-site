import { Globe, Menu } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTheme } from "./ThemeProvider";

const Navbar = () => {
	const { t, i18n } = useTranslation();
	const { theme } = useTheme();
	const [isOpen, setIsOpen] = React.useState(false);

	const toggleLanguage = () => {
		i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
	};

	const navItems = [
		{ path: "/", label: t("navigation.home") },
		{ path: "/about", label: t("navigation.about") },
		{ path: "/portfolio", label: t("navigation.portfolio") },
		{ path: "/mentoring", label: t("navigation.mentoring") },
		{ path: "/conferences", label: t("navigation.conferences") },
		{ path: "/contact", label: t("navigation.contact") },
	];

	return (
		<nav
			className={`${
				theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
			} shadow-lg fixed w-full z-50`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex items-center">
						<NavLink
							to="/"
							className={`text-xl font-bold ${
								theme === "dark" ? "text-white" : "text-gray-800"
							}`}
						>
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
										isActive
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
						<button
							type="button"
							onClick={toggleLanguage}
							className={`p-2 rounded-full ${
								theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"
							}`}
							aria-label="Toggle Language"
						>
							<Globe className="w-5 h-5" />
						</button>
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
						<button
							type="button"
							onClick={toggleLanguage}
							className={`w-full text-left px-3 py-2 text-base font-medium ${
								theme === "dark"
									? "text-gray-300 hover:bg-gray-700"
									: "text-gray-600 hover:bg-gray-50"
							} rounded-md`}
						>
							{i18n.language === "en" ? "Français" : "English"}
						</button>
						<ThemeSwitcher />
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
