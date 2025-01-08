import { Image } from "@unpic/react";
import { AnimatePresence, type Variants, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { type FC, type MouseEvent, useEffect, useState } from "react";

import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";

export type Photo = {
	id: number;
	url: string;
	alt: string;
};

export const PhotoGallery: FC<{
	photos: Photo[];
}> = ({ photos }) => {
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [direction, setDirection] = useState(0);

	const handlePhotoClick = (index: number) => {
		setSelectedIndex(index);
		setIsModalOpen(true);
	};

	const handleNext = (e: Pick<MouseEvent, "stopPropagation">) => {
		e.stopPropagation();
		setDirection(1);
		// biome-ignore lint/style/noNonNullAssertion: if next, it means the index is already set
		setSelectedIndex((prev) => (prev! + 1) % photos.length);
	};

	const handlePrevious = (e: Pick<MouseEvent, "stopPropagation">) => {
		e.stopPropagation();
		setDirection(-1);
		// biome-ignore lint/style/noNonNullAssertion: if prev, it means the index is already set
		setSelectedIndex((prev) => (prev! - 1 + photos.length) % photos.length);
	};

	const handleClose = () => {
		setIsModalOpen(false);
		setSelectedIndex(null);
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if (isModalOpen) {
			if (e.key === "ArrowRight") handleNext(e);
			if (e.key === "ArrowLeft") handlePrevious(e);
			if (e.key === "Escape") handleClose();
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: handleKeyDown changes every rerender
	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isModalOpen]);

	const slideVariants: Variants = {
		enter: (direction) => ({
			x: direction > 0 ? "100%" : "-100%",
			opacity: 0,
			position: "absolute",
		}),
		center: {
			x: 0,
			opacity: 1,
			position: "relative",
			transition: {
				duration: 0.3,
				ease: "easeOut",
			},
		},
		exit: (direction) => ({
			x: direction < 0 ? "100%" : "-100%",
			opacity: 0,
			position: "absolute",
			transition: {
				duration: 0.3,
				ease: "easeIn",
			},
		}),
	};

	return (
		<div className="relative">
			{/* Thumbnail Gallery */}
			<motion.div
				className="flex gap-4 overflow-x-auto py-4 px-2"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				{photos.map((photo, index) => (
					<motion.div
						key={photo.id}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<Card
							className="relative cursor-pointer"
							onClick={() => handlePhotoClick(index)}
						>
							<Image
								width={256}
								height={192}
								src={photo.url}
								alt={photo.alt}
								className="h-48 w-64 object-cover rounded-lg"
							/>
						</Card>
					</motion.div>
				))}
			</motion.div>

			{/* Modal View */}
			<AnimatePresence>
				{isModalOpen && selectedIndex !== null && (
					// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
					<div
						className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
						onClick={handleClose}
					>
						<div className="relative w-full h-full flex items-center justify-center p-8">
							{/* Close Button */}
							<Button
								variant="ghost"
								size="icon"
								className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
								onClick={handleClose}
							>
								<X className="h-6 w-6" />
							</Button>

							{/* Navigation Buttons */}
							<Button
								variant="ghost"
								size="icon"
								className="absolute left-4 z-50 text-white hover:bg-white/20"
								onClick={handlePrevious}
							>
								<ArrowLeft className="h-6 w-6" />
							</Button>

							<Button
								variant="ghost"
								size="icon"
								className="absolute right-4 z-50 text-white hover:bg-white/20"
								onClick={handleNext}
							>
								<ArrowRight className="h-6 w-6" />
							</Button>

							{/* Main Image Container */}
							{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
							<div
								onClick={handleClose}
								className="relative w-full h-full flex items-center justify-center overflow-hidden"
							>
								<AnimatePresence
									initial={false}
									custom={direction}
									mode="popLayout"
								>
									<motion.div
										key={selectedIndex}
										custom={direction}
										variants={slideVariants}
										initial="enter"
										animate="center"
										exit="exit"
										className="flex items-center justify-center"
									>
										{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
										<img
											src={photos[selectedIndex].url}
											alt={photos[selectedIndex].alt}
											className="max-w-full max-h-[80vh] w-auto h-auto object-contain"
											onClick={(e) => e.stopPropagation()}
										/>
									</motion.div>
								</AnimatePresence>
							</div>
						</div>
					</div>
				)}
			</AnimatePresence>
		</div>
	);
};
