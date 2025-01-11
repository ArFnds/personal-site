import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";
import type { FC } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Card, CardContent } from "~/components/ui/card";

const RatingStars: FC<{ rating: number }> = ({ rating }) => {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 !== 0;

	return (
		<div className="flex items-center space-x-1">
			{[...Array(fullStars)].map((_, i) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: it is good to use index in this case
				<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
			))}
			{hasHalfStar && (
				<StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" />
			)}
		</div>
	);
};

const TestimonialList: FC<{
	testimonials: {
		id: number;
		name: string;
		image: string;
		rating: number;
		text: string;
	}[];
}> = ({ testimonials }) => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { x: -20, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
	};

	return (
		<motion.div
			className="grid grid-cols-1 md:grid-cols-2 gap-2"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			{testimonials.map((testimonial) => (
				<motion.div key={testimonial.id} variants={itemVariants}>
					<Card className="hover:shadow-lg transition-shadow">
						<CardContent className="p-4">
							<div className="flex items-start space-x-4">
								<Avatar className="w-12 h-12 flex-shrink-0">
									<AvatarImage src={testimonial.image} alt={testimonial.name} />
									<AvatarFallback>
										{testimonial.name
											.split(" ")
											.map((n) => n[0])
											.join("")}
									</AvatarFallback>
								</Avatar>
								<div className="flex-1 min-w-0">
									<div className="flex items-center justify-between mb-2">
										<div>
											<p className="font-semibold text-sm">
												{testimonial.name}
											</p>
											<RatingStars rating={testimonial.rating} />
										</div>
									</div>
									<p className="text-sm text-gray-700 line-clamp-2 hover:line-clamp-none">
										{testimonial.text}
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</motion.div>
			))}
		</motion.div>
	);
};

export default TestimonialList;
