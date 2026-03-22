import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ReadingListCtaSection() {
	return (
		<section className="w-full bg-[#2448DB] py-20 lg:py-24">
			<div className="mx-auto flex w-full max-w-[1288px] flex-col items-center justify-center gap-6 px-6 text-center">
				<h2 className="font-bold font-heading text-3xl text-white sm:text-4xl lg:text-5xl">
					Ready to start your reading journey?
				</h2>
				<p className="text-blue-100 sm:text-lg">
					Join millions of readers and listeners worldwide.
				</p>
				<Button className="mt-4 h-12 rounded-xl bg-white px-6 font-semibold text-gray-900 hover:bg-gray-100">
					<Users className="mr-2 h-5 w-5" />
					Join the waitlist
				</Button>
			</div>
		</section>
	);
}
