import { AnimatePresence, type Variants, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { type FC, type MouseEventHandler, useState } from "react";
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

	const handleNext: MouseEventHandler<HTMLButtonElement> = (e) => {
		e.stopPropagation();
		setDirection(1);
		// biome-ignore lint/style/noNonNullAssertion: if next, it means the index is already set
		setSelectedIndex((prev) => (prev! + 1) % photos.length);
	};

	const handlePrevious: MouseEventHandler<HTMLButtonElement> = (e) => {
		e.stopPropagation();
		setDirection(-1);
		// biome-ignore lint/style/noNonNullAssertion: if prev, it means the index is already set
		setSelectedIndex((prev) => (prev! - 1 + photos.length) % photos.length);
	};

	const handleClose = () => {
		setIsModalOpen(false);
		setSelectedIndex(null);
	};

	// Animation variants
	const modalVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
		exit: { opacity: 0 },
	};

	const slideVariants: Variants = {
		enter: (direction) => ({
			x: direction > 0 ? 1000 : -1000,
			opacity: 0,
		}),
		center: {
			zIndex: 1,
			x: 0,
			opacity: 1,
		},
		exit: (direction) => ({
			zIndex: 0,
			x: direction < 0 ? 1000 : -1000,
			opacity: 0,
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
							<img
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
					<motion.div
						className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
						variants={modalVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						onClick={handleClose}
					>
						<div className="relative w-full h-full flex items-center justify-center">
							{/* Close Button */}
							<motion.div
								className="absolute top-4 right-4"
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 }}
							>
								<Button
									variant="ghost"
									size="icon"
									className="text-white hover:bg-white/20"
									onClick={handleClose}
								>
									<X className="h-6 w-6" />
								</Button>
							</motion.div>

							{/* Navigation Buttons */}
							<motion.div
								className="absolute left-4"
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.2 }}
							>
								<Button
									variant="ghost"
									size="icon"
									className="text-white hover:bg-white/20"
									onClick={handlePrevious}
								>
									<ArrowLeft className="h-6 w-6" />
								</Button>
							</motion.div>

							<motion.div
								className="absolute right-4"
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.2 }}
							>
								<Button
									variant="ghost"
									size="icon"
									className="text-white hover:bg-white/20"
									onClick={handleNext}
								>
									<ArrowRight className="h-6 w-6" />
								</Button>
							</motion.div>

							{/* Main Image */}
							<AnimatePresence initial={false} custom={direction}>
								<motion.div
									key={selectedIndex}
									custom={direction}
									variants={slideVariants}
									initial="enter"
									animate="center"
									exit="exit"
									transition={{
										x: { type: "spring", stiffness: 300, damping: 30 },
										opacity: { duration: 0.2 },
									}}
									className="absolute max-w-4xl max-h-[80vh] p-4"
								>
									{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
									<img
										src={photos[selectedIndex].url}
										alt={photos[selectedIndex].alt}
										className="max-h-full max-w-full object-contain"
										onClick={(e) => {
											e.stopPropagation();
										}}
									/>
								</motion.div>
							</AnimatePresence>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
