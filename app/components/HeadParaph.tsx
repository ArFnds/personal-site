import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import type { FC, PropsWithChildren } from "react";
import React from "react";
import { Card, CardContent } from "~/components/ui/card";
import { cn } from "~/lib/utils";

export const HeadParaph: FC<
	PropsWithChildren & { icon?: React.ReactElement }
> = ({ children, icon = <Terminal /> }) => {
	const Icon = React.cloneElement(icon, {
		className: cn("w-8 h-8 text-slate-400", icon.props.className),
	});
	return (
		<Card className="w-full max-w-3xl mx-auto bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
			<CardContent className="pt-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="relative"
				>
					<div className="absolute -left-4 -top-4">{Icon}</div>

					<p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 pl-6 first-letter:text-3xl first-letter:font-serif first-letter:mr-1 first-letter:float-left first-letter:text-slate-900 dark:first-letter:text-white">
						{children}
					</p>
				</motion.div>
			</CardContent>
		</Card>
	);
};
