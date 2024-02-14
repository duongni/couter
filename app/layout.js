import { ThemeProvider } from "@/components/theme-provider";
import { Lato } from "next/font/google";
import "@/styles/global.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  icons: { icon: "./counter.svg" },
});

export const metadata = {
  title: "simple counter app",
  description: "a minimal counter app to keep track of number for you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={lato.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="main">
            <main className="app">{children}</main>
            <div className="gradient"></div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
