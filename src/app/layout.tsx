import type { Metadata } from "next";
import { Poppins, Ubuntu } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Sakib Reza - FullStack Developer | Portfolio Website",
  description:
    "I'm Sakib Reza, a passionate Full-Stack Web and App Developer. I specialize in crafting modern websites, feature-rich mobile apps, and robust desktop applications. Explore my portfolio to see how I transform ideas into innovative, high-performance digital solutions using the latest technologies.",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${ubuntu.variable} font-primary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
