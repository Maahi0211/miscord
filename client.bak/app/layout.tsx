import "@/styles/globals.css";
import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import RetroGrid from "@/components/magicui/retro-grid";
import TextReveal from "@/components/magicui/text-reveal";
import { SiteHeader } from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";

import AnimatedListDemo from "./animatedlist-demo/page";
import GlobePage from "./globe-section/page";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "max-h-auto bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              {/* Header for Miscord */}
              <SiteHeader />

              <div className="mx-auto flex-1 items-center justify-center">
                {/* Main Content (Children) */}
                {children}

                {/* Miscord Feature Showcase */}
              </div>
            </div>

            {/* Feature Showcase Text for Miscord */}


            {/* Game Card (Optional - could be rebranded for Miscord features) */}
            {/* <GameCard /> */}

            {/* Footer for Miscord */}
            <SiteFooter className="fixed inset-x-0 bottom-0 border-t sm:static" />

            {/* Tailwind Indicator */}
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
