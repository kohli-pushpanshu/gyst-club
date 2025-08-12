import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../../components/navBar";


export const metadata = {
  title: "GYST Club",
  description:
    "Join GYST Club – An educational wing of ISKCON Kanpur. Empowering students with practical spirituality for personal and professional excellence.",
  keywords: [
    "GYST Club",
    "ISKCON Kanpur",
    "Bhagavad Gita",
    "Spirituality for Students",
    "Youth Empowerment",
    "Practical Spirituality"
  ],
  icons: {
    icon: '/favi.png',
  },
}

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
