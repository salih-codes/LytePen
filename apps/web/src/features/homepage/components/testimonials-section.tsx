import {
	Book,
	BookOpen,
	Coins,
	MousePointerClick,
	PenTool,
	Star,
	Users,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function TestimonialsSection() {
	return (
		<section className="w-full bg-[#F5F7FC] py-20 lg:py-32" id="investors">
			<div className="mx-auto flex w-full max-w-[1288px] flex-col items-center gap-16 px-6">
				{/* Header */}
				<div className="flex max-w-3xl flex-col items-center text-center">
					<h2 className="font-bold font-heading text-3xl text-foreground sm:text-4xl lg:text-5xl">
						Be among the first to shape Africa&apos;s reading future
					</h2>
					<p className="mt-4 font-medium text-muted-foreground sm:text-lg">
						Don&apos;t just take our word for it — hear from our community of
						passionate readers and successful authors
					</p>
				</div>

				{/* Stats Row */}
				<div className="grid w-full grid-cols-1 gap-12 text-center md:grid-cols-3 md:gap-8">
					<div className="flex flex-col items-center gap-2">
						<h3 className="font-bold font-heading text-5xl text-foreground lg:text-6xl">
							$50+
						</h3>
						<p className="font-medium text-lg text-muted-foreground">
							Addressable Market
						</p>
					</div>
					<div className="flex flex-col items-center gap-2">
						<h3 className="font-bold font-heading text-5xl text-foreground lg:text-6xl">
							20M
						</h3>
						<p className="font-medium text-lg text-muted-foreground">
							Projected readers/listeners
						</p>
					</div>
					<div className="flex flex-col items-center gap-2">
						<h3 className="font-bold font-heading text-5xl text-foreground lg:text-6xl">
							60%
						</h3>
						<p className="font-medium text-lg text-muted-foreground">
							Under 30 demography
						</p>
					</div>
				</div>

				{/* Testimonial Cards */}
				<div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
					{/* Card 1 */}
					<div className="flex flex-1 flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-xs sm:p-8">
						<div className="mb-6 flex w-fit items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-blue-600">
							<BookOpen className="h-3.5 w-3.5" />
							<span className="font-semibold text-xs uppercase tracking-wider">
								Reader
							</span>
						</div>
						<div className="mb-5 flex items-center gap-4">
							<Image
								alt="Michael Thompson"
								className="h-14 w-14 rounded-full object-cover"
								height={56}
								src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=150&auto=format&fit=crop"
								width={56}
							/>
							<div className="flex flex-col">
								<h4 className="font-bold text-foreground text-lg">
									Michael Thompson
								</h4>
								<span className="font-medium text-muted-foreground text-sm">
									Avid Reader
								</span>
								<span className="text-muted-foreground text-xs">Kaduna</span>
							</div>
						</div>
						<div className="mb-4 flex items-center gap-1 text-orange-500">
							<Star className="h-4 w-4 fill-orange-500" />
							<Star className="h-4 w-4 fill-orange-500" />
							<Star className="h-4 w-4 fill-orange-500" />
							<Star className="h-4 w-4 fill-orange-500" />
							<Star className="h-4 w-4 fill-orange-500" />
						</div>
						<p className="font-medium text-gray-600 text-sm leading-relaxed">
							&quot;Lytepen has completely transformed my reading habits. The
							seamless experience between reading and listening is incredible.
							I&apos;ve finished more books in the past 3 months than I did all
							of last year!&quot;
						</p>
						<div className="mt-auto pt-6">
							<div className="flex items-center gap-2 border-gray-100 border-t pt-6 text-gray-500">
								<Book className="h-5 w-5" />
								<span className="font-medium text-sm">127 books read</span>
							</div>
						</div>
					</div>

					{/* Card 2 */}
					<div className="flex flex-1 flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-xs sm:p-8">
						<div className="mb-6 flex w-fit items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-blue-600">
							<PenTool className="h-3.5 w-3.5" />
							<span className="font-semibold text-xs uppercase tracking-wider">
								Creator
							</span>
						</div>
						<div className="mb-5 flex items-center gap-4">
							<Image
								alt="Sophie Martinez"
								className="h-14 w-14 rounded-full object-cover"
								height={56}
								src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=150&auto=format&fit=crop"
								width={56}
							/>
							<div className="flex flex-col">
								<h4 className="font-bold text-foreground text-lg">
									Sophie Martinez
								</h4>
								<span className="font-medium text-muted-foreground text-sm">
									Bestselling Author
								</span>
								<span className="text-muted-foreground text-xs">Lagos,NG</span>
							</div>
						</div>
						<div className="mb-4 flex items-center gap-1 text-orange-500">
							<Star className="h-4 w-4 fill-orange-500" />
							<Star className="h-4 w-4 fill-orange-500" />
							<Star className="h-4 w-4 fill-orange-500" />
							<Star className="h-4 w-4 fill-orange-500" />
							<Star className="h-4 w-4 fill-orange-500" />
						</div>
						<p className="font-medium text-gray-600 text-sm leading-relaxed">
							&quot;As an author, Lytepen has given me direct access to my
							readers like never before. The analytics are fantastic, and the
							70% royalty share is industry-leading. My readership has grown
							exponentially!&quot;
						</p>
						<div className="mt-auto pt-6">
							<div className="flex items-center gap-2 border-gray-100 border-t pt-6 text-gray-500">
								<PenTool className="h-5 w-5" />
								<span className="font-medium text-sm">8 books published</span>
							</div>
						</div>
					</div>

					{/* Card 3 */}
					<div className="flex flex-1 flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-xs sm:p-8">
						<div className="mb-6 flex w-fit items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-blue-600">
							<BookOpen className="h-3.5 w-3.5" />
							<span className="font-semibold text-xs uppercase tracking-wider">
								Reader
							</span>
						</div>
						<div className="mb-5 flex items-center gap-4">
							<Image
								alt="Rachel Kim"
								className="h-14 w-14 rounded-full object-cover"
								height={56}
								src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=150&auto=format&fit=crop"
								width={56}
							/>
							<div className="flex flex-col">
								<h4 className="font-bold text-foreground text-lg">
									Rachel Kim
								</h4>
								<span className="font-medium text-muted-foreground text-sm">
									Audiobook Listener
								</span>
								<span className="text-muted-foreground text-xs">Ghana</span>
							</div>
						</div>
						<div className="mb-4 flex items-center gap-1 text-orange-500">
							<Star className="h-4 w-4 fill-orange-500" />
							<Star className="h-4 w-4 fill-orange-500" />
							<Star className="h-4 w-4 fill-orange-500" />
							<Star className="h-4 w-4 fill-orange-500" />
							<Star className="h-4 w-4 fill-orange-500" />
						</div>
						<p className="font-medium text-gray-600 text-sm leading-relaxed">
							&quot;I'm obsessed with the audiobook features! The narration
							quality is excellent, and I love being able to adjust playback
							speed. The offline download feature is perfect for my long
							flights.&quot;
						</p>
						<div className="mt-auto pt-6">
							<div className="flex items-center gap-2 border-gray-100 border-t pt-6 text-gray-500">
								<Book className="h-5 w-5" />
								<span className="font-medium text-sm">173 books read</span>
							</div>
						</div>
					</div>
				</div>

				{/* Center CTA */}
				<div className="my-8 flex flex-col items-center gap-5">
					<span className="font-bold text-foreground">
						Africa&apos;s new storytelling destinaton
					</span>
					<Button className="h-11 rounded-lg bg-[#2563EB] px-6 font-semibold text-white hover:bg-[#1E40AF]">
						Join early access
					</Button>
				</div>

				{/* Why Lytepen Section */}
				<div className="flex w-full flex-col items-center gap-10" id="about">
					<h2 className="font-bold font-heading text-3xl text-foreground sm:text-4xl">
						Why Lytepen
					</h2>
					<div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
						{/* Card 1 */}
						<div className="flex flex-col items-start gap-4 rounded-3xl bg-[#FFF3E0] p-6 lg:p-8">
							<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFE0B2] text-orange-600">
								<MousePointerClick className="h-6 w-6" />
							</div>
							<h3 className="font-bold text-foreground text-lg leading-tight">
								Built for African Digital Consumers
							</h3>
							<p className="text-gray-700 text-sm leading-relaxed">
								Low data optimization.
								<br />
								Local payment systems.
								<br />
								Mobile-first.
							</p>
						</div>

						{/* Card 2 */}
						<div className="flex flex-col items-start gap-4 rounded-3xl bg-[#FFF3E0] p-6 lg:p-8">
							<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFE0B2] text-orange-600">
								<Coins className="h-6 w-6" />
							</div>
							<h3 className="font-bold text-foreground text-lg leading-tight">
								Creator Economy Engine
							</h3>
							<p className="text-gray-700 text-sm leading-relaxed">
								Direct monetization.
								<br />
								Audience ownership.
								<br />
								Engagement analytics.
							</p>
						</div>

						{/* Card 3 */}
						<div className="flex flex-col items-start gap-4 rounded-3xl bg-[#FFF3E0] p-6 lg:p-8">
							<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFE0B2] text-orange-600">
								<Users className="h-6 w-6" />
							</div>
							<h3 className="font-bold text-foreground text-lg leading-tight">
								Social Reading Layer
							</h3>
							<p className="text-gray-700 text-sm leading-relaxed">
								Identity.
								<br />
								Belonging.
								<br />
								Gaming.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
