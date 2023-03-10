import Banner from "../../components/userComponents/Banner";
import Header from "../../components/userComponents/Header";
import "../../styles/globals.css";

export const metadata = {
  title: "Mohsin's portfolio",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-7xl m-auto">
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}
