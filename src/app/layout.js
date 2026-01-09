import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "NutriVibe - Coaching Nutrition",
  description: "Reprenez le contrôle de votre santé.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="h-full">
      <body className="flex flex-col h-full bg-gray-50 text-gray-900">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}