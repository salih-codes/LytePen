import { Geist_Mono, IBM_Plex_Serif, Inter } from "next/font/google";

import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/footer";
import Header from "@/components/header";
import SmoothScroll from "@/components/smooth-scroll";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const ibmPlexSerifHeading = IBM_Plex_Serif({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-heading",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const fontMono = Geist_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
});

export const metadata: Metadata = {
	title: {
		default: "Lytepen - Africa's new storytelling destination",
		template: "%s | Lytepen",
	},
	description:
		"Lytepen is the premier platform for African literature, audiobooks, and creators. Join early access to shape Africa's reading future.",
	keywords: [
		"African literature",
		"audiobooks",
		"books",
		"reading",
		"publishing",
		"African authors",
	],
	authors: [{ name: "Lytepen" }],
	creator: "Lytepen",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://lytepen.com",
		title: "Lytepen",
		description:
			"An immersive storytelling destination designed to empower African creators and readers alike.",
		siteName: "Lytepen",
	},
	twitter: {
		card: "summary_large_image",
		title: "Lytepen",
		description: "Africa's new storytelling destination.",
		creator: "@lytepen",
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			className={cn(
				"antialiased",
				fontMono.variable,
				"font-sans",
				inter.variable,
				ibmPlexSerifHeading.variable
			)}
			lang="en"
			suppressHydrationWarning
		>
			<body suppressHydrationWarning>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					disableTransitionOnChange
				>
					<SmoothScroll />
					<Header />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
