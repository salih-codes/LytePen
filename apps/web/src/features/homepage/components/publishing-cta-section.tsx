"use client";

import {
	BarChart2,
	Bell,
	Bookmark,
	ChevronRight,
	CircleDollarSign,
	Compass,
	Home,
	MessageSquare,
	MoreHorizontal,
	PlusSquare,
	Share2,
	Star,
	Upload,
	User,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const sampleBooks = [
	{
		title: "Theft",
		author: "By Abdulrazak Gurnah",
		price: "₦ 6000",
		description:
			"From the winner of the Nobel Prize in Literature comes a profound story of loss, belonging, and the enduring human spirit.",
		rating: "4.5",
		reviews: "12.4k",
		cover: "/sample-books/9781526680143.jpg.jpeg",
		profile:
			"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=150&auto=format&fit=crop",
		name: "Abdulrazak Gurnah",
	},
	{
		title: "Ku Dube Mu",
		author: "By Batul Mamman",
		price: "₦ 3500",
		description:
			"An engaging contemporary novel from TK Novels that captures the heart and imagination of readers across the continent.",
		rating: "4.8",
		reviews: "19.2k",
		cover: "/sample-books/Ku Dube Mu.png",
		profile:
			"https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=150&auto=format&fit=crop",
		name: "Batul Mamman",
	},
	{
		title: "Aura for Aura",
		author: "By Lorraine Damenguah",
		price: "₦ 3000",
		description:
			"A vibrant exploration of style, personality, and romance that brings absolute confident and suave excellence to the forefront.",
		rating: "4.5",
		reviews: "1.2k",
		cover: "/sample-books/aura-for-aura-selar.com-6886be7d9eebb.jpeg",
		profile:
			"https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=150&auto=format&fit=crop",
		name: "Lorraine Damenguah",
	},
];

export default function PublishingCtaSection() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNextBook = () => {
		setCurrentIndex((prev) => (prev + 1) % sampleBooks.length);
	};

	const book = sampleBooks[currentIndex];

	return (
		<section className="w-full bg-[#FFF4E9] py-20 lg:py-32" id="monetization">
			<div className="mx-auto flex w-full max-w-[1288px] flex-col items-center justify-between gap-16 px-6 lg:flex-row lg:items-start lg:gap-8">
				{/* Left Content - Mobile Mockup */}
				<div className="relative flex w-full max-w-[400px] flex-col items-center justify-center lg:items-start lg:pl-4">
					<div className="relative h-[680px] w-[320px] rounded-[3rem] border-[12px] border-gray-900 bg-gray-950 shadow-2xl">
						{/* Notch */}
						<div className="absolute top-0 left-1/2 z-20 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-gray-900" />

						{/* Screen Content */}
						<div className="relative flex h-full w-full flex-col overflow-hidden rounded-[2rem] bg-[#0E121B] text-white">
							{/* Status Bar */}
							<div className="flex h-12 items-center justify-between px-6 font-medium text-[11px] text-gray-300">
								<span>9:41</span>
								<div className="flex items-center gap-1.5">
									<div className="h-2.5 w-4 rounded-[2px] border border-gray-400" />
								</div>
							</div>

							{/* App Header */}
							<div className="flex items-center justify-between px-5 py-2">
								<div className="flex items-center gap-2.5">
									<div className="h-8 w-8 overflow-hidden rounded-full bg-gray-700">
										<Image
											alt="Profile"
											className="h-full w-full object-cover"
											height={32}
											src={book.profile}
											width={32}
										/>
									</div>
									<span className="font-semibold text-sm">{book.name}</span>
								</div>
								<MoreHorizontal className="h-5 w-5 text-gray-400" />
							</div>

							{/* Book Cover Area */}
							<div className="relative mt-2 flex justify-center px-5">
								<div className="relative h-[300px] w-full overflow-hidden rounded-xl bg-gray-800 shadow-xl">
									<Image
										alt={`${book.title} Cover`}
										className="h-full w-full object-cover"
										height={400}
										src={book.cover}
										width={300}
									/>
								</div>
							</div>

							{/* Actions Bar */}
							<div className="mt-4 flex items-center justify-between px-5">
								<div className="flex items-center gap-3">
									<div className="flex items-center gap-1 text-gray-300">
										<MessageSquare className="h-4 w-4" />
										<span className="text-xs">{book.reviews}</span>
									</div>
									<Share2 className="h-4 w-4 text-gray-300" />
									<Bookmark className="h-4 w-4 text-gray-300" />
								</div>
								<div className="flex gap-0.5 text-orange-400">
									<Star className="h-3 w-3 fill-orange-400" />
									<span className="ml-1 font-semibold text-white text-xs">
										{book.rating}
									</span>
								</div>
							</div>

							{/* Book Info */}
							<div className="mt-4 flex items-start justify-between px-5">
								<div className="flex flex-col">
									<h3 className="font-bold text-lg">{book.title}</h3>
									<p className="text-gray-400 text-xs">{book.author}</p>
								</div>
								<span className="font-bold text-lg text-white">
									{book.price}
								</span>
							</div>

							{/* Description */}
							<div className="mt-3 px-5">
								<p className="line-clamp-3 text-[11px] text-gray-400 leading-relaxed">
									{book.description}{" "}
									<span className="font-bold text-white">more</span>
								</p>
							</div>

							{/* Buttons */}
							<div className="mt-4 flex items-center gap-3 px-5">
								<Button className="h-10 flex-1 rounded-xl bg-[#F59E0B] font-semibold text-black hover:bg-yellow-500">
									Buy
								</Button>
								<Button className="h-10 flex-1 rounded-xl border border-gray-700 bg-transparent font-semibold text-white hover:bg-gray-800">
									Gift
								</Button>
							</div>

							{/* Bottom Navigation */}
							<div className="absolute bottom-0 left-0 w-full border-gray-800 border-t bg-[#0E121B] px-6 py-4">
								<div className="flex items-center justify-between text-gray-500">
									<div className="flex flex-col items-center gap-1 text-[#F59E0B]">
										<Home className="h-5 w-5" />
										<span className="font-medium text-[9px]">Home</span>
									</div>
									<div className="flex flex-col items-center gap-1 hover:text-gray-300">
										<Compass className="h-5 w-5" />
										<span className="font-medium text-[9px]">Explore</span>
									</div>
									<div className="flex flex-col items-center gap-1 hover:text-gray-300">
										<PlusSquare className="h-5 w-5" />
										<span className="font-medium text-[9px]">Upload</span>
									</div>
									<div className="flex flex-col items-center gap-1 hover:text-gray-300">
										<Bell className="h-5 w-5" />
										<span className="font-medium text-[9px]">Notification</span>
									</div>
									<div className="flex flex-col items-center gap-1 hover:text-gray-300">
										<User className="h-5 w-5" />
										<span className="font-medium text-[9px]">Profile</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Pagination Dots Below Phone */}
					<div className="mt-8 flex items-center justify-center gap-1.5">
						{sampleBooks.map((b, i) => (
							<div
								className={`h-1.5 w-1.5 rounded-full transition-colors ${
									i === currentIndex ? "bg-gray-800" : "bg-gray-400"
								}`}
								key={b.title}
							/>
						))}
					</div>

					{/* Right Arrow Button next to phone (Desktop only) */}
					<button
						className="absolute top-1/2 right-0 hidden h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-white shadow-xl hover:bg-gray-50 lg:flex"
						onClick={handleNextBook}
						type="button"
					>
						<ChevronRight className="h-5 w-5 text-gray-600" />
					</button>
				</div>

				{/* Right Content - Features */}
				<div className="flex w-full max-w-xl flex-col gap-10">
					<div className="flex flex-col gap-4">
						<h2 className="font-bold font-heading text-4xl text-foreground tracking-tight sm:text-5xl lg:text-6xl">
							Everything you need to succeed as a creator
						</h2>
						<p className="font-medium text-lg text-muted-foreground leading-relaxed">
							Powerful analytics, multiple revenue streams, and seamless
							publishing tools
						</p>
					</div>

					<div className="flex flex-col gap-8">
						{/* Feature 1 */}
						<div className="flex items-start gap-4">
							<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFF2DE] text-[#A16207]">
								<CircleDollarSign className="h-6 w-6" />
							</div>
							<div className="flex flex-col gap-1.5 pt-0.5">
								<h3 className="font-semibold text-foreground text-lg">
									Multiple Monetization Options
								</h3>
								<p className="text-muted-foreground text-sm leading-relaxed">
									Earn from eBook sales, audiobook streams, subscriptions, and
									more with 70% royalty share
								</p>
							</div>
						</div>

						{/* Feature 2 */}
						<div className="flex items-start gap-4">
							<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
								<BarChart2 className="h-6 w-6" />
							</div>
							<div className="flex flex-col gap-1.5 pt-0.5">
								<h3 className="font-semibold text-foreground text-lg">
									Real-Time Analytics
								</h3>
								<p className="text-muted-foreground text-sm leading-relaxed">
									Track your performance with detailed insights on reads,
									earnings, and reader engagement
								</p>
							</div>
						</div>

						{/* Feature 3 */}
						<div className="flex items-start gap-4">
							<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
								<Upload className="h-6 w-6" />
							</div>
							<div className="flex flex-col gap-1.5 pt-0.5">
								<h3 className="font-semibold text-foreground text-lg">
									Easy Publishing Process
								</h3>
								<p className="text-muted-foreground text-sm leading-relaxed">
									Upload your books in minutes with our intuitive interface and
									get published within 24 hours
								</p>
							</div>
						</div>
					</div>

					<div className="pt-2">
						<Button className="h-12 w-auto max-w-[280px] rounded-xl bg-[#9A7001] px-6 font-semibold text-white hover:bg-[#785700]">
							<Upload className="mr-2 h-5 w-5" />
							Start publishing today
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
