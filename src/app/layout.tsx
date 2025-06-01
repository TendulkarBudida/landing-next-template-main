import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css";
import { Header } from "@/components/header";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
// import ChatBot from "@/components/ui/chatbot";

export const metadata: Metadata = {
  title: "AV Champs - Audio Visual Community",
  description: "Where AV experts unite to share, learn, and lead the industry forward. We don't just build a platform – we cultivate a thriving ecosystem for Audio Visual growth and innovation.",
};

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${sans.className} antialiased bg-background text-primary`} suppressHydrationWarning={true}>        <div>
          <Header />
          
          <main className="bg-page-gradient relative">
            {children}
          </main>
            <ScrollToTop />
          {/* <ChatBot /> */}
        </div>
      </body>
    </html>
  );
}
