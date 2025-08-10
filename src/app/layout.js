import "./globals.css";
import { Figtree, Fira_Code } from "next/font/google";

const inter = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
});

export const metadata = {
  title: "Mariano Rodriguez",
  description: "Mariano Rodriguez's Portfolio Site",
};

export default function RootLayout({ children }) {
  return (
    <html
      className={`${inter.variable} ${firaCode.variable} text-foreground bg-background`}
      lang="en"
    >
      <body className="font-sans">
        <div className="xl:mx-96 max-xl:mx-4 xl:max-w-1/2 mt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
