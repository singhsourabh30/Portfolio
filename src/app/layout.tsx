import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saurabh Singh - Cloud & Cybersecurity Engineer",
  description: "JARVIS-style portfolio showcasing Zero-Trust Architecture, Azure AD Administration, and Cloud Security expertise",
  keywords: [
    "Cloud Engineer",
    "Cybersecurity Engineer",
    "Azure AD",
    "Microsoft 365",
    "Zero Trust Security",
    "PowerShell Automation",
    "Identity Management",
    "Endpoint Security",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0e27" />
      </head>
      <body className="bg-dark-bg text-gray-100 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
