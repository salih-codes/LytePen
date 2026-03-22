import {
	FileText,
	Globe,
	Info,
	Instagram,
	LayoutGrid,
	Mail,
	Share2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="w-full bg-[#0B0F19] py-16 text-gray-400 text-sm">
			<div className="mx-auto flex w-full max-w-[1288px] flex-col gap-16 px-6">
				{/* Top Grid */}
				<div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
					{/* Logo & Description */}
					<div className="flex flex-col gap-6 lg:col-span-1">
						<Link className="flex items-center gap-2 text-white" href="#">
							<Image
								alt="LytePen logo"
								className="brightness-0 invert"
								height={32}
								src="/logo.svg"
								width={32}
							/>
							<span className="font-semibold text-lg tracking-tight">
								LytePen
							</span>
						</Link>
						<p className="leading-relaxed">
							The world&apos;s leading platform for reading and listening to
							books. Join millions of readers today.
						</p>
					</div>

					{/* Product */}
					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-2 font-semibold text-white">
							<LayoutGrid className="h-5 w-5 text-[#E2B17B]" />
							<span>Product</span>
						</div>
						<ul className="flex flex-col gap-3">
							<li>
								<Link className="transition-colors hover:text-white" href="#">
									Discover
								</Link>
							</li>
							<li>
								<Link className="transition-colors hover:text-white" href="#">
									Audiobooks
								</Link>
							</li>
							<li>
								<Link className="transition-colors hover:text-white" href="#">
									Social features
								</Link>
							</li>
							<li>
								<Link className="transition-colors hover:text-white" href="#">
									Monetization
								</Link>
							</li>
						</ul>
					</div>

					{/* Creators */}
					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-2 font-semibold text-white">
							<FileText className="h-5 w-5 text-[#E2B17B]" />
							<span>Creators</span>
						</div>
						<ul className="flex flex-col gap-3">
							<li>
								<Link className="transition-colors hover:text-white" href="#">
									Publish
								</Link>
							</li>
							<li>
								<Link className="transition-colors hover:text-white" href="#">
									Creator studio
								</Link>
							</li>
							<li>
								<Link className="transition-colors hover:text-white" href="#">
									Revenue model
								</Link>
							</li>
						</ul>
					</div>

					{/* Informations */}
					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-2 font-semibold text-white">
							<Info className="h-5 w-5 text-[#E2B17B]" />
							<span>Informations</span>
						</div>
						<ul className="flex flex-col gap-3">
							<li>
								<Link className="transition-colors hover:text-white" href="#">
									About
								</Link>
							</li>
							<li>
								<Link className="transition-colors hover:text-white" href="#">
									Investor Overview
								</Link>
							</li>
							<li>
								<Link className="transition-colors hover:text-white" href="#">
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Keep In Touch */}
					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-2 font-semibold text-white">
							<Share2 className="h-5 w-5 text-[#E2B17B]" />
							<span>Keep In Touch</span>
						</div>
						<ul className="flex flex-col gap-3">
							<li className="flex items-center gap-2">
								<Globe className="h-4 w-4" />
								<span>lytepen technologies limited</span>
							</li>
							<li className="flex items-center gap-2">
								<Instagram className="h-4 w-4" />
								<span>lytepen</span>
							</li>
							<li className="flex items-center gap-2">
								<XIcon className="h-4 w-4" />
								<span>lytepen</span>
							</li>
							<li className="flex items-center gap-2">
								<Mail className="h-4 w-4" />
								<span>contact@lytepen.com</span>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="flex flex-col items-center justify-between gap-4 border-gray-800 border-t pt-8 sm:flex-row">
					<p>© 2024 Lytepen Technology Limited. All rights reserved.</p>
					<div className="flex items-center gap-6">
						<Link className="transition-colors hover:text-white" href="#">
							Terms of Service
						</Link>
						<Link className="transition-colors hover:text-white" href="#">
							Privacy Policy
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

function XIcon({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>X</title>
			<path d="M4 4l16 16" />
			<path d="M4 20L20 4" />
		</svg>
	);
}
