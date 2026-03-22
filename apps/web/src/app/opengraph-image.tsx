import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "LytePen - Africa's new storytelling destination";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

export default function Image() {
	return new ImageResponse(
		<div
			style={{
				background: "linear-gradient(to bottom right, #0B0F19, #2448DB)",
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				fontFamily: "sans-serif",
			}}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					paddingBottom: 20,
				}}
			>
				<svg
					fill="none"
					height="120"
					stroke="white"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					viewBox="0 0 24 24"
					width="120"
				>
					<title>LytePen Logo</title>
					<path d="M12 19l7-7 3 3-7 7-3-3z" />
					<path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
					<path d="M2 2l7.58 7.58" />
					<circle cx="11" cy="11" r="2" />
				</svg>
			</div>
			<div
				style={{
					fontSize: 96,
					fontStyle: "normal",
					letterSpacing: "-0.025em",
					color: "white",
					marginTop: 30,
					padding: "0 120px",
					lineHeight: 1.4,
					whiteSpace: "pre-wrap",
					textAlign: "center",
					fontWeight: "bold",
				}}
			>
				LytePen
			</div>
			<div
				style={{
					fontSize: 48,
					fontStyle: "normal",
					letterSpacing: "-0.025em",
					color: "#CBD5E1",
					marginTop: 20,
					padding: "0 120px",
					lineHeight: 1.4,
					whiteSpace: "pre-wrap",
					textAlign: "center",
				}}
			>
				Africa's storytelling destination
			</div>
		</div>,
		{
			...size,
		}
	);
}
