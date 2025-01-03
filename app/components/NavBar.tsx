import { Globe, Menu } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

const Navbar = () => {
	const { t, i18n } = useTranslation();
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
		<nav className="bg-white shadow-lg fixed w-full z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex items-center">
						<NavLink to="/" className="text-xl font-bold text-gray-800">
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
									`text-sm font-medium transition-colors hover:text-blue-600 ${
										isActive ? "text-blue-600" : "text-gray-600"
									}`
								}
							>
								{item.label}
							</NavLink>
						))}
						<button
							type="button"
							onClick={toggleLanguage}
							className="p-2 rounded-full hover:bg-gray-100"
							aria-label="Toggle Language"
						>
							<Globe className="w-5 h-5" />
						</button>
					</div>

					{/* Mobile Navigation Button */}
					<div className="md:hidden flex items-center">
						<button
							type="button"
							onClick={() => setIsOpen(!isOpen)}
							className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
						>
							<Menu className="h-6 w-6" />
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation Menu */}
			{isOpen && (
				<div className="md:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						{navItems.map((item) => (
							<NavLink
								key={item.path}
								to={item.path}
								className={({ isActive }) =>
									`block px-3 py-2 rounded-md text-base font-medium ${
										isActive
											? "text-blue-600 bg-blue-50"
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
							className="w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
						>
							{i18n.language === "en" ? "Français" : "English"}
						</button>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
