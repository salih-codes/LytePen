"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
	{ href: "#", label: "Discover" },
	{ href: "#", label: "Creators" },
	{ href: "#", label: "Monetization" },
	{ href: "#", label: "Investors" },
	{ href: "#", label: "About" },
] as const;

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Prevent scrolling when mobile menu is open
	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isMobileMenuOpen]);

	return (
		<header
			className={`sticky top-0 z-50 flex h-25 flex-col justify-center bg-white transition-shadow duration-300 ${
				isScrolled ? "shadow-md" : "shadow-none"
			}`}
		>
			<div className="mx-auto flex h-full max-h-25 w-full max-w-[1288px] items-center justify-between px-6">
				{/* Logo */}
				<Link className="flex items-center gap-2" href="#">
					<Image alt="LytePen logo" height={36} src="/logo.svg" width={36} />
					<span className="font-semibold text-lg tracking-tight">LytePen</span>
				</Link>

				{/* Desktop Nav links (Hidden on mobile/tablet) */}
				<nav className="hidden items-center gap-8 lg:flex">
					{navLinks.map(({ href, label }) => (
						<Link
							className="font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
							href={href}
							key={label}
						>
							{label}
						</Link>
					))}
				</nav>

				{/* Desktop CTA buttons (Hidden on mobile/tablet) */}
				<div className="hidden items-center gap-3 lg:flex">
					<Link
						className="flex h-12 items-center justify-center rounded-xl border-2 border-[#2563EB] px-6 font-semibold text-[#2563EB] transition-colors hover:bg-blue-50"
						href="#"
					>
						Login
					</Link>
					<Link
						className="flex h-12 items-center justify-center rounded-xl bg-[#2563EB] px-6 font-semibold text-white transition-colors hover:bg-[#1E40AF]"
						href="#"
					>
						Join the waitlist
					</Link>
				</div>

				{/* Mobile Menu Toggle Button */}
				<button
					aria-label="Toggle menu"
					className="flex items-center justify-center p-2 text-foreground lg:hidden"
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					type="button"
				>
					{isMobileMenuOpen ? (
						<X className="h-7 w-7" />
					) : (
						<Menu className="h-7 w-7" />
					)}
				</button>
			</div>

			{/* Mobile Navigation Overlay */}
			{isMobileMenuOpen && (
				<div className="absolute top-[100px] left-0 z-40 h-[calc(100vh-100px)] w-full overflow-y-auto border-gray-100 border-t bg-white px-6 py-8 shadow-2xl lg:hidden">
					<nav className="flex flex-col gap-6">
						{navLinks.map(({ href, label }) => (
							<Link
								className="font-bold text-foreground text-xl transition-colors hover:text-[#2563EB]"
								href={href}
								key={label}
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{label}
							</Link>
						))}
					</nav>
					<div className="mt-12 flex flex-col gap-4">
						<Link
							className="flex h-14 w-full items-center justify-center rounded-xl border-2 border-[#2563EB] font-semibold text-[#2563EB] transition-colors hover:bg-blue-50"
							href="#"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Login
						</Link>
						<Link
							className="flex h-14 w-full items-center justify-center rounded-xl bg-[#2563EB] font-semibold text-white transition-colors hover:bg-[#1E40AF]"
							href="#"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Join the waitlist
						</Link>
					</div>
				</div>
			)}
		</header>
	);
}
