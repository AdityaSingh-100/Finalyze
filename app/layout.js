import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Finalyze",
  description: "AI-powered financial management platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className} min-h-screen flex flex-col overflow-x-hidden`}
        >
          {/* header */}
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Toaster richColors />
          {/* footer */}
          <footer className="bg-blue-50 py-12 mt-auto">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made with Love by Aditya</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
