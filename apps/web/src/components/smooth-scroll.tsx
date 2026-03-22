"use client";
import { useEffect } from "react";

const SCROLL_SPEED_FACTOR = 0.4;

export default function SmoothScroll() {
	useEffect(() => {
		const handleWheel = (e: WheelEvent) => {
			e.preventDefault();
			window.scrollBy({
				top: e.deltaY * SCROLL_SPEED_FACTOR,
				behavior: "instant",
			});
		};

		window.addEventListener("wheel", handleWheel, { passive: false });
		return () => window.removeEventListener("wheel", handleWheel);
	}, []);

	return null;
}
