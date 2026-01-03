import React, { useEffect, useState } from "react";

/**
 * Banner
 * Props:
 *  - categories: array of { id, title, image }
 *
 * Behavior:
 *  - Auto-rotates through categories every 5s
 *  - Manual next/prev controls
 *  - Decorative left/right corner shapes that "cover" the edges visually
 */
export default function Banner({ categories = [] }) {
	const [index, setIndex] = useState(0);
	const len = categories.length;

	useEffect(() => {
		if (len <= 1) return;
		const t = setInterval(() => setIndex((i) => (i + 1) % len), 5000);
		return () => clearInterval(t);
	}, [len]);

	if (!categories || categories.length === 0) return null;

	const current = categories[index];

	return (
		<section className="relative overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<div className="relative animated-gradient banner-shimmer rounded-2xl p-6 sm:p-8 flex items-center justify-between gap-6 overflow-hidden">
					<div className="max-w-2xl text-white">
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">{current.title} Essentials</h1>
						<p className="mt-3 text-lg text-indigo-100">Top picks, deals and trending {current.title.toLowerCase()} curated for you.</p>
						<div className="mt-6 flex items-center gap-3">
							<a href="#" className="inline-block bg-white text-gray-900 font-medium px-5 py-3 rounded-full shadow cta-tilt">Explore {current.title}</a>
							<div className="flex items-center gap-2">
								<button
									onClick={() => setIndex((index - 1 + len) % len)}
									aria-label="Previous"
									className="bg-white/20 text-white px-3 py-2 rounded-full hover:bg-white/30"
								>
									‹
								</button>
								<button
									onClick={() => setIndex((index + 1) % len)}
									aria-label="Next"
									className="bg-white/20 text-white px-3 py-2 rounded-full hover:bg-white/30"
								>
									›
								</button>
							</div>
						</div>
					</div>

					{/* Decorative floating shapes (subtle) */}
					<div className="hidden md:block flex-shrink-0 w-0" aria-hidden />
					<div className="absolute -right-16 top-6 w-36 h-36 bg-white/10 rounded-full blur-3xl floaty opacity-30 pointer-events-none" />
					<div className="absolute -left-20 bottom-8 w-44 h-44 bg-indigo-800/10 rounded-full blur-3xl floaty opacity-25 pointer-events-none" />
				</div>
			</div>

			{/* Decorative corner shapes that extend beyond container to 'cover' left and right corners (moved slightly inward) */}
			<div className="pointer-events-none absolute left-0 top-0 w-48 h-48 bg-purple-600 opacity-20 rounded-br-full transform -translate-x-1/6 -translate-y-1/6" />
			<div className="pointer-events-none absolute right-0 bottom-0 w-48 h-48 bg-indigo-600 opacity-20 rounded-tl-full transform translate-x-1/6 translate-y-1/6" />
		</section>
	);
}
