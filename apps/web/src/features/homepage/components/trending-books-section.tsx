import { BookOpen, Headphones, Star } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const books = [
	{
		id: 1,
		title: "Theft",
		author: "Abdulrazak Gurnah",
		publisher: "Bloomsbury",
		rating: 4.5,
		reviews: "12.4k",
		pages: 320,
		category: "Fiction",
		cover: "/sample-books/9781526680143.jpg.jpeg",
	},
	{
		id: 2,
		title: "The Hand of Iman",
		author: "Ryad Assani-Razaki",
		publisher: "Governor General",
		rating: 4.6,
		reviews: "8.2k",
		pages: 288,
		category: "Drama",
		cover:
			"/sample-books/BNCImageAPI_e92de081-7229-4f2f-9c35-d0c99c58e795_1024x1024.jpg.webp",
	},
	{
		id: 3,
		title: "Dream Count",
		author: "Chimamanda Ngozi Adichie",
		publisher: "Knopf",
		rating: 4.9,
		reviews: "45.1k",
		pages: 400,
		category: "Fiction",
		cover: "/sample-books/Dream count.png",
	},
	{
		id: 4,
		title: "Fragile Mental Health",
		author: "Dr. Sarah Adeyemi",
		publisher: "Health Press",
		rating: 4.7,
		reviews: "3.4k",
		pages: 215,
		category: "Self-Help",
		cover: "/sample-books/Fragile-Mental-Health-Front-Cover-01-scaled.jpg.jpeg",
	},
	{
		id: 5,
		title: "Ku Dube Mu",
		author: "Batul Mamman",
		publisher: "TK Novels",
		rating: 4.8,
		reviews: "19.2k",
		pages: 310,
		category: "Romance",
		cover: "/sample-books/Ku Dube Mu.png",
	},
	{
		id: 6,
		title: "Making it Big",
		author: "Femi Otedola",
		publisher: "Business Books",
		rating: 4.7,
		reviews: "22.5k",
		pages: 350,
		category: "Business",
		cover: "/sample-books/Making it Big.png",
	},
	{
		id: 7,
		title: "The Dream Hotel",
		author: "Laila Lalami",
		publisher: "Pantheon",
		rating: 4.6,
		reviews: "6.8k",
		pages: 275,
		category: "Fiction",
		cover:
			"/sample-books/PDF-EPUB-The-Dream-Hotel-by-Laila-Lalami-Download.jpg.jpeg",
	},
	{
		id: 8,
		title: "Aura for Aura",
		author: "Lorraine Damenguah",
		publisher: "Selar",
		rating: 4.5,
		reviews: "1.2k",
		pages: 180,
		category: "Romance",
		cover: "/sample-books/aura-for-aura-selar.com-6886be7d9eebb.jpeg",
	},
	{
		id: 9,
		title: "Beware of IJGBs",
		author: "Chika Oduah",
		publisher: "Selar",
		rating: 4.6,
		reviews: "2.1k",
		pages: 200,
		category: "Comedy",
		cover:
			"/sample-books/beware-of-ijgbs-beware-of-selar.com-692d512653150.jpeg",
	},
	{
		id: 10,
		title: "Gold Coast Dilemma",
		author: "Nana Malone",
		publisher: "Romance Press",
		rating: 4.8,
		reviews: "14.3k",
		pages: 340,
		category: "Romance",
		cover: "/sample-books/gold-coast-dilemma-9781668061183_lg.jpg.jpeg",
	},
];

const audiobooks = [
	{
		id: 1,
		title: "Jollof Rice and Other Revolutions",
		author: "Omolola Ijeoma Ogunyemi",
		publisher: "Amistad",
		rating: 4.5,
		reviews: "8.1k",
		duration: "10 hrs 2 mins",
		category: "Fiction",
		cover: "/sample-audio-books/Jollof Rice and Other Revolutions.png",
	},
	{
		id: 2,
		title: "Kanwar Maza",
		author: "Batul Mamman",
		publisher: "TK Novels",
		rating: 4.8,
		reviews: "15.3k",
		duration: "8 hrs 45 mins",
		category: "Romance",
		cover: "/sample-audio-books/Kanwar maza.png",
	},
	{
		id: 3,
		title: "Magana Jari Ce",
		author: "Abubakar Imam",
		publisher: "NNPC",
		rating: 4.9,
		reviews: "32.4k",
		duration: "12 hrs 15 mins",
		category: "Classic",
		cover: "/sample-audio-books/Magana Jari Ce.png",
	},
	{
		id: 4,
		title: "My Sister, the Serial Killer",
		author: "Oyinkan Braithwaite",
		publisher: "Doubleday",
		rating: 4.7,
		reviews: "56.2k",
		duration: "4 hrs 56 mins",
		category: "Thriller",
		cover: "/sample-audio-books/My Sister the Serial Killer.webp",
	},
	{
		id: 5,
		title: "Only Big Bumbum Matters Tomorrow",
		author: "Damilare Kuku",
		publisher: "Narrative Landscape",
		rating: 4.6,
		reviews: "19.8k",
		duration: "6 hrs 30 mins",
		category: "Comedy",
		cover: "/sample-audio-books/Only Big Bumbum Matters Tomorrow.png",
	},
	{
		id: 6,
		title: "Ruwan Bagaja",
		author: "Abubakar Imam",
		publisher: "NNPC",
		rating: 4.8,
		reviews: "28.5k",
		duration: "9 hrs 10 mins",
		category: "Classic",
		cover: "/sample-audio-books/Ruwan Bagaja.jpeg",
	},
	{
		id: 7,
		title: "Say You're One of Them",
		author: "Uwem Akpan",
		publisher: "Little, Brown",
		rating: 4.8,
		reviews: "14.2k",
		duration: "14 hrs 0 mins",
		category: "Fiction",
		cover: "/sample-audio-books/Say You're One of Them.png",
	},
	{
		id: 8,
		title: "This Impossible Life",
		author: "Ashley Herring Bradley",
		publisher: "Life Press",
		rating: 4.5,
		reviews: "6.7k",
		duration: "7 hrs 25 mins",
		category: "Drama",
		cover: "/sample-audio-books/This impossible life.png",
	},
	{
		id: 9,
		title: "Welcome to Lagos",
		author: "Chibundu Onuzo",
		publisher: "Catapult",
		rating: 4.6,
		reviews: "11.5k",
		duration: "11 hrs 40 mins",
		category: "Fiction",
		cover: "/sample-audio-books/Welcome to Lagos.png",
	},
	{
		id: 10,
		title: "Yoruba Boy Running",
		author: "Biyi Bandele",
		publisher: "Hamish Hamilton",
		rating: 4.9,
		reviews: "9.2k",
		duration: "13 hrs 50 mins",
		category: "Biography",
		cover: "/sample-audio-books/Yoruba Boy Running.jpg.jpeg",
	},
];

