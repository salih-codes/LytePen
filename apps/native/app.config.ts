import type { ExpoConfig } from "expo/config";

const APP_VARIANT = process.env.APP_VARIANT ?? "production";

const variantConfig = {
	development: {
		name: "LytePen (Dev)",
		scheme: "lyte-pen-dev",
		bundleIdentifier: "com.lytepen.dev",
	},
	beta: {
		name: "LytePen (Beta)",
		scheme: "lyte-pen-beta",
		bundleIdentifier: "com.lytepen.beta",
	},
	production: {
		name: "LytePen",
		scheme: "lyte-pen",
		bundleIdentifier: "com.lytepen",
	},
} as const;

type Variant = keyof typeof variantConfig;

const isValidVariant = (value: string): value is Variant =>
	value in variantConfig;

if (!isValidVariant(APP_VARIANT)) {
	throw new Error(
		`Invalid APP_VARIANT "${APP_VARIANT}". Must be one of: ${Object.keys(variantConfig).join(", ")}`
	);
}

const variant = variantConfig[APP_VARIANT];

const config: ExpoConfig = {
	name: variant.name,
	slug: "lyte-pen",
	scheme: variant.scheme,
	userInterfaceStyle: "automatic",
	orientation: "default",
	web: {
		bundler: "metro",
	},
	ios: {
		bundleIdentifier: variant.bundleIdentifier,
		infoPlist: {
			UIBackgroundModes: ["audio"],
		},
	},
	android: {
		package: variant.bundleIdentifier,
	},
	plugins: [
		[
			"expo-font",
			{
				fonts: [
					require.resolve(
						"@expo-google-fonts/nunito-sans/200ExtraLight/NunitoSans_200ExtraLight.ttf"
					),
					require.resolve(
						"@expo-google-fonts/nunito-sans/200ExtraLight_Italic/NunitoSans_200ExtraLight_Italic.ttf"
					),
					require.resolve(
						"@expo-google-fonts/nunito-sans/300Light/NunitoSans_300Light.ttf"
					),
					require.resolve(
						"@expo-google-fonts/nunito-sans/300Light_Italic/NunitoSans_300Light_Italic.ttf"
					),
					require.resolve(
						"@expo-google-fonts/nunito-sans/400Regular/NunitoSans_400Regular.ttf"
					),
					require.resolve(
						"@expo-google-fonts/nunito-sans/400Regular_Italic/NunitoSans_400Regular_Italic.ttf"
					),
					require.resolve(
						"@expo-google-fonts/nunito-sans/500Medium/NunitoSans_500Medium.ttf"
					),
					require.resolve(
						"@expo-google-fonts/nunito-sans/500Medium_Italic/NunitoSans_500Medium_Italic.ttf"
					),
					require.resolve(
						"@expo-google-fonts/nunito-sans/600SemiBold/NunitoSans_600SemiBold.ttf"
					),
					require.resolve(
						"@expo-google-fonts/nunito-sans/600SemiBold_Italic/NunitoSans_600SemiBold_Italic.ttf"
					),
					require.resolve(
						"@expo-google-fonts/nunito-sans/700Bold/NunitoSans_700Bold.ttf"
					),
					require.resolve(
						"@expo-google-fonts/nunito-sans/700Bold_Italic/NunitoSans_700Bold_Italic.ttf"
					),
					require.resolve(
						"@expo-google-fonts/nunito-sans/800ExtraBold/NunitoSans_800ExtraBold.ttf"
					),
					require.resolve(
						"@expo-google-fonts/nunito-sans/800ExtraBold_Italic/NunitoSans_800ExtraBold_Italic.ttf"
					),
					require.resolve(
						"@expo-google-fonts/nunito-sans/900Black/NunitoSans_900Black.ttf"
					),
					require.resolve(
						"@expo-google-fonts/nunito-sans/900Black_Italic/NunitoSans_900Black_Italic.ttf"
					),
				],
				android: {
					fonts: [
						{
							fontFamily: "NunitoSans",
							fontDefinitions: [
								{
									path: require.resolve(
										"@expo-google-fonts/nunito-sans/200ExtraLight/NunitoSans_200ExtraLight.ttf"
									),
									weight: 200,
								},
								{
									path: require.resolve(
										"@expo-google-fonts/nunito-sans/200ExtraLight_Italic/NunitoSans_200ExtraLight_Italic.ttf"
									),
									weight: 200,
									style: "italic",
								},
								{
									path: require.resolve(
										"@expo-google-fonts/nunito-sans/300Light/NunitoSans_300Light.ttf"
									),
									weight: 300,
								},
								{
									path: require.resolve(
										"@expo-google-fonts/nunito-sans/300Light_Italic/NunitoSans_300Light_Italic.ttf"
									),
									weight: 300,
									style: "italic",
								},
								{
									path: require.resolve(
										"@expo-google-fonts/nunito-sans/400Regular/NunitoSans_400Regular.ttf"
									),
									weight: 400,
								},
								{
									path: require.resolve(
										"@expo-google-fonts/nunito-sans/400Regular_Italic/NunitoSans_400Regular_Italic.ttf"
									),
									weight: 400,
									style: "italic",
								},
								{
									path: require.resolve(
										"@expo-google-fonts/nunito-sans/500Medium/NunitoSans_500Medium.ttf"
									),
									weight: 500,
								},
								{
									path: require.resolve(
										"@expo-google-fonts/nunito-sans/500Medium_Italic/NunitoSans_500Medium_Italic.ttf"
									),
									weight: 500,
									style: "italic",
								},
								{
									path: require.resolve(
										"@expo-google-fonts/nunito-sans/600SemiBold/NunitoSans_600SemiBold.ttf"
									),
									weight: 600,
								},
								{
									path: require.resolve(
										"@expo-google-fonts/nunito-sans/600SemiBold_Italic/NunitoSans_600SemiBold_Italic.ttf"
									),
									weight: 600,
									style: "italic",
								},
								{
									path: require.resolve(
										"@expo-google-fonts/nunito-sans/700Bold/NunitoSans_700Bold.ttf"
									),
									weight: 700,
								},
								{
									path: require.resolve(
										"@expo-google-fonts/nunito-sans/700Bold_Italic/NunitoSans_700Bold_Italic.ttf"
									),
									weight: 700,
									style: "italic",
								},
								{
									path: require.resolve(
										"@expo-google-fonts/nunito-sans/800ExtraBold/NunitoSans_800ExtraBold.ttf"
									),
									weight: 800,
								},
								{
									path: require.resolve(
										"@expo-google-fonts/nunito-sans/800ExtraBold_Italic/NunitoSans_800ExtraBold_Italic.ttf"
									),
									weight: 800,
									style: "italic",
								},
								{
									path: require.resolve(
										"@expo-google-fonts/nunito-sans/900Black/NunitoSans_900Black.ttf"
									),
									weight: 900,
								},
								{
									path: require.resolve(
										"@expo-google-fonts/nunito-sans/900Black_Italic/NunitoSans_900Black_Italic.ttf"
									),
									weight: 900,
									style: "italic",
								},
							],
						},
					],
				},
			},
		],
		"expo-asset",
		"expo-router",
		"expo-localization",
		"expo-background-task",
		[
			"expo-audio",
			{
				microphonePermission:
					"Allow $(PRODUCT_NAME) to access your microphone.",
			},
		],
		[
			"expo-camera",
			{
				cameraPermission: "Allow $(PRODUCT_NAME) to access your camera",
				microphonePermission: "Allow $(PRODUCT_NAME) to access your microphone",
				recordAudioAndroid: true,
			},
		],
		[
			"expo-document-picker",
			{
				iCloudContainerEnvironment: "Production",
			},
		],
		[
			"expo-image-picker",
			{
				photosPermission:
					"The app accesses your photos to let you share them with your friends.",
			},
		],
		[
			"expo-location",
			{
				locationAlwaysAndWhenInUsePermission:
					"Allow $(PRODUCT_NAME) to use your location.",
			},
		],
		[
			"expo-sqlite",
			{
				enableFTS: true,
				useSQLCipher: true,
			},
		],
		[
			"expo-video",
			{
				supportsBackgroundPlayback: true,
				supportsPictureInPicture: true,
			},
		],
		[
			"expo-video",
			{
				supportsBackgroundPlayback: true,
				supportsPictureInPicture: true,
			},
		],
	],
	experiments: {
		typedRoutes: true,
		reactCompiler: true,
	},
	extra: {
		eas: {
			projectId: "a70317f9-193d-47ee-857b-d13c212e8292",
		},
	},
};

export default { expo: config };
