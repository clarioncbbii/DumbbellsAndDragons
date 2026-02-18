import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//! GLOBAL METADATA
export const metadata = {
  title: {
    default: "Dumbbells & Dragon | Train Like a Hero",
    template: "%s | Dumbbells & Dragon",
  },
  description:
    "Dumbbells & Dragon is a gamified, Dungeons & Dragons–inspired fitness adventure. Level up your body, complete quests, defeat monsters, and forge your legend through training.",
  applicationName: "Dumbbells & Dragon",
  keywords: [
    "Dumbbells and Dragon",
    "gamified fitness",
    "Dungeons and Dragons fitness",
    "fitness RPG",
    "fantasy workout",
    "role playing fitness game",
    "level up fitness",
    "quest-based workouts",
    "strength training game",
    "walking Wizard",
    "mobility Mage",
    "bodybuilding Barbarian",
  ],
  authors: [{ name: "The Dumbbells & Dragon Team" }],
  creator: "Dumbbells & Dragon",
  publisher: "Dumbbells & Dragon Studios",
  metadataBase: new URL("https://www.dumbbellsanddragon.com"),

  openGraph: {
    type: "website",
    url: "https://www.dumbbellsanddragon.com",
    title: "Dumbbells & Dragon | Train Like a Hero",
    description:
      "A fantasy fitness experience inspired by Dungeons & Dragons. Dumbbells & Dragon blends fantasy RPG mechanics with real-world training. Train hard, complete quests, roll dice, and forge your legend in the fire. ",
    siteName: "Dumbbells & Dragon",
    images: [
      {
        url: "dumbbelsanddragons-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Dumbbells & Dragon fantasy fitness cover art",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
