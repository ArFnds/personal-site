/// Theme Switcher Component

import { useTranslation } from "react-i18next";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/button";

export default function ThemeSwitcher() {
	const { t } = useTranslation("translation", {
		keyPrefix: "themeSwitcher",
	});
	const { theme, setTheme } = useTheme();
	const handleThemeChange = () => {
		if (theme === "dark") {
			setTheme("light");
			localStorage.setItem("theme", "light");
			document.documentElement.classList.remove("dark");
		} else {
			setTheme("dark");
			localStorage.setItem("theme", "dark");
			document.documentElement.classList.add("dark");
		}
	};
	return (
		<Button variant="outline" onClick={handleThemeChange}>
			{theme === "dark" ? (
				<>
					<Sun className="h-5 w-5" />
					{t("dark")}
				</>
			) : (
				<>
					<Moon className="h-5 w-5" />
					{t("light")}
				</>
			)}
		</Button>
	);
}