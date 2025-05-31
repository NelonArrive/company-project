import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"

const manrope = Manrope({
	variable: "--manrope-font",
	display: "swap",
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "Ремито | Главная",
	description: "Бесплатная диагностика + выезд мастера в день обращения 🚗",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={manrope.className}>{children}</body>
		</html>
	)
}
