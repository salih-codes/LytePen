import { BookOpen, PenTool } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
	return (
		<section className="relative w-full overflow-hidden bg-white py-20 lg:py-32">
			<div className="relative mx-auto flex w-full max-w-[1288px] flex-col items-center gap-16 px-6 lg:flex-row">
				{/* Left Side Content */}
				<div className="z-10 flex flex-1 flex-col items-start gap-8 lg:max-w-[699px]">
					<div className="flex flex-col gap-6">
						<h1 className="font-bold font-heading text-5xl text-foreground leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
							Africa&apos;s Social Ecosystem for Books & Audiobooks
						</h1>
						<p className="max-w-2xl text-lg text-muted-foreground leading-relaxed sm:text-xl">
							Discover, monetize, and discuss African stories in a vibrant,
							mobile-first community.
						</p>
					</div>

					<div className="mt-2 flex flex-wrap items-center gap-4">
						<Button className="h-12 rounded-xl bg-[#2563EB] px-6 font-semibold text-white hover:bg-[#1E40AF]">
							<BookOpen className="mr-2 h-5 w-5" />
							Join as a Reader
						</Button>
						<Button className="h-12 rounded-xl border border-gray-200 bg-white px-6 font-semibold text-gray-900 shadow-sm hover:bg-gray-50">
							<PenTool className="mr-2 h-5 w-5 text-gray-500" />
							Publish as Creator
						</Button>
					</div>

					<div className="mt-8 flex flex-col gap-3">
						<div className="flex items-center gap-4">
							{/* Stacked Avatars */}
							<div className="flex -space-x-3">
								<Avatar className="h-11 w-11 border-2 border-background shadow-sm transition-transform hover:z-10 hover:scale-105">
									<AvatarImage
										alt="User 1"
										src="https://i.pravatar.cc/150?u=1"
									/>
									<AvatarFallback>U1</AvatarFallback>
								</Avatar>
								<Avatar className="h-11 w-11 border-2 border-background shadow-sm transition-transform hover:z-10 hover:scale-105">
									<AvatarImage
										alt="User 2"
										src="https://i.pravatar.cc/150?u=2"
									/>
									<AvatarFallback>U2</AvatarFallback>
								</Avatar>
								<Avatar className="h-11 w-11 border-2 border-background shadow-sm transition-transform hover:z-10 hover:scale-105">
									<AvatarImage
										alt="User 3"
										src="https://i.pravatar.cc/150?u=3"
									/>
									<AvatarFallback>U3</AvatarFallback>
								</Avatar>
								<Avatar className="h-11 w-11 border-2 border-background shadow-sm transition-transform hover:z-10 hover:scale-105">
									<AvatarImage
										alt="User 4"
										src="https://i.pravatar.cc/150?u=4"
									/>
									<AvatarFallback>U4</AvatarFallback>
								</Avatar>
							</div>
							<div className="flex flex-col">
								<span className="font-semibold text-base text-foreground">
									more than 300+
								</span>
							</div>
						</div>
						<p className="font-medium text-muted-foreground text-sm">
							Trusted by early adopters across Nigeria, Ghana, Kenya, and more.
						</p>
					</div>
				</div>

				{/* Right Side Cards */}
				<div className="relative hidden w-full flex-1 items-center justify-center lg:flex lg:justify-end">
					<div className="flex gap-4 xl:gap-6">
						{/* Left Column */}
						<div className="flex flex-col gap-4 font-sans xl:gap-6">
							<div className="relative h-[280px] w-[220px] overflow-hidden rounded-[2rem] shadow-2xl transition-transform hover:scale-[1.02] xl:h-[320px] xl:w-[250px]">
								<Image
									alt="African reader"
									className="h-full w-full object-cover"
									height={500}
									src="/hero-section/download-1.png"
									width={400}
								/>
							</div>
							<div className="relative h-[240px] w-[220px] overflow-hidden rounded-[2rem] shadow-2xl transition-transform hover:scale-[1.02] xl:h-[260px] xl:w-[250px]">
								<Image
									alt="Black student reading"
									className="h-full w-full object-cover"
									height={400}
									src="/hero-section/black-student-reading.png"
									width={400}
								/>
							</div>
						</div>

						{/* Right Column (Staggered) */}
						<div className="flex flex-col gap-4 pt-12 xl:gap-6 xl:pt-16">
							<div className="relative h-[240px] w-[220px] overflow-hidden rounded-[2rem] shadow-2xl transition-transform hover:scale-[1.02] xl:h-[260px] xl:w-[250px]">
								<Image
									alt="Audiobook headphones"
									className="h-full w-full bg-[#F5F7FC] object-cover"
									height={400}
									src="/hero-section/headphones.png"
									width={400}
								/>
							</div>
							<div className="relative h-[280px] w-[220px] overflow-hidden rounded-[2rem] shadow-2xl transition-transform hover:scale-[1.02] xl:h-[320px] xl:w-[250px]">
								<Image
									alt="African shaped bookshelf"
									className="h-full w-full bg-white object-cover"
									height={500}
									src="/hero-section/africa-bookshelf.png"
									width={400}
								/>
							</div>
						</div>
					</div>

					{/* Abstract glowing spheres behind the grid */}
					<div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 opacity-30 blur-[100px]">
						<div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary" />
						<div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-secondary" />
					</div>
				</div>
			</div>
		</section>
	);
}
