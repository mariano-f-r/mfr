import "./globals.css";
import { Inter, Fira_Code } from "next/font/google";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const firaCode = Fira_Code({
  subsets:['latin'],
  display:'swap',
  variable: '--font-fira-code',
})

export const metadata = {
  title: "Mariano Rodriguez",
  description: "Mariano Rodriguez's Portfolio Site",
};

export default function RootLayout({ children }) {
  return (
    <html className={`${inter.variable} ${firaCode.variable} text-foreground bg-background`} lang="en">
      <body className="font-sans">
          {children}
      </body>
    </html>
  );
}