interface BookType {
	id: number;
	title: string;
	author: string;
	publisher: string;
	rating: number;
	reviews: string;
	category: string;
	cover: string;
	pages?: number;
	duration?: string;
}

// Reusable card component to extract identical layout structures
function BookCard({
	book,
	isAudio = false,
}: {
	book: BookType;
	isAudio?: boolean;
}) {
	return (
		<article className="group flex flex-col items-start overflow-hidden rounded-2xl border border-border/60 bg-white p-3 shadow-xs transition-shadow hover:shadow-md">
			<div className="relative mb-4 aspect-3/4 w-full overflow-hidden text-clip rounded-xl bg-muted">
				<Image
					alt={book.title}
					className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
					height={300}
					src={book.cover}
					width={200}
				/>
				<div className="absolute top-2 right-2 z-10">
					<Badge
						className="bg-white/95 px-2.5 py-0.5 font-bold text-[10px] text-foreground uppercase hover:bg-white"
						variant="secondary"
					>
						{book.category}
					</Badge>
				</div>
			</div>

			<div className="flex w-full flex-col gap-0.5 px-0.5">
				<h3 className="line-clamp-1 font-semibold text-base text-foreground">
					{book.title}
				</h3>
				<p className="line-clamp-1 text-muted-foreground text-sm">
					{book.author}
				</p>

				<div className="mt-1 flex items-center gap-1.5">
					<Star className="h-3.5 w-3.5 fill-orange-400 text-orange-400" />
					<span className="font-medium text-foreground text-sm">
						{book.rating}
					</span>
					<span className="text-muted-foreground text-xs lg:text-sm">
						({book.reviews})
					</span>
				</div>

				<div className="mt-1 mb-2 flex items-center gap-1.5">
					{isAudio ? (
						<Headphones className="h-3.5 w-3.5 text-muted-foreground" />
					) : (
						<BookOpen className="h-3.5 w-3.5 text-muted-foreground" />
					)}
					<span className="text-muted-foreground text-xs lg:text-sm">
						{isAudio ? book.duration : `${book.pages} pages`}
					</span>
				</div>

				<Button className="mt-2 h-10 w-full rounded-xl bg-[#2563EB] font-medium text-white hover:bg-[#1E40AF]">
					{isAudio ? "Listen" : "Read"}
				</Button>
			</div>
		</article>
	);
}

export default function TrendingBooksSection() {
	return (
		<section className="w-full bg-[#f8f8f8] py-20 lg:py-32" id="discover">
			<div className="mx-auto flex w-full max-w-[1288px] flex-col gap-12 px-6">
				<Tabs className="w-full" defaultValue="books">
					{/* Header Section */}
					<div className="flex w-full flex-col items-start justify-between gap-6 pb-2 sm:flex-row sm:items-center">
						<h2 className="font-bold font-heading text-3xl text-foreground tracking-tight sm:text-4xl lg:text-5xl">
							Explore Trending Books
						</h2>

						<TabsList className="flex h-[84px] w-full shrink-0 rounded-3xl border bg-gray-100/80 p-2 shadow-inner sm:w-[380px]">
							<TabsTrigger
								className="flex-1 rounded-2xl font-bold text-base text-muted-foreground transition-all data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-md sm:text-lg"
								value="books"
							>
								Books
							</TabsTrigger>
							<TabsTrigger
								className="flex-1 rounded-2xl font-bold text-base text-muted-foreground transition-all data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-md sm:text-lg"
								value="audiobooks"
							>
								Audiobooks
							</TabsTrigger>
						</TabsList>
					</div>

					{/* Grid Sections */}
					<TabsContent className="mt-6 outline-none sm:mt-8" value="books">
						<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-6">
							{books.map((book) => (
								<BookCard book={book} key={book.id} />
							))}
						</div>
					</TabsContent>

					<TabsContent className="mt-6 outline-none sm:mt-8" value="audiobooks">
						<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-6">
							{audiobooks.map((book) => (
								<BookCard book={book} isAudio key={book.id} />
							))}
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</section>
	);
}
