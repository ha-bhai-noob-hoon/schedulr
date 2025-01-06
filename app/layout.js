import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/header";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Schedulr",
  description: "Meeting Scheduling App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {/* Header */}
        <Header />
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {children}
        </main>

        {/* Footer */}
        <footer className="bg-blue-100 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>Made by Abhijit.dev</p>
          </div>
        </footer>
        <CreateEventDrawer />
      </body>
    </html>
    </ClerkProvider>
  );
}
