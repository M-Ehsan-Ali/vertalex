// import { draftMode } from "next/headers";
import { Inter, Raleway } from "next/font/google";

import "@/app/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { isEnabled } = draftMode();

  return (
    <html lang="en">
      <body className={raleway.className}>
        {/* {isEnabled && <PreviewNotice />} */}
        {/* <Navigation /> */}
        <Header />
        <div className="2xl:pt-0 pt-[100px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
