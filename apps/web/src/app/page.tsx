import CommunityCtaSection from "@/features/homepage/components/community-cta-section";
import HeroSection from "@/features/homepage/components/hero-section";
import PublishingCtaSection from "@/features/homepage/components/publishing-cta-section";
import ReadingListCtaSection from "@/features/homepage/components/reading-list-cta-section";
import TestimonialsSection from "@/features/homepage/components/testimonials-section";
import TrendingBooksSection from "@/features/homepage/components/trending-books-section";

export default function Page() {
	return (
		<main className="w-full">
			<HeroSection />
			<TrendingBooksSection />
			<CommunityCtaSection />
			<PublishingCtaSection />
			<TestimonialsSection />
			<ReadingListCtaSection />
		</main>
	);
}
