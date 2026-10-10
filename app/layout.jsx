import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata = {
  title: "Property Pulse",
  description: "Discover Your Dream Home with Property Pulse",
  keywords:
    "real estate, property listings, home search, property pulse, dream home, property market, real estate platform",
};

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
